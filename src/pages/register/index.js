import React, {useState} from 'react'
import './styles.css'
// import heroesImg from '../../assets//heroes.png'
import logoImg from '../../assets//logo.svg'
import  FiLogIn  from '../../assets/arrow-leftf.svg'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const history = useHistory()
   async function handleRegister(e){
        e.preventDefault();
        const data={
            name,
            email,
            whatsapp,
            city,
            uf,
        }
            try {
                const response =  await api.post('/ongs', data)

                alert(`SEU ID DE ACESSO É ${response.data.id}`)
                history.push('/')
            } catch (error) {
                alert(`ERROR ${error}`)
            }
           

          
           
        

    }

     

    return (

        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be hero"></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <div>
                        <Link className="back-link" to="/">
                            <img src={FiLogIn} alt="filogin"/>
                              Voltar para Logon
                        </Link>
                    </div>
                </section>
                <form onSubmit={handleRegister}>
                    <input  placeholder="Nome da ONG" value={name} onChange={e=>setName(e.target.value)}></input>
                    <input type="email" placeholder="Email"  value={email} onChange={e=>setEmail(e.target.value)}></input>
                    <input placeholder="Whatsapp"  value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}></input>

                    <div className="input-group">
                        <input placeholder="Cidade"  value={city} onChange={e=>setCity(e.target.value)}></input>
                        <input placeholder="UF" style={{width: 80}}  value={uf} onChange={e=>setUf(e.target.value)}></input>
                        

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>

        </div>


    );


}