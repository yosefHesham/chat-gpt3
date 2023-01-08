import React from 'react'
import {Brand, CTA, Navbar} from "./components"
import "./app.css"
import "./index.css"
import WhatGPT3 from './containers/whatGPT/whatGPT'
import Features from './containers/features/Features'
import Possibility from './containers/possibility/Possibility'
import Blog from './containers/blog/Blog'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'

 const App = () => {
  return (
    <div className='App'>

      <div className='gradient__bg'>
    <Navbar></Navbar>
    <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
    <Possibility></Possibility>
    <CTA></CTA>
    <Blog></Blog>
    <Footer></Footer>
    </div>
  )
}

export default App