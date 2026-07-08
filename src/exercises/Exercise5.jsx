import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Exercise5(){

    useGSAP(()=>{
        gsap.to('.box',{
            y:-100,
            duration:2,
            stagger:0.2,
            yoyo:true,
            repeat:-1,
            rotation:360
        })
    })
    return(
        <>
        <div className="">
            <div className="box h-28 w-20 bg-purple-200"></div>
            <div className="box h-28 w-20 bg-purple-300"></div>
            <div className="box h-28 w-20 bg-purple-400"></div>
            <div className="box h-28 w-20 bg-purple-500"></div>
            <div className="box h-28 w-20 bg-purple-600"></div>

        </div>


        </>
    )
}

export default Exercise5