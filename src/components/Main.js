import React from 'react'
import style from '../css/module/main.module.css'
import data from '../data/info'

const Main = () => {
  return (
    <main id='main' className={style.main} >
      <section id='Inicio' className={style.section}>
        <h2 className={style.title}>Inicio</h2>
      </section>
      <section id='Historia' className={style.section}>
        <h2 className={style.title}>Nuestra Historia</h2>
        {data.history.map((e, i) => (
          <p key={i} className={style.data} >{e}</p>
        ))}
      </section>
      <section id='Catálogo' className={style.section}>
        <h2 className={style.title}>Catálogo</h2>
      </section>
      <section id='Galería' className={style.section}>
        <h2 className={style.title}>Galería</h2>
      </section>
      <section id='Contacto' className={style.section}>
        <h2 className={style.title}>Contacto</h2>
      </section>
    </main>
  )
}

export default Main