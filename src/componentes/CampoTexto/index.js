import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
    
    const placeholderModificado = `${props.placeholder}...`
    
    const [valor, setValor] = useState()
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        ></input>
    </div>
}

export default CampoTexto