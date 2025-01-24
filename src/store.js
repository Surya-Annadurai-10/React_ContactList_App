import {configureStore} from '@reduxjs/toolkit'
import { contactsReducers } from './slices/contactSlice'
import {logger} from "redux-logger"
export const store = configureStore({
    reducer : {
       contacts : contactsReducers
    },
    middleware : (getDefaultMiddleWare) => ([...getDefaultMiddleWare(), logger] )
});

