import React from 'react'
import style from '../css/module/sidenav.module.css'
import { Link as Nav } from 'react-scroll'

const elements = ['Inicio','Historia','Catálogo','Galería','Contacto' ]

const Sidenav = ({ nav }) => {
  return (
    <div className={nav ? style.sidenav : style.none}>
      {elements.map((e,i) => (
        <Nav
          key={i}
          className={style.item}
          activeClass={style.active}
          to={e}
          spy={true}
          smooth='easeInOutQuint'
          offset={0}
          duration={1500}
        ><span>{e}</span></Nav>
      ))}
    </div>
  )
}

export default Sidenav