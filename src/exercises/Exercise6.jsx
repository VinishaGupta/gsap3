import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Exercise6(){

    const timeline=gsap.timeline({
        repeat:-1
    })

    useGSAP(()=>{
        timeline.to('.circle1',{opacity:1})
        timeline.to('.circle1',{opacity:0.2})
        timeline.to('.circle2',{opacity:1})
        timeline.to('.circle2',{opacity:0.2})
        timeline.to('.circle3',{opacity:1})
        timeline.to('.circle3',{opacity:0.2})

    })
    return(
        <>
        <div className="flex flex-row gap-2 m-28">
            <div className="w-8 h-8 rounded-full bg-blue-400 opacity-20 circle1"></div>
            <div className="w-8 h-8 rounded-full bg-blue-400 opacity-20 circle2"></div>
            <div className="w-8 h-8 rounded-full bg-blue-400 opacity-20 circle3"></div>
        </div>

        </>
    )
}

export default Exercise6