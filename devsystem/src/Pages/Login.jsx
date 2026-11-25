import React, { useState } from 'react'
import "../Style/Login.scss"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function loginForm(event){
       event.preventDefault()

       //Busca os usuarios na API
       const resposta = await axios.get("http://localhost:3000/users")
       console.log(resposta)

       //Verifica se o usuario possui o email e senha correto
       const usuario = resposta.data.find((user) => {
        return user.email === email && user.senha === senha;
       })

       if (usuario) {
        //alert("Login realizado com sucesso")
        toast.success("Login realizado com sucesso!")
        sessionStorage.setItem("logado", "true")
        window.location.href = "/homeLogado"
       } else {
        toast.error("Usuário ou senha incorretos")
        //alert("usuario invalido")
       }
    }

  return (
    <main className='container login'>
        <section className='login-card'>
            <h1>Login</h1>

            <form onSubmit={loginForm}>
                <article className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                    type='email' id='email' 
                    placeholder='Digite seu email'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </article>
                <article className='form-control'>
                    <label htmlFor='senha'>Senha</label>
                    <input 
                    type='password' 
                    id='senha' 
                    placeholder='Digite sua senha'
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)}
                    />
                </article>

                <button className='button-primary' type='submit'>Entrar</button>
                <ToastContainer />
            </form>
        </section>
    </main>
  )
}
