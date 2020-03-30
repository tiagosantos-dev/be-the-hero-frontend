import React,{useEffect,useState} from 'react'
import logoImg from '../../assets//logo.svg'
import {Link} from 'react-router-dom'
import './styles.css'
import FiTrash from '../../assets/trash-2.svg'
import FiPower from '../../assets/power (1).svg'
import api from '../../services//api'

export default function Profile(){
    const [incidents, setIncidents] = useState([])
    const name= localStorage.getItem('OngName');
    const OngId= localStorage.getItem('OngId');
    // const history = useHistory();
    useEffect(()=>{
        api.get('/profile',{headers:{
            authorization: OngId,

        }}).then((res)=>{
            setIncidents(res.data)

        })



    }, [OngId])

        console.log(incidents)

    async function handleDeleteIncident(id){
        try {
           await api.delete(`/incidents/${id}`,{headers:{
                authorization: OngId,

            }})
          setIncidents(incidents.filter(incident =>incident.id !== id))

        } catch (error) {
            
        }


    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="be the"></img>
            <span>Bem Vindo, {name}</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo Caso
                </Link>
                <button>
                    <Link to="/">
                      
                        <img src={FiPower} alt="be her" style={{width:20 , height:20}}></img>
                    </Link>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
        
            <ul>{incidents.map(incidents=>(   
                 <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL' }).format(incidents.value)}</p>

                    <button type="button" onClick={()=>handleDeleteIncident(incidents.id)}>
                        <img src={FiTrash} alt="TRASH"></img>

                    </button>
                </li> 



            ))}
             
            </ul>


        


        </div>
    )

}