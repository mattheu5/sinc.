import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'
import './styles.css'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <section>
                    <span>Bem vindo(a), Matheus</span>

                    <Link className="button" to="/ponto/new">Bater ponto</Link>
                    <button></button>

                    <button type="button">
                        <FiPower size={18} color="red"/>
                    </button>
                </section>
            </header>
        </div>
    )
}