import os


from openai import OpenAI



client=OpenAI(

api_key=os.getenv(
"OPENAI_API_KEY"
)

)



def vision_extract(image_url):


    result=client.chat.completions.create(

    model="gpt-4.1-mini",


    messages=[


    {

    "role":"user",

    "content":[


    {

    "type":"text",

    "text":
    "提取图片中的英文单词"

    },


    {

    "type":"image_url",

    "image_url":

    {

    "url":image_url

    }

    }


    ]

    }


    ]

    )


    return result.choices[0].message.content
