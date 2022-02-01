import React from 'react';
import './App.css';
import{ TodoProvider} from '../Componente/TodoContext';
import { AppUI } from './index.js';

function App() {
 
  let bandera = false;
  let alerta = "";

  return (
    <div className="Container">
     { /*bandera==true ? <h2 class="letras">{alerta}</h2>: null*/}
     <TodoProvider>
      <AppUI />
    </TodoProvider>

    </div>

  );
}

export default App;
