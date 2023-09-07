// import React, { useState } from 'react';
// import './Landing.css';

// const Landing = () => {
//   const [isLeft, setIsLeft] = useState(false);

//   return (
//     <div className={`parallax-container `} onClick={() => setIsLeft(!isLeft)}>
//       <img src='/images/Logo.png' alt='' className='absolute    top-0 left-1/2 -translate-x-1/2  z-30' style={{mixBlendMode: 'exclusion',top:'10%'}} />
//       {/* Smoothly move landing-bg */}
//       <div className={`bg ${isLeft?'bg-move':''}`}>
//       <img
//         src='/images/landing-page/landing-bg.png'
//         alt=''
//         className={`h-full w-full z-10`}
//       />
//       </div>
     
//       {/* Smoothly move landing-hero */}
//       <div className={`hero    z-30     ${isLeft ? 'hero-move' : ''}`}>
//       <img
//         src='/images/landing-page/landing-hero.png'
//         alt=''
//         className={`w-full h-full `}
//       />
//         </div>
//       {/* Smoothly move Overlay */}
//       <div className={`absolute bottom-0 z-50 overlay ${isLeft?'overlay-move':''}`}>
//       </div>
//     </div>

//   );
// };

// export default Landing;









// import React, { useState, useEffect } from 'react';
// import './Landing.css';

// const Landing = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
//     <div className={`parallax-container`} style={{ perspective: '1000px' }}>
//       <img src='/images/landing-page/Union.png' alt='' className='absolute top-0 left-1/2 -translate-x-1/2 z-20' style={{ mixBlendMode: 'exclusion', top: '10%' }} />

//       {/* Smoothly move landing-bg */}
//       <div className={`bg z-10`} style={{ transform: `translate3d(${-parallaxOffset.x*0.3}px, ${-parallaxOffset.y*0}px, 0)` }}>
//         <img src='/images/landing-page/landing-bg.png' alt='' className={`h-full w-full z-10`} />
//       </div>

//       {/* Smoothly move landing-hero */}
//       <div className={`hero z-30`} style={{ transform: `translate3d(${-parallaxOffset.x * 0.6}px, ${-parallaxOffset.y*0}px, 0)` }}>
//         <img src='/images/landing-page/landing-hero.png' alt='' className={`w-full h-full`} />
//       </div>

//       {/* Smoothly move Overlay */}
//       <div className={`absolute bottom-0 z-50 overlay`} style={{ transform: `translate3d(${-parallaxOffset.x * 12}px, ${-parallaxOffset.y*0.2}px, 0)` }}>
//         {/* Add your overlay content here */}
        
//       </div>
//       <div className='absolute  w-[100%] ' style={{bottom:'10% !important' ,zIndex:'999'}}>
//        <div className='flex lg:flex-row flex-col justify-between items-center w-[80%] mx-auto'>
//          <div className='flex lg:flex-col flex-row gap-5'>
//        <h1 className='h1-heading '>Egyptian  </h1>
//        <h1 className='h1-heading '>Era again</h1>
//        </div>
//        <p className='lg:w-[60%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
//        <button className='btn-border px-8 py-2 w-full '>Enter</button>
//      </div>
//      </div>
//     </div>
//   );
// };

// export default Landing;













  import React, { useEffect, useState } from 'react';
  import './Landing.css'
  const Landing = ({setIsClick}) => {
    const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');
    const [heroPosition, setHeroPosition] = useState('50% 50%');
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const _w = window.innerWidth / 2;
        const _h = window.innerHeight / 2;
        const _mouseX = e.clientX;
        const _mouseY = e.clientY;
  
        // Adjust the factors to control the speed of movement
        const factor1 = 0.02; // Slower movement for the background
        const factor2 = 0.01; // Slower movement for the hero
  
        // Calculate background positions based on mouse movement
        const backgroundX = 50 - (_mouseX - _w) * factor1;
        const backgroundY = 50 - (_mouseY - _h) * factor1;
        const heroX = 50 - (_mouseX - _w) * factor2;
        const heroY = 50 - (_mouseY - _h) * factor2;
  
        // Create the background and hero position strings
        const backgroundPos = `${backgroundX}% ${backgroundY}%`;
        const heroPos = `${heroX}% ${heroY}%`;
  
        // Set the background and hero positions in state
        setBackgroundPosition(backgroundPos);
        setHeroPosition(heroPos);
      };
  
      // Add the mousemove event listener
      document.addEventListener('mousemove', handleMouseMove);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className='bg-[#0a0a0a] w-full'>
    
      <div
        id="parallax"
        className='lg:block hidden'
        style={{
          backgroundImage: ' url(/images/landing-page/landing-bg1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: backgroundPosition,
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
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
<img src="/images/landing-page/Union.png" alt="" />

    </div>
    <div
          className=""
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/images/landing-page/landing-hero.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: backgroundPosition,
            position: 'absolute',
            bottom:'-10%',
            scale:'0.8'
          }}
        ></div>
        {/* Apply mix blend mode only to the first URL */}
        <div className='contant '>
          <div className='flex gap-10 items-center'>
          <div className='  w-[300x] '>
          <h1 className='h1-heading '>Egyptian  </h1>
          <h1 className='h1-heading flex gap-5'>Era <span>again</span> </h1>
          </div>
          <p className=' '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <button onClick={()=>setIsClick(true)} className='btn-border px-8 py-2 '>Enter</button>
        </div>
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
          }}
        ></div>
        
      </div>
      {/* ---------- mobile view */}
      <div className='mob-backgournd lg:hidden flex flex-col relative px-10'>
      <img src="/images/landing-page/mob-logo.png" alt="logo" className=' mt-20  w-[300px] mx-auto'/>
      <img src="/images/landing-page/mob-hero.png" alt="hero"  className='w-full h-full '/>
      <div className='mob-content   w-full'>
        <div className='px-10 flex flex-col justify-center gap-5 lg:w-[500px]  w-[350px] mx-auto'>
            <div className='   text-center '>
          <h1 className='h1-heading'>Egyptian Era again</h1>
          </div>
          <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <button onClick={()=>setIsClick(true)}  className='btn-border px-8 py-2 '>Enter</button>
        </div>
        </div>
      </div>
      </div>
    );
  };

  export default Landing;




