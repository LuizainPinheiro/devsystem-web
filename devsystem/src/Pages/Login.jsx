import React from 'react'
import "../Style/Login.scss"

export default function Login() {
  return (
    <main className='container login'>
        <section className='login-card'>
            <h1>Login</h1>

            <form>
                <article className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' placeholder='Digite seu email' />
                </article>
                <article className='form-control'>
                    <label htmlFor='senha'>Senha</label>
                    <input type='password' id='senha' placeholder='Digite sua senha' />
                </article>

                <button type='submit'>Entrar</button>

            </form>
        </section>
    </main>
  )
}
