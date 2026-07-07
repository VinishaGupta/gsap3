import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Exercise2(){
    useGSAP(()=>{
        gsap.to(".ball",{
            y:400,
            duration:2,
            ease:'bounce.out',
            yoyo:true,
            repeat:-1
        })
    })

    return(
        <div className="rounded-full bg-red-600 w-24 h-24 ball"></div>
    )
}

export default Exercise2