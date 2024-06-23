import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)

  //Ternario --> condición ? seMuestra : noSeMuestra
  //condicion && seMuestra //corto circuito --> funciona igual que el if

  const cambiarMostrar = ()=> {
    actualizarMostrar(!mostrarFormulario)
  }
  
  //

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario===true ? <Formulario/> : <></> } */}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="DevOps"/>
      <Equipo equipo="UX y Design"/>
    </div>
  );
}

export default App;
