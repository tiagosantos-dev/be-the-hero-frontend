import React,{useState} from 'react';
import './styles.css'
import heroesImg from '../../assets//heroes.png'
import logoImg from '../../assets//logo.svg'
import  FiLogIn  from '../../assets//log-in (1).svg'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function Logon(props) {
    const [id, setId]= useState('')
    const history= useHistory()
    async function handleCreate(e){
        e.preventDefault();

        try {
            const response = await api.post('/sessions', {id})
            localStorage.setItem('OngId', id)
            localStorage.setItem('OngName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert('falha no login ')
        }

    }

    return (
        
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"></img>
            
                <form onSubmit={handleCreate}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e=>{setId(e.target.value)}}/>
                    <button type="submit" className="button">Entrar</button>

                    <div className="back-link">
                        <Link className="back-link" to="/register">
                            <img src={FiLogIn} alt="filogin"/>
                              Não tenho cadastro
                        </Link>
                    </div>
                </form>


            </section>

            <img src={heroesImg} alt="heroes"></img>
            
        </div>


    )


}


