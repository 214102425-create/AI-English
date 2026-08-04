import "./globals.css"

import Navbar from "@/components/Navbar"

import Footer from "@/components/Footer"



export const metadata={

title:"AI English",

description:
"AI英语学习助手"

}



export default function Layout({
children
}){


return (

<html lang="zh">


<body>


<Navbar/>


{children}


<Footer/>


</body>


</html>

)

}