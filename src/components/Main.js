import React from 'react'
import style from '../css/module/main.module.css'
import data from '../data/info'
import History from './History'
import Home from './Home'

const Main = () => {
  return (
    <main id='main' className={style.main} >
      <Home/>
      <History data={data} />
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