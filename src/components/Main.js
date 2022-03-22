import React from 'react'
import style from '../css/module/main.module.css'
import Header from './Header'
import Home from './Home'
import History from './History'
import data from '../data/info'
import Gallery from './Gallery'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  return (
    <main id='main' className={style.main} >
      <Header/>
      <Home data={data.home} />
      <History data={data} />
      <Gallery data={data.producto} />
      <Contact contact={data.contact} form={data.form} />
      <Footer/>
    </main>
  )
}

export default Main