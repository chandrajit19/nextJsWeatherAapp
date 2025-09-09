"use client"
import { useUser } from "@clerk/nextjs";
const ForHead=()=>{
  const { isSignedIn, user } = useUser()
   return(<>
        
   {
      isSignedIn ? <p className="welcome-message">Welcome! {user.firstName}</p> : null
   }
   </>)
}
export default ForHead;