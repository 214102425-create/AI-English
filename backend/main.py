from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware


from app.routers import (

vision,

teacher,

speech,

words,

admin

)



app=FastAPI(

title="AI English API",

version="1.0"

)



app.add_middleware(

CORSMiddleware,

allow_origins=["*"],

allow_methods=["*"],

allow_headers=["*"]

)



app.include_router(
vision.router
)


app.include_router(
teacher.router
)


app.include_router(
speech.router
)


app.include_router(
words.router
)


app.include_router(
admin.router
)



@app.get("/")
def home():

    return {

    "message":
    "AI English API Running"

    }