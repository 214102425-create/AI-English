import Link from "next/link"


export default function Hero(){


return (

<section className="
min-h-screen
flex
items-center
px-10
bg-gradient-to-br
from-blue-100
to-white
">


<div>


<h1 className="
text-6xl
font-black
">

AI English

</h1>


<h2 className="
text-3xl mt-5
">

你的私人AI英语老师

</h2>


<p className="
mt-6 text-gray-600
">

拍照识词

+

AI发音

+

智能口语训练

</p>



<div className="
mt-10 flex gap-5
">


<Link

href="/scan"

className="
bg-black
text-white
px-8 py-4 rounded-xl
">

开始学习

</Link>


<Link

href="/teacher"

className="
border px-8 py-4 rounded-xl
">

AI老师

</Link>


</div>


</div>


</section>

)

}