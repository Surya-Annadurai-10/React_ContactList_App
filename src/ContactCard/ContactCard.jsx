import React from 'react'
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact, markFavourtite, setEditContactId } from '../slices/contactSlice';

const ContactCard = (props) => {

  const dispatch = useDispatch();

  const onEditClick = (id)=> {
      console.log(id);
      dispatch(setEditContactId(id));
      
  }

  const onDeleteClick = (id) =>{
     dispatch(deleteContact(id));
  }

  const markFav = (fav , id)=>{
      console.log(fav);
      dispatch(markFavourtite({
        isFav : !fav,
        favId : id
      }));
  };

  return (
   
        <tr className={"text-center "}>
            <td className={"p-[1rem]"}>
                <div className={"border w-[40px] m-auto border-[grey] rounded-4xl"}>
                    <img className={"w-[30px]  rounded-4xl m-1"} src="https://tse4.mm.bing.net/th?id=OIP.ED1s_EBJoe_u_H3hPAAEVwHaHa&pid=Api&P=0&h=180" alt="" />
                </div>
            </td>
            <td  className={"p-[1rem]"}>{props.name}</td>
            <td  className={"p-[1rem]"}>{props.surName}</td>
            <td  className={"p-[1rem] "}>{props.mobileNo}</td>
            <td className={"text-xl gap-2 h-[80px] p-[1rem] flex items-center justify-center m-auto"}>
              <BsPencilFill onClick={() => onEditClick(props.id)} />
              <MdDelete onClick={() => onDeleteClick(props.id)} />
              <FaHeart style={{color : props.isFav ? "red" : "#6d6d6d"}} onClick={() => markFav(props.isFav, props.id)} />
            </td>
        </tr>
  
  )
}

export default ContactCard