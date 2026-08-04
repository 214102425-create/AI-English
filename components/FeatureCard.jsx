export default function FeatureCard({
icon,
title,
desc
}){


return (

<div className="
bg-white
shadow
rounded-3xl
p-8
">


<div className="
text-5xl
">

{icon}

</div>


<h2 className="
text-2xl font-bold mt-5
">

{title}

</h2>


<p className="
mt-3 text-gray-500
">

{desc}

</p>


</div>

)

}