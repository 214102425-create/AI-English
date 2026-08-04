"use client"


import {
useState
}
from "react"



export default function VoiceRecorder(){


const [status,setStatus]=useState(
"等待录音"
)



function start(){


navigator.mediaDevices
.getUserMedia({

audio:true

})


.then(()=>{

setStatus(
"🎙 正在录音..."
)

})


}



return (

<div className="
mt-10
">


<button

onClick={start}

className="
bg-blue-600
text-white
px-8
py-4
rounded-full
">

开始跟读

</button>


<p className="
mt-4
">

{status}

</p>


</div>

)

}