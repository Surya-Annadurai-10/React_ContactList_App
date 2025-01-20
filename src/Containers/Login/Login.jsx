import React, { useContext } from 'react'
import styles from "./Login.module.css"
import { signInWithPopup } from 'firebase/auth'
import { auth, googleAuthProvider } from '../firebase'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const ctx = useContext(UserContext)
    const navigate = useNavigate();
const handleLogin = async() =>{
    try{
     const res = await signInWithPopup(auth,googleAuthProvider);
    //  console.log(res);

     const user = {
        name :res.user.displayName,
        email : res.user.email,
        uid : res.user.uid
     }
     console.log(user);
     localStorage.setItem("userDetails" , JSON.stringify(user));
     ctx.setUserDetails(user);
     navigate("/home")
    }catch (err){
        console.log(err);
        
    }
}

  return (
    <div className={styles.loginCon}>
      
        <div className={styles.left}>
        <h1>Blog Website</h1>
           <h2>"Blogging is not rocket science. It’s about being yourself, and putting what you have into it."</h2>
           <p className={styles.para}>Blogging description
           Blogging is a powerful way to express oneself, share knowledge, and connect with others. At its core, blogging involves creating and maintaining a personal website or web page where you can publish content on various topics. This content can include articles, photos, videos, and other forms of media.</p>
            <button onClick={handleLogin} className={styles.loginBtn}>
                <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="" />
                <p>Login with Google</p>
            </button>
        </div>
        <div  className={styles.right}>
            <img src="https://plus.unsplash.com/premium_photo-1669686967932-8f66dfb74996?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsb2dzfGVufDB8fDB8fHww" alt="" />
        </div>

    </div>
  )
}

export default Login