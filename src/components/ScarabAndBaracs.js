import React from 'react'
import Navebar from './Navebar'

const ScarabAndBaracs = () => {
  return (
    <div className='scarabandbraracs-bg pt-20'>
      <Navebar/>
      <div className='max-w-[1300px] mx-auto flex justify-between mt-56 items-center gap-20'>
        <div className=''>
          <img src="/images/scarav.png" alt="scarav" className='mix-blend-difference'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
        <button  className='my-5'>More +</button>
        </div>
        <div className=''>
        <img src="/images/baracs.png" alt="baracs" className='mix-blend-difference'/>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
        <button  className='my-5'>More +</button>
        </div>
        <div className=''>
          <h3>Buy
            <br/>
            Scarab
            </h3>
        <button  className='my-5'>More +</button>
        </div>
      </div>
    </div>
  )
}

export default ScarabAndBaracs
