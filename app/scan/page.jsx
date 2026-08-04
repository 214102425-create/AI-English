"use client"


import {
useState
}
from "react"



export default function Scan(){


const [file,setFile]=useState(null)



async function upload(){


let form=new FormData()

form.append(
"image",
file
)


let res=await fetch(

process.env.NEXT_PUBLIC_API_URL+
"/vision",

{

method:"POST",

body:form

}

)


let data=await res.json()


console.log(data)


}



return (

<div className="
p-10
">


<h1 className="
text-4xl font-bold
">

📷 AI识词

</h1>


<input

type="file"

onChange={
e=>setFile(e.target.files[0])
}

/>


<button

onClick={upload}

className="
bg-black text-white p-4 mt-5 rounded-xl
">

开始识别

</button>


</div>

)

}