"use server"

import sql from "./db"



export const insertData=async (email:string, city:string)=>{
         // first checking city exist or not
         const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e119fd92bea6e9127b995cd63d3563a&units=metric`
          const data=await fetch(URL);
          if(data.ok){
           await sql `insert into records(email, city) values(${email}, ${city})`
          }
          else{
            return "Invalid city"
          }
}


export const selectData=async (email:string)=>{
 const data=  await sql `select * from records where email=${email}`
 return data;
}

export const deleteData=async (sno:number)=>{
    await sql `delete from records where sno=${sno}`
}





// Sending Email to users

import { Resend } from "resend"
   export const sendEmail=async(email:string, name:string)=>{
      const mess="Thanks for contacting us!"
                     const resend=new  Resend('re_31TyHg4h_JtKGY19Hw5TkTC2aGDaCWy7o')
                    await resend.emails.send({
                        from: 'support team <onboarding@ninjatech.space>',
                        to: email,
                        subject: 'Hello World',
                        html: `<strong>Hi ${name}, </strong>`+mess,
                     });
                     console.log("Email sent...", email, name)
   }
    
