from fastapi import APIRouter,UploadFile


import tempfile


from app.services.ocr_service import read_image


from app.services.ai_service import create_word_card



router=APIRouter(

prefix="/vision"

)



@router.post("")

async def vision(

image:UploadFile

):


    file=tempfile.NamedTemporaryFile(

    delete=False

    )


    file.write(

    await image.read()

    )


    text=read_image(

    file.name

    )


    words=text.split()


    cards=[]


    for word in words[:20]:

        cards.append(

        create_word_card(word)

        )


    return {


    "text":text,

    "cards":cards

    }
