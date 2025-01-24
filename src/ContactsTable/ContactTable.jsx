import React from 'react'
import ContactCard from '../ContactCard/ContactCard'
import { useSelector } from 'react-redux'



const ContactTable = () => {

  const stateData = useSelector((state) => state.contacts.contactList)
  // console.log(stateData);
  
  return (
    <div className={"w-[100%] h-[100%]"}>
        
         <table className={"w-[100%] text-[#6d6d6d] border-b border-[#b0aeae]"}>
            <thead>
               <tr>
                <th className={"p-[1rem]  border border-[#b0aeae]"}>Profile</th>
                  <th className={"p-[1rem]  border border-[#b0aeae]"}>Name</th>
                  <th className={"p-[1rem]  border border-[#b0aeae]"}>Surname</th>
                  <th className={"p-[1rem]  border border-[#b0aeae]"}>Mobile</th>
                  <th className={"p-[1rem]  border border-[#b0aeae]"}>Action</th>
               </tr>
            </thead>
           {
            stateData.length == 0 ?  null : 
            <tbody>
              {
                stateData.map((ele) => {
                  return <ContactCard key={ele.id} {...ele} />
                })
              }
           </tbody>
           }
         </table>

         {
          stateData.length == 0 ? <p className={"font-bold w-[100%] h-[91.5%] grid place-items-center "}>No Contacts saved !!</p> : null
         }
    </div>
  )
}

export default ContactTable