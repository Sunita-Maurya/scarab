import React from 'react'
import Card from './card/Card';
import Carroussel from './Carousel';
import { v4 as uuidv4 } from "uuid";
import Slidertest from './Slidertest';
let cards = [
  {
    key: uuidv4(),
    content: (
      <Card data="1" imagen="/images/heros/1.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card data="2" imagen="/images/heros/2.png" />

    )
  },
  {
    key: uuidv4(),
    content: (
      <Card data="3" imagen="/images/heros/3.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card data="4" imagen="/images/heros/4.png" />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Card data="5" imagen="/images/heros/5.png" />
    )
  }
];
const BecomeADiety = () => {
  return (
    <div className='max-w-[900px] mx-auto'>
      {/* <div className='flex justify-between gap-10 items-center w-full stake-border p-7'>
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
          <button className='mt-5 px-8 py-2 text-[20px] border border-[#E7DBC9] rounded-xl transition-all  hover:bg-[#4e4e4c80]'>Stake </button>
          </div>
      </div> */}
 <Slidertest/>

    {/* <div className="">
      <Carroussel
        cards={cards}
        // height="100px"
        width="100%"
        margin="200px auto"
        offset={100}
        showArrows={false}
      />
    </div> */}
    {/* <div className='font-[HORUS] text-2xl absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FEF2E0] '>
    <button className='era-btn  w-[240px] h-[100px] '>Dietys</button>
    <button className='scarab-btn w-[300px] h-[100px]  '>Dashboard</button>
    <button className='update-btn   w-[240px] h-[100px] '>NFTs</button>
  </div> */}
    </div>
  )
}

export default BecomeADiety
