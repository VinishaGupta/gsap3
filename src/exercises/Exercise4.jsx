import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Exercise4(){

    const timeline=gsap.timeline({
        repeat:-1
    });

    useGSAP(()=>{
        timeline.to('.red-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:1,
            // yoyo:true,
            // repeat:-1
            
        })



         timeline.to('.red-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:0.2,
            // yoyo:true,
            // repeat:-1
            
        })

        timeline.to('.yellow-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:1,
            //  yoyo:true,
            // repeat:-1
            
        })


        timeline.to('.yellow-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:0.2,
            //  yoyo:true,
            // repeat:-1
            
        })

        timeline.to('.green-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:1,
            //  yoyo:true,
            // repeat:-1
            
        })

         timeline.to('.green-circle',{
            duration:2,
            ease:'power4.inOut',
            opacity:0.2,
            //  yoyo:true,
            // repeat:-1
            
        })
    })
    return(
        <>
        <div className='w-24 h-24 bg-red-500 rounded-full opacity-20 red-circle'></div>
        <div className='w-24 h-24 bg-yellow-500 rounded-full  opacity-20  yellow-circle'></div>
        <div className='w-24 h-24 bg-green-500 rounded-full  opacity-20  green-circle'></div>

        </>
    )
}

export default Exercise4