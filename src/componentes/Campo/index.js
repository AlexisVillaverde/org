import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{
    
    const placeholderModificado = `${props.placeholder}...`
    
    const {type = "text"} = props

    const [valor, setValor] = useState()
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        ></input>
    </div>
}

export default Campo