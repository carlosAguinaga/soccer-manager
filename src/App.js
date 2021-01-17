import React from "react";
import { Provider } from "react-redux";
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import Jugadores from "./components/Jugadores";
import store from './store'

const App = () => (
  <Provider store={ store }>
    <main>
      <h1>Soccer Manager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
