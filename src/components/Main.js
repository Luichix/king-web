import React from 'react'
import style from '../css/module/main.module.css'
import Home from './Home'
import History from './History'
import Catalogue from './Catalogue'
import data from '../data/info'
import Gallery from './Gallery'
import Contact from './Contact'

const Main = () => {
  return (
    <main id='main' className={style.main} >
      <Home data={data.home} />
      <History data={data} />
      <Catalogue />
      <Gallery/>
      <Contact contact={data.contact} form={data.form} />
    </main>
  )
}

export default Main