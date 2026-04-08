'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
const page = () => {
    const {data} = useSession()
    const [name, setName] = useState("")
    useEffect(()=>{
        if(data){
          setName(data?.user.name as string)
        }
    },[data])
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black text-white px-4'>
        <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg'>
        <h1 className='text-2xl font-semibold text-center mb-2'>Edit Profile</h1>
        <form className='space-y-2 flex flex-col w-full items-center'>
            <div className='w-[100px] h-[100px] rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:border-blue-500 cursor-pointer overflow-hidden relative'>
              {data?.user.image ? <Image src={data.user.image} fill alt='image'/>:<CgProfile size={22} color='white'/>
}
            </div>
             <div className='w-full'>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border-b border-white py-2 px-1 bg-black text-white outline-none placeholder-gray-400"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </form>
        </div>
    </div>
  )
}

export default page