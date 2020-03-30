import React, { useState } from 'react'
import './styles.css'
// import heroesImg from '../../assets//heroes.png'
import logoImg from '../../assets//logo.svg'
import FiLogIn from '../../assets/arrow-leftf.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Register() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory()

    const OngId = localStorage.getItem('OngId')
    const data = {
        title,
        description,
        value,
    }

    async function handleNewIncident(e) {
        e.preventDefault();
        try {
            await api.post('/incidents', data, {
                headers: {
                    authorization: OngId,
                }

            })
            history.push('/profile')
        } catch (error) {
            alert(error)
        }


    }

    return (

        <div className="newIncident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be hero"></img>
                    <h1>Cadastrar novo Caso</h1>
                    <p>Descreva o caso detalhadamente  para encontrar um heroi para resolver isso.</p>
                    <div>
                        <Link className="back-link" to="/profile">
                            <img src={FiLogIn} alt="filogin" />
                              Voltar para Home
                        </Link>
                    </div>
                </section>
                <form onSubmit={(e) => handleNewIncident(e)}>
                    <input placeholder="Titulo do caso"
                        value={title}
                        onChange={e => (setTitle(e.target.value))}
                    ></input>

                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => (setDescription(e.target.value))}
                    ></textarea>

                    <input placeholder="valor em reais"
                        value={value}
                        onChange={e => (setValue(e.target.value))}></input>

                    <button className="button" type="submit" >Cadastrar</button>
                </form>

            </div>

        </div>


    );


}