'use client'
import { log } from 'console'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data} = useSession()
  console.log(data)
  return (

    <div>page</div>
  )
}

export default page