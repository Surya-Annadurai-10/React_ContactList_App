import React, { useEffect } from 'react'
import { useRef,useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import ContactTable from '../ContactsTable/ContactTable';
import { addContact, setEditContactDetails } from '../slices/contactSlice';
import {v4 as uuidv4} from "uuid";

const SideBar = () => {
    const dispatch = useDispatch() ;
    const editContactId = useSelector(state => state.contacts.editContactId);
    const favCount = useSelector(state => state.contacts.favCount);
    const stateData = useSelector(state => state.contacts.contactList);
//   console.log("stateData :",stateData);
  

    const [markFav , setMarkFav] = useState(false);
    const  [isEditMode , setIsEditMode] = useState(false);
    const [count , setCount] = useState(0);
    const nameRef = useRef(null);
    const surNameRef = useRef(null);
    const mobileNoRef = useRef(null);

    

    useEffect(() =>{
        if(editContactId){
          const editUser = stateData.find ((contact) =>{
            return contact.id == editContactId;
          })

          nameRef.current.value = editUser.name;
          surNameRef.current.value = editUser.surName;
          mobileNoRef.current.value = editUser.mobileNo;
        }
    },[editContactId])

const onFormSubmit = (e) =>{
    e.preventDefault();

    const contactDetails = {
        name : nameRef.current.value,
        surName :surNameRef.current.value,
        mobileNo :  mobileNoRef.current.value,
        id : editContactId ? editContactId : uuidv4(),
        isFav : false
    }
    // console.log(contactDetails)

  if(editContactId){
      dispatch(setEditContactDetails(contactDetails))
  }else{
    dispatch(addContact(contactDetails));
  }
   nameRef.current.value =  "";
  surNameRef.current.value = "";
    mobileNoRef.current.value = "";

}
  return (
    <div className={"flex items-center justify-center"}>
        <div className={"w-[30%] h-[81vh] bg-[#4f377f] text-white flex justify-center items-center flex-col gap-[1rem]"}>
            <div className={"flex items-center justify-center gap-3"}>
               <div> <RiContactsBook3Fill className={"text-2xl text-white"} /></div>
                <div>
                    <p className={"font-bold"}>All Contacts</p>
                    <p >{stateData.length} Contacts</p>
                </div>
            </div>
            <div  className={"flex items-center justify-center gap-3"}>
                <FaHeart className={"text-2xl text-white"} /> 
                <div>
                    <p className={"font-bold"}>Favourites</p>
                    <p>{favCount} Contacts</p>
                </div>
            </div>
            <div className={"py-[1rem]"}>
                <img className={"w-[200px] m-auto"} src="https://webstockreview.net/images/male-clipart-office-man-10.png" alt="" />
            </div>
            <form onSubmit={onFormSubmit} className={"w-[100%] pt-[1rem] h-[25vh] flex flex-col items-center justify-center"}>
                <div className={"flex  gap-1 w-[90%] h-13 m-auto "}>
                    <input ref={nameRef} placeholder={"Name"} className={"placeholder-[grey] text-black p-[1rem] bg-white w-[50%] h-[100%] rounded-[5px]"} type="text" />
                    <input  ref={surNameRef} placeholder={"Surname"} className={"placeholder-[grey] text-black p-[1rem] bg-white w-[50%] h-[100%] rounded-[5px]"} type="text" />
                </div>
                <div className={" w-[90%] m-auto pt-3 h-15 "}>
                    <input  ref={mobileNoRef} placeholder={"Enter mobile number"} className={"placeholder-[grey] p-[1rem] bg-white w-[100%] text-black h-[100%] rounded-[5px] m-auto"} type="number" />
                </div>
               <div className={"w-[90%] m-auto grid place-items-center p-[1rem]"}>
               <button className={"w-30 h-10 rounded font-bold text-black  bg-[#b7b7b7]"}>{editContactId ? "Edit" : "Add"}</button>
               </div>
            </form>
        </div>
         <div className={"w-[70%] h-[81vh] bg-[#f9f8f8] border border-[#e2e2e2]"}>
        <ContactTable />
        </div>
    </div>
  )
}

export default SideBar;