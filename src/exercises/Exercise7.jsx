import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import img from './7.html.jpg'

function Exercise7(){

    useGSAP(()=>{
        gsap.from('.header',{
            x:-200,
            duration:1.2
        })

        gsap.from('.para',{
            x:200,
            duration:1.2
        })

        gsap.from('.button',{
            scale:1.2,
            duration:2
        })

        gsap.to('.image',{
            opacity:0,
            duration:2
        })
    })
    return(
        <>
        <h1 className='header'>Header</h1>
        <p className='para'>ejewhntur ejknkjrnfker kajnfs dsngkjsdiowe ejrje  jdsnfkjfs jdsgnjksd kdsjgnjd sjdkgn sdjn</p>
        <button className='button border-2 p-3' >button</button>
        <img src={img} className='w-[100px] h-[100px] image'></img>
        </>
    );
}

export default Exercise7