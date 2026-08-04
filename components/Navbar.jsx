import Link from "next/link"



export default function Navbar(){


return (

<nav className="
flex justify-between
p-6
">


<h1 className="
font-black text-2xl
">

AI English

</h1>


<div className="
flex gap-5
">


<Link href="/scan">
拍照学习
</Link>


<Link href="/teacher">
AI老师
</Link>


<Link href="/login">
登录
</Link>


</div>


</nav>

)

}