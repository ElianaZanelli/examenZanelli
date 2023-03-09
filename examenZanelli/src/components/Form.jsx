import React from 'react'
import { useState } from 'react'
import Card from './Card'


const Form = () => {
    const [user, setUser] = useState({
        nombre: '',
        ciudad: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.trim().length > 2 && user.ciudad.length > 5){
            setShow(true)
            setErr(false)
        } else {
            setShow(false)
            setErr(true)
        }
    }

  return (
    <div> 
        <form className="Formulario" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresa tu nombre" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <input type="text" placeholder="Ingresa tu ciudad preferida" value={user.ciudad} onChange={(e) => setUser({...user, ciudad: e.target.value})}/>
            <button>Enviar</button>
        </form>
        {err && 'No ha colocado la información correcta'}
        {show && <Card nombre={user.nombre} ciudad={user.ciudad}/>}
        

    </div>
   
  )
}
export default Form
