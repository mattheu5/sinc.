import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()

        const data = {
            name,
            email,
            whatsapp
        }

        try {
            const response = await api.post('funcionarios', data)
            
            alert(`Seu ID de acesso: ${response.data.id}`)

            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novamente')
        }
    }
    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size="16" color="red"/>    
                        Voltar para tela de login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        type="tel"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
                
            </div>
        </div>
    )    
}