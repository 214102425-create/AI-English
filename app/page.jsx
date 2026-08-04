import Hero from "@/components/Hero"

import FeatureCard from "@/components/FeatureCard"



export default function Home(){


const data=[

[
"📷",
"AI拍照识词",
"上传图片自动识别英语"
],

[
"🎧",
"发音评分",
"AI纠正你的口语"
],

[
"🤖",
"AI老师",
"24小时英语陪练"
],

[
"📊",
"学习报告",
"记录成长"
]

]


return (

<main>


<Hero/>


<section className="
grid md:grid-cols-4 gap-6 p-10
">


{

data.map(
(x)=>(

<FeatureCard

key={x[1]}

icon={x[0]}

title={x[1]}

desc={x[2]}

/>

)

)

}


</section>


</main>

)

}