
"use client"

import TempChecklist from "@/app/_components/tempCheckList";
import { selectData } from "@/app/serverFunction";
import { useUser } from "@clerk/nextjs";
import { use, useEffect, useState } from "react";

const Details=({params}:{params:Promise<{sno:number}>})=>{
   const { isSignedIn, user } = useUser()     
   const {sno}=use( params);
   const [obj, setObj]=useState({} as {city:string, temp:number|null, iconURL:string, sno:number});
    let email="";
        if(isSignedIn){
        email=user.emailAddresses[0].emailAddress;
        }
      useEffect( ()=>{
        const fetchData=async ()=>{
        const data=await selectData(email)
        console.log(data)
          for (const obj of data) {
        if(obj.sno==sno){
                 console.log(obj.city)
                     try {
                  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${obj.city}&appid=6e119fd92bea6e9127b995cd63d3563a&units=metric`
                  const data=await fetch(URL);
                  const response=await data.json();
                  const temp=response.main.temp;
                  const icon=response.weather[0].icon;
                  const iconURL=`https://openweathermap.org/img/wn/${icon}@2x.png`;
                  const dataObj={city:obj.city, temp, iconURL, sno:obj.sno}
                  setObj(dataObj);
            } catch (error) {
                  console.log(error)
            }
        }
          }
        }
       
          fetchData() 
      },[ email, isSignedIn, sno])  


   return(
     <div>
       <h2>Details</h2>
       {obj && (
         <>
          <h3>City: {obj.city}</h3>
           <TempChecklist tempC={obj.temp} />
         </>
       )}
    </div>
  );
}
export default Details;