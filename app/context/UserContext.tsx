'use client'
import axios from 'axios'
import { error } from 'console'
import React, { ReactNode, useEffect, useState } from 'react'
type userContextType={
user:userType | null | undefined,
setUser:(user:userType)=>void
}
type userType={
    name:string,
    email:string,
    id:string,
    image?:string
}
export const userDataContext = React.createContext<userContextType | undefined>(undefined)
const UserContext = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<userType | null>()
    const data = {
        user, setUser
    }
    useEffect(() => {
   async function getUser() {
    try {
        const result = await axios.get("/api/user")
        setUser(result.data)
        
    } catch (error) {
        console.log(error)
    }
   }
   getUser()
    }, [])
    
  return (
   <userDataContext.Provider value={data}>
    {children}
   </userDataContext.Provider>
  )
}

export default UserContext