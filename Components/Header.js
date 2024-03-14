import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import NavBar from './NavBar';

function Header() {

  return (
    <div className={styles.header1}>
      <p className={styles.paragraph1}>Welcome To Nutri Fit</p>
       <NavBar /> 
    </div>
  );
}

export default Header;
