 import { useQuery } from "@tanstack/react-query";
 export default function UseLogin(id:String,pw:String){
  return useQuery([id,pw],()=>
  fetch('https://fakestoreapi.com/auth/login',{
    method:'POST',
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
        username: id,
        password: pw
          })
})
    .then(res=>res.json()),
    // {refetchOnMount:false,refetchOnWindowFocus:false} 
  )
 }