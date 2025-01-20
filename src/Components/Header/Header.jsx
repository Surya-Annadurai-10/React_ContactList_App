import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { UserContext } from '../../App'

const Header = () => {
    const ctx = useContext(UserContext);
    console.log(ctx.userDetails);
    
  return (
    <>
      <header className={styles.header}>
        <h2>Blog Website</h2>
        <ul>
            <li><Link className={styles.links} to={"/home"} >Home</Link></li>
            <li><Link className={styles.links} to={"/create"} >Create Blog</Link></li>
        </ul>
        <div className={styles.profilename_con}>
            <div className={styles.profilename}>
                <p>{ctx.userDetails.name.split(" ")[0][0]}{ctx.userDetails.name.split(" ")[1][0]}</p>
            </div>
            <Link className={styles.logout} to={"/"}>Log Out</Link>
        </div>
      </header>
    </>
  )
}

export default Header