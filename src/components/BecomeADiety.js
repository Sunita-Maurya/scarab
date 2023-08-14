import React from 'react'
const imageData=[
{
  id:1,
  img:"/imges/one.png"
}
]
const BecomeADiety = () => {
  return (
    <div className='max-w-[900px] mx-auto'>
      <div className='flex justify-between gap-10 items-center w-full stake-border p-7'>
        <div className='w-[250px]'>
          <p>Token staked</p>
          <input type="range" className='w-full'/>
          <div className='flex justify-between'>
            <h2>39</h2>
            <h2>50</h2>
          </div>
        </div>
        <div>
          <p className='text-center'>Become a</p>
          <div className='flex items-center'>
            <img src="/images/Vector.png" alt="vector" className='w-10 opacity-[0.5]'/>
            <h2 className='font-[HORUS] text-[50px]'>Deity</h2>
          </div>
       
        </div>
        <div className='flex items-center gap-3'>
            <p className='text-center'>Stake more to <br/>
        become a Deity</p>
          <button className='mt-5 px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl'>Stake </button>
          </div>
      </div>
      <div className='flex items-center mt-10 gap-2 skew-y-3 -skew-y-3'>
        {/* <div className='border p-2'>
      <img src="/images/five.png" alt="five" className='w-[200px] h-[170px]' />
      </div>
      <div className='image-border p-1 h-[250px]' >
      <img src="/images/four.png" alt="one" className='w-[200px] h-[200px]'/>
      </div> */}
      
      <div className='image-border p-2'>
        <img src="/images/one.png" alt="one" className='w-[200px] h-[200px]' />
        </div>
        <div className='image-border p-2'>
        <img src="/images/one.png" alt="one" className='w-[200px] h-[200px]' />
        </div> <div className='image-border p-2'>
        <img src="/images/one.png" alt="one" className='w-[200px] h-[200px]' />
        </div> <div className='image-border p-2'>
        <img src="/images/one.png" alt="one" className='w-[200px] h-[200px]' />
        </div>
        {/* <img src="/images/two.png" alt="two" className='w-[200px] h-[200px]'/>
        <img src="/images/three.png" alt="three" className='w-[200px] h-[170px]'/> */}

      </div>
    </div>
  )
}

export default BecomeADiety
