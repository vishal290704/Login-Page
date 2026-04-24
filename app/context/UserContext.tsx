import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
type userContextType{

}

const userDataContext = React.createContext<userContextType | undefined>(undefined)
const UserContext = ({children}:{children:ReactNode}) => {
    useEffect(() => {
   async function getUser() {
    try {
        const result = await axios.get("/api/user")
    } catch (error) {
        
    }
   }
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default UserContext