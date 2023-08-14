import React from 'react'

const ConnectWallet = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      {/* <div className='flex justify-center items-center flex-col'>
        <p className='text-[#E7DBC9] text-[20px] text-center'>Connect your Wallet <br/>
        for your info</p>
        <button className='mt-5 px-8 py-3 text-[20px] border border-[#E7DBC9] rounded-2xl'>Connect wallet</button>
      </div> */}
      <div className='border border-[#ffffff80] rounded-xl p-10' style={{backgroundColor:"background: rgba(7, 7, 4, 0.50)"}}>
      <p className='text-[#E7DBC9] text-[25px] text-center mb-10'>Connect wallet</p>    
      <div className='flex justify-center gap-10 items-center'>
        <img src="/images/difi.png" alt="defi" className='border border-[#ffffff80] p-2 rounded-md'/>
        <img src="/images/meta.png" alt="meta" className='border border-[#ffffff80] p-1 rounded-md' />
        <img src="/images/c.png" alt="c" className='border border-[#ffffff80] p-2 rounded-md' />
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet
