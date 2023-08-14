import React from 'react'

const LardFaraoh = () => {
  return (
    <div className='mt-10'>
      <h2 className='font-[HORUS] text-center '>Hail, Lord pharaoh</h2>
      <div className='flex gap-10 justify-center items-center '>
        <div className='flex items-center gap-2'>
            <img src="/images/front-coin.png" alt="front-coin" />
            <img src="/images/scarav.png" alt="scarav"  className='w-[100px]' />
        </div>
        <div>
        <p>Scarab Left</p>
        <h2>425.0156863</h2>
        </div> <div>
        <p>Scarab Locked</p>
        <h2>425.0156863</h2>
        </div>
        <button className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl'>Buy more</button>

        <div>
       
        </div>
      
      </div>
      <div className='flex gap-10 justify-center items-center '>
        <div className='flex items-center gap-2'>
        <img src="/images/split-coin.png" alt="split-coin" className='' />

        <img src="/images/baracs.png" alt="scarav" className='w-[100px]' />
        </div>
        <div>
        <p>Barack Left</p>
        <h2>425.0156863</h2>
        </div> <div>
        <p>Barack Value</p>
        <h2>425.0156863</h2>
        </div>
        <button className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl'>Stake more</button>

        <div>
       
        </div>
      
      </div>
     
    </div>
  )
}

export default LardFaraoh
