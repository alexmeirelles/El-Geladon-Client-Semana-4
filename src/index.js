import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./views/Home/Home";
import "assets/styles/main.css";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);

// esse codigo acima adiciona a paleta, mas necessita atualizar manualmente para ver //

//o codigo abaixo adiciona a paleta, atualiza automaticamente mostrando 3, qdo da o f5, aparece apenas uma que foi adicionada// 

// esta ocorrendo problema de versão de react //

/* 
import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home/Home"
import './assets/styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById("root")
);
*/