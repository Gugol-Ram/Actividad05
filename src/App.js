// import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";
import CrearEncuesta from "./Components/CrearEncuesta";
import Encuesta from "./Components/Encuesta";
import Menu from "./Components/Menu";
import NotFound from "./Components/NotFound";

import encuestas from "./Data/encuestas.json";

import "./App.css";

function App() {
  const [listaEncuestas, setListaEncuestas] = useState(encuestas);

  const agregarEncuesta = (nuevaEncuesta) => {
    nuevaEncuesta.id = listaEncuestas.length + 1;
    setListaEncuestas([...listaEncuestas, nuevaEncuesta]);
  };

  const responderEncuesta = (id, respuestas) => {
    setListaEncuestas((prevEncuestas) => {
      return prevEncuestas.map((encuesta) => {
        if (encuesta.id === parseInt(id)) {
          return {
            ...encuesta,
            respuestas: [respuestas], // Esto asume que respuestas es un array, de lo contrario, ajusta según sea necesario.
          };
        }
        return encuesta;
      });
    });
  };
  // const responderEncuesta = (id, respuestas) => {
  //   const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));
  //   encuesta.respuestas = [respuestas];
  // };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio listaEncuestas={listaEncuestas} />} />

        <Route
          path="/encuesta/crear"
          element={<CrearEncuesta agregarEncuesta={agregarEncuesta} />}
        />

        <Route
          path="/encuesta/:id"
          element={
            <Encuesta
              listaEncuestas={listaEncuestas}
              responderEncuesta={responderEncuesta}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//   </header>
// </div>
