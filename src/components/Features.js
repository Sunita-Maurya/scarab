import React from 'react'
import Navebar from './Navebar'

const Features = () => {
  return (
    <div className='features-bg py-24'>
      <Navebar/>
      <div className='w-[1200px] mx-auto mt-24'>
      <div className='w-[650px] '>
      <div className=' flex justify-between mt-20  w-full'>
      <div className=' '>
        <h3>We Bringing</h3>
        <h3>The same Egyptian </h3>
        <h3>Era back</h3>
        
      </div>
      <div className='w-[280px] '>
       
<p className='opacity-[0.6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
<button  className='my-5'>More +</button>

</div>
</div>
<div className='flex justify-between mt-10 '>
      <div className='w-[280px] '>
        <h3>Egypt</h3>
        <p className='opacity-[0.6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

  <button  className='my-5'>More +</button>
  </div>
    <div className='w-[280px] '>
        <h3>
        SCARAB</h3>
<p className='opacity-[0.6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
<button  className='my-5'>More +</button>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Features
