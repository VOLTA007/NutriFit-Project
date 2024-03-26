import React, { useState } from 'react';
import styles from '../styles/NavbarDesktop.module.css';
import Link from 'next/link';
import Toggler from './Toggler';
import { signOut, useSession } from 'next-auth/react';



const NavbarDesktop = () => {
  const session = useSession();
  const [logOut, setlogOut] = useState(false)
  const status = session.status;

  const handleClick = () => {
    setlogOut(!logOut);
    setTimeout(() => {
        signOut();
    }, 2000);
  };

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
        {status === 'unauthenticated' && (
          <>
            <Link href="/Login" >Login</Link>
            <Link href="/Signup" className="bg-red-950 rounded-md p-2">Sign Up</Link>
          </>
        )}
        {status === 'authenticated' && (
                            <>
                            <button
                                type='button'
                                className={`${logOut ? styles.loader : 'bg-red-950 rounded-md p-2'}`}
                                onClick={handleClick}
                            >
                            {logOut ? '' : 'Logout'}
                            </button>
                            </>
                        )}

        <div className="flex mb-16">
          <Toggler />
        </div>
      </div>
    </nav>
  );
}

export default NavbarDesktop;
