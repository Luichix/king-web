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
        <h2 className={style.title}>¡Estaremos encantados con sus comentarios!</h2>
        <form>
          <fieldset>
            <label>Nombre y Apellido</label>
            <input/>
            <label>Correo</label>
            <input/>
            <label>Lugar de Residencia</label>
            <input/>
          </fieldset>
          <fieldset>
            <label>Mensaje</label>
            <textarea/>
          </fieldset>
          <button>Enviar</button>
        </form>
        <hr></hr>
        {data.contact.map((e,i) => (
          <span key={i}>
            <h3>{e[0]}</h3>
            <p>{e[1]}</p>
          </span>
        ))}
      </section>
    </main>
  )
}

export default Main