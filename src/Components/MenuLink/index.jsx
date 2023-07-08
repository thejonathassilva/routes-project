import React from 'react'
import styles from './MenuLink.module.css'
import { NavLink, useLocation } from 'react-router-dom'

export default function MenuLink({ children, to}) {
  const location = useLocation();

  return (
    <NavLink className={`
    ${styles.link}
    ${location.pathname === to ? styles.linkHighlighted : ""}
    `}
    activeclassname={styles.linkHighlighted} 
    to={to} >
  {children}
</NavLink>
  )
}
