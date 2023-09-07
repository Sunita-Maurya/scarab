
// import React, { useEffect, useState } from 'react';
// import './BecomeGod.css'
// import Navebar from '@/components/Navebar';
// const BecomeGod = () => {
//   // Initialize state for background position
//   const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const container = document.querySelector('.parallax-container');
//       const containerRect = container.getBoundingClientRect();
//       const mouseX = e.clientX - containerRect.left;
//       const mouseY = e.clientY - containerRect.top;
//       const centerX = containerRect.width / 2;
//       const centerY = containerRect.height / 2;

//       const offsetX = (mouseX - centerX) / 20; // Adjust the sensitivity here
//       const offsetY = (mouseY - centerY) / 20;

//       setParallaxOffset({ x: offsetX, y: offsetY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
// console.log(parallaxOffset.x)
//   return (
//     <>
//     <div className=' lg:block hidden '>
//     <div className={`parallax-container`} style={{ perspective: '1000px' }}>

//       <div className={`mainn-bg z-10 `} style={{ transform: `translate3d(${-parallaxOffset.x*0.3}px, ${-parallaxOffset.y*0}px, 0)` }}>
//       </div>

//       <div className={`left-right-hero z-30  `} style={{ transform: `translate3d(${-parallaxOffset.x * 1.5}px, ${-parallaxOffset.y*0}px, 0)` }}>
//       </div>

//       <div className={`absolute bottom-0 z-50 overlay`} style={{ transform: `translate3d(${-parallaxOffset.x * 12}px, ${-parallaxOffset.y*0.2}px, 0)` }}> 
//       </div>
//     <div className='absolute px-32 ' style={{zIndex:"1000"}}>
//         <div className='flex items-center justify-center gap-10'>
//             <div>
//                 <h5 className='horus'>Become</h5>
//                 <img src="/images/landing-page/GOD.png" alt="god" />
//             </div>
//             <div className='w-[400px]'>
                
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
//                 <button className='font-bold text-[20px]'>More +</button>
//             </div>
//         </div>
//         <div className='become-content flex  justify-start items-center gap-10 mt-32' >
//             <div className=''>
//                 <h5 className='horus'>Become<br/> PHAROK</h5>
//             </div>
//             <div className='w-[400px]'>
                
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
//                 <button className='font-bold text-[20px]'>More +</button>
//             </div>
//         </div>
//         <div className='flex  justify-center items-center gap-10 mt-20'>
//             <div>
//                 <h5 className='horus'>Buy<br/> Scarab</h5>
//             </div>
//             <div className='w-[400px]'>
                
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
//                 <button className='font-bold text-[20px]'>More +</button>
//             </div>
//         </div>
//     </div>
//     </div>
//     </div>
// {/* ---------------------------------mobile ---------- */}
//     <div className='lg:hidden block mob-back '>
//         <Navebar/>
//     <div className='flex flex-col items-center justify-center gap-5 -translate-y-10 '>
//             <div className='text-center'>
//                 <h5 className='horus'>Become</h5>
//                 <img src="/images/landing-page/GOD.png" alt="god" />
//             </div>
//             <div className='w-[400px] flex flex-col justify-center' style={{margiInline:"10px !important"}}>
                
//                 <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
//                 <button className='font-bold text-[20px]'>More +</button>
//             </div>
//         </div>
     
//         <div className='flex items-center   mt-[300px]'>
//         <div className=' flex flex-col   items-center gap-10 ' >
//             <div className=''>
//                 <h5 className='text-[20px] font-[HORUS] text-[#E7DBC9]'>Become</h5>
//                 <h5 className='horus'> PHAROK</h5>
//             </div>
//             <div className='' style={{marginLeft:"20px !important"}}>
                
//                 <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
//                 <button className='font-bold text-[20px]'>More +</button>
//             </div>
//         </div>
//         <img src="/images/landing-page/mob-side-hero.png" alt="" />
//         </div>
//     </div>
//     </>
//     );
//   };

//   export default BecomeGod;

  import React, { useEffect, useState } from 'react';
  import './BecomeGod.css'
  import Navebar from '@/components/Navebar';
  const BecomeGod = () => {
    const [backgroundSize, setBackgroundSize] = useState('100% 100%');

    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
    const [heroPosition, setHeroPosition] = useState('50% 50%');
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const _w = window.innerWidth / 2;
        const _h = window.innerHeight / 2;
        const _mouseX = e.clientX;
        const _mouseY = e.clientY;
  
        // Adjust the factors to control the speed of movement
        const factor1 = 0.02; // Slower movement for the background
        const factor2 = 0.01; // Slower movement for the hero
        const factorX = 0.02; // Slower movement for the horizontal translation
        const factorY = 0.01; //
        const translateX = (_mouseX - _w) * factorX;
      const translateY = (_mouseY - _h) * factorY;

        // Calculate background positions based on mouse movement
        const backgroundX = 50 - (_mouseX - _w) * factor1;
        const backgroundY = 50 - (_mouseY - _h) * factor1;
        const heroX = 50 - (_mouseX - _w) * factor2;
        const heroY = 50 - (_mouseY - _h) * factor2;
        const backgroundSize = `${100 + translateY}px ${100 + translateY}px`;

        // Create the background and hero position strings
        const backgroundPos = `${backgroundX}% ${backgroundY}%`;
        const heroPos = `${heroX}% ${heroY}%`;
     
        // Set the background and hero positions in state
        setBackgroundPosition(backgroundPos);
        setHeroPosition(heroPos);
        setTranslateX(translateX);
        setTranslateY(translateY);
        setBackgroundSize(backgroundSize);
      };
  
      // Add the mousemove event listener
      document.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  console.log(backgroundPosition,"ghjk")
    return (
      <div className='w-full'>
    
      <div
        id="parallax"
        className='lg:block hidden'
        style={{
          backgroundImage: ' url(/images/landing-page/become-heig-ers.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: backgroundPosition,
          backgroundSize: 'contain', // or 'contain' based on your preference
          height: '100vh',
          position: 'relative',
          backgroundColor: '#000',
          overflow:'hidden',
        }}
      >
        <Navebar/>
          <div
        className=' '
        style={{
        mixBlendMode: 'exclusion',
        position: 'absolute',
        backgroundPosition:'100% 100%',
        left:'50%',
        top:'10%',
        marginInline:'auto',
        transform:'translate(-50%,0%)'
      }}
    >

    </div>
    {/* <div
          className=""
          style={{
            width: '100%',
            height: '700px',
            backgroundImage: 'url(/images/landing-page/left-right-hero.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPosition,
            position: 'absolute',
            bottom:'-0%',
          }}
        ></div> */}
        <div className=''>
        <img
          src="/images/landing-page/Guard 2.png"
          alt=""
          className='imgl'
          style={{
            position: 'absolute',
            left: '-5%', // Align with the left edge
            bottom: '-35%', // Center vertically
            transform: `translate(${translateX}px, -50%)`, // Apply horizontal translation
          }}
        />

        <img
          src="/images/landing-page/Guard 3.png"
          alt=""
          className='imgr'
          style={{
            position: 'absolute',
            right: '-5%', // Align with the right edge
            bottom: '-35%', // Center vertically
            transform: `translate(${translateX}px, -50%)`, // Apply horizontal translation
          }}
        />
        </div>
           <div
          className="mix-blend-mode-div"
          style={{
            mixBlendMode: 'screen',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/landing-page/Overlay.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPosition,
            position: 'absolute',
            bottom:'0'        }}      >           
    <div className='absolute px-32  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 ' style={{zIndex:"1000"}}>
       <div className='flex items-center justify-center gap-10 2xl:mt-0 mt-20'>
           <div>
               <h5 className='horus'>Become</h5>
               <img src="/images/landing-page/GOD.png" alt="god" />
           </div>
           <div className='w-[400px]'>             
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
               <button className='font-bold text-[20px]'>More +</button>
           </div>
       </div>
       <div className='become-content flex  justify-start items-center gap-10 mt-32' >
           <div className=''>
               <h5 className='horus'>Become<br/> PHAROK</h5>
           </div>
           <div className='w-[400px]'>             
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
               <button className='font-bold text-[20px]'>More +</button>
           </div>
       </div>
       <div className='flex  justify-center items-center gap-10 mt-20'>
           <div>
               <h5 className='horus'>Buy<br/> Scarab</h5>
           </div>
           <div className='w-[400px]'>             
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
               <button className='font-bold text-[20px]'>More +</button>
           </div>
       </div>
   </div>
        </div>
        </div>
            {/* ------------mob-------- */}
          <div className='lg:hidden block mob-back '>
        <Navebar/>
    <div className=' mx-5 text-center items-center justify-center gap-5 -translate-y-10  '>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <h5 className='text-[25px] font-[HORUS] text-[#E7DBC9]'>Become</h5>
                <img src="/images/landing-page/GOD.png" alt="god" className='w-[150px] h-[60px]'/>
            </div>
            <div className=' mt-2 text-justify px-5' >             
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <button className='font-bold text-[20px]'>More +</button>
            </div>
        </div>  
        <div className='flex items-center justify-center  mt-[300px]  '>
        <div className='    items-center  mx-5' >
            <div className=' '>
                <h5 className='text-[20px] font-[HORUS] text-[#E7DBC9]'>Become</h5>
                <h5 className='horus'> PHAROK</h5>
            </div>
            <div className='' style={{marinLeft:"20px !important"}}>             
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <button className='font-bold text-[20px]'>More +</button>
            </div>
        </div>
        
        <img src="/images/landing-page/mob-side-hero.png" alt="" />
        </div>
          </div>
            </div>


    );
  };

  export default BecomeGod;
