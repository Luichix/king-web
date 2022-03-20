import React from 'react'
import style from '../css/module/history.module.css'
import history from '../assets/pictures/history.jpg'

function History({ data }) {
  return (
    <section id='Historia' className={style.history}>
      <div className={style.info}>
        <h2 className={style.title}>Nuestra Historia</h2>
        {data.history.map((e, i) => (
          <p key={i} className={style.data} >{e}</p>
        ))}
      </div>
      <figure className={style.figure} >
        <img src={history} alt='quesos el rey' className={style.imagen} ></img>
      </figure>
    </section>
  )
}

export default History