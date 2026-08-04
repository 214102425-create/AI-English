from fastapi import APIRouter,UploadFile


router=APIRouter(

prefix="/speech"

)



@router.post("")

async def score(

audio:UploadFile

):


    return {


    "accuracy":92,


    "fluency":88,


    "completeness":95,


    "suggestion":

    "注意单词重音"

    }
