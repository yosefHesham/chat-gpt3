import React from 'react'
import "./navbar.css"
import {RiMenu3Line,RiCloseLine} from "react-icons/ri"
import logo from "../../assets/logo.svg"

 const Navbar = () => {
  return (
    <section className='gpt3-navbar'>
      <section className='gpt3-navbar-links'>

        <article className='gpt3-logo'>
          <img src={logo} alt="logo"/>
        </article>
        <section className='links-container'>
          <p> <a href='#home'>Home </a></p>
          <p> <a href='#wgpt3'>What is GPT3? </a></p>
          <p> <a href='#possibility'> Open AI</a></p>
          <p> <a href='#features'>Case Studies </a></p>
          <p> <a href='#blog'>Library </a></p>

        </section>
      </section>
    </section>
  )
}

export default Navbar
