import React, { useState } from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"


const Menu = () => <>
 <p> <a href='#home'>Home </a></p>
          <p> <a href='#wgpt3'>What is GPT3? </a></p>
          <p> <a href='#possibility'> Open AI</a></p>
          <p> <a href='#features'>Case Studies </a></p>
          <p> <a href='#blog'>Library </a></p>
</>
 const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <section className='gpt3-navbar'>
      <section className='gpt3-navbar-links'>

        <article className='gpt3-logo'>
          <img src={logo} alt="logo"/>
        </article>

        <section className='links-container'>
          <Menu></Menu>
        </section>

      </section>

      <article className='gpt3-navbar-sign'>
        <p>Sign in</p>
      <button type='button'>Sign up</button>
      </article>

      <section className='gpt3__navbar-menu'>
      {toggleMenu? <RiCloseLine color='#fff' size={27} onClick={() => {setToggleMenu(false)}}/>: <RiMenu3Line color='#fff' size={27} onClick={() => {setToggleMenu(true)}}/>}
        {toggleMenu && <section className='menu-container'>
            <section className='menu-links'> <Menu></Menu> 
            
      <article className='gpt3-navbar-menu-sign'>
        <p>Sign in</p>
      <button type='button'>Sign up</button>
      </article>
            </section>
           </section>}
      </section>

    </section>
  )
}

export default Navbar
