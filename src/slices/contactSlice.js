import { createSlice } from "@reduxjs/toolkit";


const initData = {
    contactList : [],
    editContactId : "",
    favCount : 0
}

const contactSlice = createSlice({
    name : "CONTACTS",
    initialState : initData,
    reducers : {
        addContact(state , action) {
        //   console.log("addContact :" ,  action.payload)
            state.contactList.push(action.payload);
            
        },
        
        setEditContactId(state , action){
             state.editContactId = action.payload
        },
        setEditContactDetails(state , action){
             const edittedUserIndex = state.contactList.findIndex((contact) =>{
                return contact.id == action.payload.id;
             })
            //  console.log(state.editContactId , action.payload.id);
            console.log("edittedUserIndex:",edittedUserIndex);
            

             state.contactList.splice(edittedUserIndex , 1 , action.payload);
             state.editContactId = "";
        },
        deleteContact(state , action) {
             const deleteContactIndex = state.contactList.findIndex((contact) =>{
                return contact.id == action.payload
             })

             console.log("deleteContactIndex:",deleteContactIndex);
             
             state.contactList.splice(deleteContactIndex , 1);
             state.editContactId = "";

             const favFilter = state.contactList.filter((contact) => {
                return contact.isFav == true;
            })

            state.favCount = favFilter.length;
        },
        markFavourtite(state , action) {
            const favUserIndex = state.contactList.findIndex((contact) =>{
                return contact.id == action.payload.favId
            });

            console.log("favUserIndex :",favUserIndex);
            state.contactList[favUserIndex].isFav = action.payload.isFav;
            
            const favFilter = state.contactList.filter((contact) => {
                return contact.isFav == true;
            })

            state.favCount = favFilter.length;
            
        }

    }
})

// console.log(initData);

export  const contactsReducers =  contactSlice.reducer;
// export default {addContact , editContact , deleteContact , markFavourtite} = {contactSlice.actions};


export const {addContact,setEditContactDetails ,setEditContactId, editContact , deleteContact , markFavourtite} = contactSlice.actions;
