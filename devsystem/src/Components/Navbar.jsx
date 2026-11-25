import React from 'react'
import { Link } from 'react-router-dom'

import "../Style/Nav.scss"

const logado = sessionStorage.getItem("logado")

function sair(){
  //Remove a autenticação 
  sessionStorage.removeItem("logado");

  //Rediciona para o login
  window.location.replace("/");
}

export default function Navbar() {
  return (

    <nav>
        <section className='container'>
          {/*<Link to={"/"}>Login</Link>*/}
          {logado !== "true" && (
            <>
            <Link to={"/"}>Login</Link>
            </>
          )}
            <Link to={"/sobre"}>Sobre</Link>

            {logado === "true" && (
              <>
                <button className='btn-sair' onClick={sair}>
                  Sair
                </button>
              </>
            )}

          
        </section>
    </nav>
  )
}
