'use client'
import { log } from 'console'
import { useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'

const page = () => {
  const {data} = useSession()
  console.log(data)
  return (

    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4'>
      {data && <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center'>
        
        {data.user.image && <div className='relative w-[200px] h-[200px] rounded-full border-2 border-white overflow-hidden'>
          <Image src={data.user.image} fill alt='userImage' />
        </div>}
        </div>}
      {!data && <div className='text-white text-2xl'>Loading...</div>}
    </div>
  )
}

export default page