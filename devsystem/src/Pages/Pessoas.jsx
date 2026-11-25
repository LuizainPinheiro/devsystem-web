import React from 'react'
import "../Style/Pessoas.scss"
import axios from 'axios'
import { useState, useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css"

export default function Pessoas() {

    const [pessoas, setPessoas] = useState([]);
    const [pagina, setPagina] = useState(1);


    useEffect(() => {
        axios.get("http://localhost:3000/pessoas")
            .then(response => {
                setPessoas(response.data);
            })
    }, []);

    //Configuração da paginação
    const itensPorPagina = 5;

    //Calcula o indice inicial dos registros na página atual
    const inicio = (pagina -1) * itensPorPagina;

    //Calcula o indice final dos registros na página atual
    const fim = inicio + itensPorPagina;

    //Obtém os registros para a página atual
    const pessoasPagina = pessoas.slice(inicio, fim);

    // O math.ceil arredonda para cima, garantindo que haja uma página extra se houver registros restantes
    //Calcula o total de páginas
    const totalPaginas = Math.ceil(pessoas.length / itensPorPagina);


  return (
    <main className='container pessoas'>
        <h1>Lista de Pessoas</h1>

        <table className='pessoas-table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody className='pessoas-body'>
            {pessoasPagina.map(({id, nome, email, telefone}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{nome}</td>
                    <td>{email}</td>
                    <td>{telefone}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <section>
            <button  
                onClick={() => setPagina(pagina - 1)} 
                disabled={pagina === 1}
            >Anterior</button>
            <span>
                Página {pagina} de {totalPaginas}
            </span>
            <button 
                onClick={() => setPagina(pagina + 1)} 
                disabled={pagina === totalPaginas}
            >Próxima</button>
        </section>
    </main>
  )
}
