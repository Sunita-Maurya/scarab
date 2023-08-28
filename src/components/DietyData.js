import React from 'react'

const DietyData = () => {
  return (
    <div className='max-w-[900px] mx-auto'>
      <div className='flex justify-between w-full gap-5   mt-10 '>
        <div className='w-[60%]' >
        <div className='flex items-center gap-3 justify-between image-border p-3 rounded-xl'>
        <div className='flex items-center'>
            <img src="/images/Vector.png" alt="vector" className='w-10'/>
            <h2 className='font-[HORUS] text-[50px]'>Deity</h2>
          </div>
       
          <button className=' px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl'>Act as Diety </button>
          </div>
          <div className='flex gap-8 mt-8 '>
          <div className='flex items-center gap-3 justify-between image-border p-3 rounded-xl'>
            <h2>Lorem Siaepsum</h2>      
          </div>
           <div className='flex flex-col items-center gap-3 justify-between image-border p-3 rounded-xl'>
            <p>Wallet address</p>
            <h2>0x2425463632...63267</h2>
          </div>
          </div>
          <div className='mt-20 flex  items-center gap-3 justify-between border p-4 rounded-xl image-border'>
            <div>
            <p> Total Proposal</p>
            <h2>36</h2>
            </div>
            <div>
            <p>Agreed/ Disagreed</p>
            <h2>10 / 26</h2>
          </div>
          <div>
            <p>Total Voted</p>
            <h2>126</h2>
          </div>
          </div>
        </div>
        <div className='image-border w-[40%] p-3'>
            <img src="/images/one.png" alt="one" />
            <div className='flex justify-between mt-2'>
                <p>Diety-1</p>
                <p>#1</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default DietyData
