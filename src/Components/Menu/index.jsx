import React from 'react'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegation}>
        <MenuLink
          children="Inicio"
          to="/"
        >
        </MenuLink>
        <MenuLink
          children="Sobre mim"
          to="/sobre-mim"  
        >
        </MenuLink>
      </nav>
    </header>
  )
}
