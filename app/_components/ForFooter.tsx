"use client"

import { useUser } from "@clerk/nextjs"

const ForFooter=()=>{
  const { isSignedIn, user } = useUser()

   return(<div>
            {
               isSignedIn && <p className="foot-para"> <strong> Your Email: {user.emailAddresses[0].emailAddress} </strong></p>
            }
   </div>)
}
export default ForFooter