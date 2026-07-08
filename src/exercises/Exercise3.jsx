import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Exercise3(){
    useGSAP(()=>{
        gsap.to(".box",{
            borderRadius:'50%',
            scale:1.2,
            duration:3,
            repeat:-1,
            yoyo:true,
            backgroundColor:'green'
        })
    })

    return (
        <div className="w-24 h-24 bg-pink-500 box m-[100px]"></div>
    )
}

export default Exercise3