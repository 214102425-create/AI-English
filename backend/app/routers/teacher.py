from fastapi import APIRouter


from app.services.ai_service import client



router=APIRouter(

prefix="/teacher"

)



@router.post("/chat")

def chat(data:dict):


    result=client.chat.completions.create(


    model="gpt-4.1-mini",


    messages=[


    {

    "role":"system",

    "content":
    """
    你是一名英语老师。
    纠正学生错误。
    给出自然表达。
    """

    },


    {

    "role":"user",

    "content":data["message"]

    }


    ]

    )


    return {


    "reply":

    result.choices[0].message.content

    }
