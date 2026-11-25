import React from 'react'
import "../Style/Pessoas.scss"
export default function Pessoas() {
  return (
    <main className='container pessoas'>
        <h1>Lista de Pessoas</h1>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
        <tbody>
            <tr>
                <td>21</td>
                <td>Luiza Oliveira</td>
                <td>luiza.o@email.com</td>
            </tr>
        </tbody>

    </main>
  )
}
