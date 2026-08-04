from fastapi import APIRouter


from app.database import supabase



router=APIRouter(

prefix="/words"

)



@router.post("/save")

def save(data:dict):


    result=supabase.table(

    "words"

    ).insert(data).execute()



    return result.data



@router.get("/{uid}")

def get(uid:str):


    result=supabase.table(

    "words"

    ).select("*").eq(

    "user_id",

    uid

    ).execute()


    return result.data
