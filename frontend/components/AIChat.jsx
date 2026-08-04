"use client"


import {
useState
}
from "react"



export default function AIChat(){


const [msg,setMsg]=useState("")

const [list,setList]=useState([])



async function send(){


let res=

await fetch(

process.env.NEXT_PUBLIC_API_URL+
"/teacher/chat",

{

method:"POST",

headers:{

"Content-Type":
"application/json"

},

body:

JSON.stringify({

message:msg

})

}

)



let data=
await res.json()



setList([

...list,

{
user:msg,
ai:data.reply
}

])


setMsg("")

}



return (

<div className="
bg-white
rounded-3xl
shadow
p-8
mt-10
">


<div className="
h-64
overflow-auto
">


{

list.map(
(x,i)=>(


<div
key={i}
className="mb-5"
>


<p>

👤 {x.user}

</p>


<p>

🤖 {x.ai}

</p>


</div>


)

)

}


</div>



<div className="
flex gap-3
mt-5
">


<input

value={msg}

onChange={
e=>setMsg(e.target.value)
}

className="
border rounded-xl p-3 flex-1
"

placeholder="输入英语..."

/>


<button

onClick={send}

className="
bg-black text-white px-6 rounded-xl
">

发送

</button>


</div>


</div>

)

}