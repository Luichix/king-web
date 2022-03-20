import React from 'react'
import style from '../css/module/contact.module.css'

function Contact({ contact, form }) {
  return (
    <section id='Contacto' className={style.section}>
      <h2 className={style.title}>¡Estaremos encantados con sus comentarios!</h2>
      <form className={style.form}>
        <fieldset className={style.data} >
          <label>{form.client}</label>
          <input type='text' />
          <label>{form.email}</label>
          <input type='text' />
          <label>{form.place}</label>
          <input type='text' />
        </fieldset>
        <fieldset className={style.message}>
          <label>{form.message}</label>
          <textarea/>
          <button>{form.submit}</button>
        </fieldset>
      </form>
      <hr></hr>
      <div className={style.contact} >
        {contact.map((e,i) => (
          <span key={i}>
            <h3 className={style.title}>{e[0]}</h3>
            <p>{e[1]}</p>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Contact