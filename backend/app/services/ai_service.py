from openai import OpenAI


from app.config import OPENAI_API_KEY



client=OpenAI(

api_key=OPENAI_API_KEY

)



def create_word_card(word):


    response=client.chat.completions.create(


    model="gpt-4.1-mini",


    messages=[


    {

    "role":"system",

    "content":

    """
    你是英语老师。
    输出：

    单词

    音标

    中文释义

    英文例句

    """

    },


    {

    "role":"user",

    "content":word

    }


    ]


    )


    return response.choices[0].message.content
