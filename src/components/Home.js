import React from 'react'
import style from '../css/module/home.module.css'
import home from '../assets/pictures/home.jpg'

function Home() {
  return (
    <section id='Inicio' className={style.section}>
      <img src={home} alt='foto de quesos el rey' className={style.home} />
    </section>
  )
}

export default Home