import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import ForHead from "./ForHead"


const NavBar=()=>{

   return(<>
           <div className="navBar">
            <div className="first">
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT</Link> 
                <Link href="/contact">CONTACT</Link> 
            </div>
           
             <div className="second">
               <ForHead />
               <div className="second">
                      <SignedOut>
                        <SignInButton mode="modal">
                            <Link href="#">SIGNIN</Link> 
                        </SignInButton>
                      <SignUpButton mode="modal">
                          <Link href="#">REGISTER</Link>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>  
               </div>
          
             </div>

           </div>
      
   </>)
}
export default NavBar