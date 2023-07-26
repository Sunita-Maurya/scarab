import React from 'react'
import Navebar from './Navebar'

const Baracs = () => {
  return (
    <div className='baracs-bg pt-20'>
      <Navebar/>
      <div className='max-w-[1300px] mx-auto flex justify-between mt-56 items-center gap-20 mix-blend-difference'>
      <img src="/images/baracs.png" alt="baracs"/>
        <div>
        <div className=''>
        <h3>What is SCARAB</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <button  className='my-5'>More +</button>
        </div>
        <div className='flex justify-between mt-10'>
        <div>
            <h3>Egypt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
            <button  className='my-5'>More +</button>

        </div>

            <div>
            <h3>Egypt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
            <button  className='my-5'>More +</button>

        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Baracs
