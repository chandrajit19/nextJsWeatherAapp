"use client"

import { saveData } from "@/app/serverFunction"
import Script from "next/script";
const Contact=()=>{

   return(<div className="contact-page">
            <div className="contact-info">
                <h2>Contact</h2>
                <p>We&apos;d love to hear from you! Please feel free to get in touch with any questions or comments</p>
                <p>Got a question, a project idea, or just want to say hello? Let&apos;s start the conversation</p>
            </div>
            <div className="contact-form-container">
                <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
                <form action={saveData} className="contact-form">
                    <div>
                        <label >Name: <br />
                            <input type="text" className="form-input" name="name" required autoFocus/>
                        </label>
                    </div>
                    <div>
                        <label >Email: <br />
                            <input type="email" className="form-input" name="email" required />
                        </label>
                    </div>
                    <div>
                        <label >Message: <br />
                            <textarea  name="message" className="form-input" rows={6} cols={27} required></textarea>
                        </label>
                    </div>
               <div className="g-recaptcha" data-sitekey="6LfRdcQrAAAAAB2Wyyy0_5md7AjT1pxjeR4Th4YX"></div>
                   <input type="submit" className="form-input" value="Send" />
                </form>
            </div>

   </div>)
}
export default Contact;