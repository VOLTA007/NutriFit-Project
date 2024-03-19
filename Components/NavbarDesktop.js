import React from 'react';
import styles from '../styles/NavbarDesktop.module.css';
import Link from 'next/link';
import Toggler from './Toggler';

const NavbarDesktop = () => {
  return (
    <nav className={styles.navcontainer}>
      <Link href="/Home" className='flex justify-center items-center'>
        <img className={styles.Logo} src='./Nutrifitlogo.jpg' alt='Logo' />
      </Link>
      <div className="flex justify-center items-center gap-10">
        <Link href="/Home">Home</Link>  
        <Link href="/About">About</Link>
      </div>
      <div className="flex justify-start items-center gap-8">
          <Link href="/Login">Login</Link>
          <Link className="bg-red-950 rounded-md p-2" href="/Signup">Signup</Link>
          <div className="flex mb-16">
            <Toggler />
          </div>
      </div>
    </nav>
  );
}

export default NavbarDesktop;
