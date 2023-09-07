'use client'
import BecomeGod from '@/landingPageComponents/BecomeGod/BecomeGod'
import Landing from '@/landingPageComponents/Landing/Landing'
import Test from '@/landingPageComponents/Test';
import { useState } from 'react'

export default function Home() {
  const [isClick, setIsClick] = useState(false);

  return (
    <main className='relative'>
      <div className={isClick ? 'fade-in' : ''}>
        {isClick ? (
          <BecomeGod />
        ) : (
          <Landing setIsClick={setIsClick} />
        )}
      </div>
    </main>
  );
}

