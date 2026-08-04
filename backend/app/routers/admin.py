from fastapi import APIRouter


from app.database import supabase



router=APIRouter(

prefix="/admin"

)



@router.get("/stats")

def stats():


    users=supabase.table(

    "profiles"

    ).select("*").execute()



    words=supabase.table(

    "words"

    ).select("*").execute()



    return {


    "users":

    len(users.data),


    "words":

    len(words.data)

    }
