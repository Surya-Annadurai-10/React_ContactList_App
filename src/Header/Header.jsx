import React from 'react'

import { CgProfile } from "react-icons/cg";

const Header = () => {
  
  

  const searchContact = (e) =>{
    console.log(e.target.value);
    
  }
  return (
   <>
    <div className={"flex justify-between h-[10%] px-4"}>
         <div className={"w-[50%] flex items-center gap-1.5"}>
        <div className={"border border-[grey] rounded-4xl"}>
          <img className={"w-[30px]  rounded-4xl m-1"} src="https://tse4.mm.bing.net/th?id=OIP.ED1s_EBJoe_u_H3hPAAEVwHaHa&pid=Api&P=0&h=180" alt="" />
        </div>
         <h2 className={"text-xl  text-[grey]"}>Surya Annadurai</h2>
         </div>
         <form className={"flex items-center gap-1.5 justify-center w-[50%]"}>
           <input onChange={(e) => searchContact(e)} className={'w-[75%] h-[70%] rounded-xl px-3 placeholder-[#a4a4a4] border border-[grey] outline-0 text-[#000]'} type="text"  placeholder={"Search Contact..."} name="" id="" />
           <button  className={"bg-[#e0dfdf]  h-[70%] w-[20%]  rounded-xl font-bold "}>Search</button>
         </form>
    </div>
   </>
  )
}

export default Header