import React from 'react'
import styles from '../style'
import { Link, NavLink } from "react-router-dom";

const Navitem = ({title,path,bg,val}) => {

  return(
   <li className={`${styles.heading1} ${styles.list_hover} ${bg}`}>
       <NavLink to={path} className={({isActive})=>isActive?` ${styles.active_nav}`:""  } >{title}</NavLink>
   </li>
  )
}




export default Navitem
