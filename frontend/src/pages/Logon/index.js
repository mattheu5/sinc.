import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import { useState } from 'react'

export default function Logon(){
    const [id, setId] = useState('')
    const history = useHistory()

   async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id })

            localStorage.setItem('funcId', id)
            localStorage.setItem('funcName', response.data.name)

            history.push('/profile')
        } catch (err){
            alert('Erro no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">              
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Seu ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size="16" color="red"/>    
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
                
        </div>
    )
}