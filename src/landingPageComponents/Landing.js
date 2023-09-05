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


import React, { useState, useEffect } from 'react';
import './Landing.css';

const Landing = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.querySelector('.parallax-container');
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      const offsetX = (mouseX - centerX) / 20; // Adjust the sensitivity here
      const offsetY = (mouseY - centerY) / 20;

      setParallaxOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
console.log(parallaxOffset.x)
  return (
    <div className={`parallax-container`} style={{ perspective: '1000px' }}>
      <img src='/images/Logo.png' alt='' className='absolute top-0 left-1/2 -translate-x-1/2 z-20' style={{ mixBlendMode: 'exclusion', top: '10%' }} />

      {/* Smoothly move landing-bg */}
      <div className={`bg z-10`} style={{ transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y*0}px, 0)` }}>
        <img src='/images/landing-page/landing-bg.png' alt='' className={`h-full w-full z-10`} />
      </div>

      {/* Smoothly move landing-hero */}
      <div className={`hero z-30`} style={{ transform: `translate3d(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y*0}px, 0)` }}>
        <img src='/images/landing-page/landing-hero.png' alt='' className={`w-full h-full`} />
      </div>

      {/* Smoothly move Overlay */}
      <div className={`absolute bottom-0 z-50 overlay`} style={{ transform: `translate3d(${parallaxOffset.x * 10}px, ${parallaxOffset.y*0}px, 0)` }}>
        {/* Add your overlay content here */}
      </div>
    </div>
  );
};

export default Landing;
