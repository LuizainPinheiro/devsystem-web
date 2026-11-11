import React from 'react'
import { Link } from 'react-router-dom'

import "../Style/Nav.scss"

export default function Navbar() {
  return (

    <nav>
        <section className='container'>
            <Link to={"/"}>Login</Link>
            <Link to={"/sobre"}>Sobre</Link>
        </section>
    </nav>
  )
}
