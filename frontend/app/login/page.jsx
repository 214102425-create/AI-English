"use client"


import {
useState
}
from "react"



export default function Login(){


const [email,setEmail]=useState("")



async function login(){


console.log(email)


}



return (

<div className="
min-h-screen
flex
items-center
justify-center
">


<div className="
bg-white
shadow
rounded-3xl
p-10
w-96
">


<h1 className="
text-3xl font-bold
">

登录AI English

</h1>


<input

className="
border p-3 rounded-xl mt-5 w-full
"

placeholder="邮箱"

onChange={
e=>setEmail(e.target.value)
}

/>


<button

onClick={login}

className="
bg-black text-white p-3 rounded-xl w-full mt-5
">

登录

</button>


</div>


</div>

)

}