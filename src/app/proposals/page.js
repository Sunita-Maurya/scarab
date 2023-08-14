"use client "
import Navebar from '@/components/Navebar'
import Proposal from '@/components/Proposal'
import StakeScarab from '@/components/StakeScarab'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navebar/>
      {/* <Proposal/> */}
      <StakeScarab/>
    </div>
  )
}

export default page
