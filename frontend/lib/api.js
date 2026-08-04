const API=

process.env.NEXT_PUBLIC_API_URL



export async function vision(file){


let form=
new FormData()


form.append(
"image",
file
)


let res=

await fetch(

API+"/vision",

{

method:"POST",

body:form

}

)


return res.json()

}



export async function teacher(message){


let res=

await fetch(

API+"/teacher/chat",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:

JSON.stringify({

message

})

}

)


return res.json()

}