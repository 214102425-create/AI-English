export default function Admin(){


return (

<div className="
p-10
">


<h1 className="
text-5xl font-black
">

AI English Admin

</h1>


<div className="
grid md:grid-cols-4 gap-5 mt-10
">


{

[
["用户","12580"],
["会员","386"],
["OCR次数","8230"],
["收入","¥12600"]

].map(
x=>(

<div

key={x[0]}

className="
bg-white shadow rounded-3xl p-8
">


<p>

{x[0]}

</p>


<h2 className="
text-4xl font-bold
">

{x[1]}

</h2>


</div>

)

)

}


</div>


</div>

)

}