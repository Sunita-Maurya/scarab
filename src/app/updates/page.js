import React from 'react'
import Features from "../../components/Features"
import Navebar from '@/components/Navebar'
const page = () => {
  return (
    <div>
    <Navebar/>
    <Features/>
    <div className='font-[HORUS] text-2xl  flex gap-8 items-center absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FEF2E0]'>
   <div className='scane'>
    <button className='left-btn  w-[240px] h-[90px] '>Scarab</button>
    </div>
    <button className='middle-btn w-[300px] h-[100px]   '>Updates</button>
   <div className='scane'>
    <button className='right-btn   w-[240px] h-[90px] '>Myera</button>
    </div>
  </div>
    </div>
  )
}

export default page
