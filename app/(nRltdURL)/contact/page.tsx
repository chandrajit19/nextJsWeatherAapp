"use client"

import { sendEmail } from "@/app/serverFunction"

const Contact=()=>{

   
  const saveData=async (fd:FormData)=>{
     const name=fd.get("name")  as string; 
     const email=fd.get("email")  as string;
         sendEmail(email, name)
  }

   return(<div className="contact-page">
            <div>
                <h2>Contact</h2>
                <p>We&apos;d love to hear from you! Please feel free to get in touch with any questions or comments</p>
                <p>Got a question, a project idea, or just want to say hello? Let&apos;s start the conversation</p>
            </div>
            <div className="contact-form-container">
                <form action={saveData} className="contact-form">
                    <div>
                        <label >Name: <br />
                            <input type="text" name="name" required autoFocus/>
                        </label>
                    </div>
                    <div>
                        <label >Email: <br />
                            <input type="email" name="email" required />
                        </label>
                    </div>
                    <div>
                        <label >Message: <br />
                            <textarea  name="message" rows={6} cols={30} required></textarea>
                        </label>
                    </div>
                   <input type="submit" value="Send" />
                </form>
            </div>

   </div>)
}
export default Contact;