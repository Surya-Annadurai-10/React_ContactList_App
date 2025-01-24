import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { Provider } from 'react-redux'
import { store } from './store'




function App() {




  return (
   <>
<Provider store={store} >
  
<div className={"w-screen grid place-items-center h-[100vh] bg-[rgb(0,0,0)]"}>
    <div className={"min-w-[60%] h-[90vh] bg-[white]"} >
      <Header />  
      <SideBar />
    </div>

   </div>
</Provider>
   </>
  )
}

export default App
