"use client"
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { deleteData, insertData, selectData } from "./serverFunction";
import Swal from "sweetalert2";
import Image from "next/image";
 import { useRouter } from "next/navigation";
const Home=()=>{
 const { isSignedIn, user } = useUser()
 const [city, setCity]=useState("");
 const [count, setCount]=useState(0)
 const [records, setRecords]=useState<{city:string, temp:number, iconURL:string, sno:number}[]>([]);
 const router=useRouter();
let email="";
if(isSignedIn){
       email=user.emailAddresses[0].emailAddress;
}

    useEffect(() => {
      if (isSignedIn) {
        const fetchData = async () => {
          const data = await selectData(email);
          const arr=[];
          for (const obj of data) {
            try {
                  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${obj.city}&appid=6e119fd92bea6e9127b995cd63d3563a&units=metric`
                  const data=await fetch(URL);
                  const response=await data.json();
                  const temp=response.main.temp;
                  const icon=response.weather[0].icon;
                  const iconURL=`https://openweathermap.org/img/wn/${icon}@2x.png`;
                  const dataObj={city:obj.city, temp, iconURL, sno:obj.sno}
                  arr.push(dataObj)
            } catch (error) {
                  console.log(error)
            }
        
         
          }
          setRecords(arr)
        };
        fetchData();
      }
    }, [email, count, isSignedIn]); 
 

// inserting city and email in database
    const handleClick= async()=>{
     const mess=await insertData(email, city);
     if(mess){
      Swal.fire(mess)
     }
     else{
        console.log("City was fetched")
        Swal.fire("City is added!")
     }
    setCount(count+1)
    setCity("")
    }

  const handleDelete=(sno:number)=>{
    Swal.fire({
      title:"Are you sure?",
      icon:"warning",
      showCancelButton:true,
      confirmButtonText:"Yes, delete it!"
    }).then((result)=>{
         if(result.isConfirmed){
              deleteData(sno)
              setCount(count+1) // to run useeffect so that we can get refreshed data from db
          Swal.fire("Deleted", "Item Deleted", "success")
         }
    })

  }

   return(<>
           {
             isSignedIn ?
             <>
                <h2>Home</h2>
                <p>You are seeing because you are loged in!</p>
                <input type="text" value={city} className="enterCity"  onChange={(e)=>{setCity(e.target.value)}} placeholder="Enter city" autoFocus/> &nbsp;
                <input type="button"  className="add" value="Add city" onClick={handleClick} /> <br />
                {
                  records.map((row, i)=>{ return(
                    <div key={i} className="box">
                         <h3>{row.city.toUpperCase()}</h3>
                         <p>
                          {row.temp}°C <br />
                          <Image src={row.iconURL} alt={row.city}  width={50} height={50}/> <br />
                          <input type="button" value="X"  onClick={()=>{handleDelete(row.sno)}}/> <br />
                          <input type="button" value="more..."  onClick={()=>{router.push(`/details/${row.sno}`)}}/>
                         </p>
                    </div>
                  )
                     
                  })
                }
             </>

             :
             <>
               <h2>Access denied</h2>
               <p>Plesae login for more information...</p>
             </>
           }
   </>)
}
export default Home;
