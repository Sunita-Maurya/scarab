
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
    const [tableTranslateX, setTableTranslateX] = useState(0); // Separate translateX for the table
    const [tableTranslateY, setTableTranslateY] = useState(0); // Separate translateY for the table
    const [guardTranslateX, setGuardTranslateX] = useState(0); // Separate translateX for the guard images
    const [guardTranslateY, setGuardTranslateY] = useState(0); // Separate translateY for the guard images
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const _w = window.innerWidth / 2;
        const _h = window.innerHeight / 2;
        const _mouseX = e.clientX;
        const _mouseY = e.clientY;
  
        const factor1 = 0.02; // Slower movement for the background
        const factor2 = 0.01; // Slower movement for the hero
        const factorX = 0.02; // Slower movement for the horizontal translation
        const factorY = 0.01;
  
        const translateX = (_mouseX - _w) * factorX;
        const translateY = (_mouseY - _h) * factorY;
  
        const backgroundX = 50 - (_mouseX - _w) * factor1;
        const backgroundY = 50 - (_mouseY - _h) * factor1;
        const heroX = 50 - (_mouseX - _w) * factor2;
        const heroY = 50 - (_mouseY - _h) * factor2;
  
        const backgroundSize = `${100 + translateY}px ${100 + translateY}px`;
        const backgroundPos = `${backgroundX}% ${backgroundY}%`;
        const heroPos = `${heroX}% ${heroY}%`;
  
        // Calculate separate translations for the table and guard images
        const tableTranslateX = (_mouseX - _w) * factorX * 0.5; // Adjust the factor as needed
        const tableTranslateY = (_mouseY - _h) * factorY * 0.5; // Adjust the factor as needed
        const guardTranslateX = (_mouseX - _w) * factorX * 1.6; // Adjust the factor as needed
        const guardTranslateY = (_mouseY - _h) * factorY * 1.6; // Adjust the factor as needed
  
        setBackgroundPosition(backgroundPos);
        setHeroPosition(heroPos);
        setTableTranslateX(tableTranslateX);
        setTableTranslateY(tableTranslateY);
        setGuardTranslateX(guardTranslateX);
        setGuardTranslateY(guardTranslateY);
        setBackgroundSize(backgroundSize);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className='w-full' style={{maxWidth:'1900px',marginInline:'auto'}}>
    
      <div
        id="parallax"
        className='lg:block hidden'
        style={{
          backgroundImage: ' url(/images/landing-page/become-bg-three.png)',
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
    <div className=''>
        <img
          src="/images/landing-page/left-table.png"
          alt=""
          className='tablel '
          style={{
            position: 'absolute',
            left: '-5%', // Align with the left edge
            bottom: '-0%', // Center vertically
            transform: `translate(${tableTranslateX}px, ${tableTranslateY}px)`, // Apply horizontal and vertical translation
            
          }}
        />

        <img
          src="/images/landing-page/right-table.png"
          alt=""
          className='tabler'
          style={{
            position: 'absolute',
            right: '-5%', // Align with the right edge
            bottom: '0%', // Center vertically
            transform: `translate(${tableTranslateX}px, ${tableTranslateY}px)`, // Apply horizontal and vertical translation
          }}
        />
        </div>
        <div className=''>
        <img
          src="/images/landing-page/Guard 2.png"
          alt=""
          className='imgl'
          style={{
            position: 'absolute',
            left: '-5%', // Align with the left edge
            bottom: '-0%', // Center vertically
            transform: `translate(${guardTranslateX}px, ${guardTranslateY}px)`, // Apply horizontal and vertical translation
          }}
        />

        <img
          src="/images/landing-page/Guard 3.png"
          alt=""
          className='imgr'
          style={{
            position: 'absolute',
            right: '-5%', // Align with the right edge
            bottom: '0%', // Center vertically
            transform: `translate(${guardTranslateX}px, ${guardTranslateY}px)`, // Apply horizontal and vertical translation
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
