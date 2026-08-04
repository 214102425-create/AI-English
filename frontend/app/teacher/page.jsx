"use client"

import AIChat from "@/components/AIChat"

import VoiceRecorder from "@/components/VoiceRecorder"


export default function Teacher(){


return (

<div className="
p-10
min-h-screen
bg-gray-50
">


<h1 className="
text-5xl
font-black
">

🤖 AI英语老师

</h1>


<p className="
mt-5
text-gray-600
">

选择场景，与AI练习英语

</p>


<div className="
grid md:grid-cols-5 gap-4 mt-10
">


{

[
"日常交流",
"机场英语",
"商务英语",
"雅思口语",
"面试英语"

].map(
x=>(

<button

key={x}

className="
bg-white
rounded-xl
p-5
shadow
">

{x}

</button>

)

)

}


</div>



<AIChat/>


<VoiceRecorder/>


</div>

)

}