import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/About.jsx";
import SerieForm from "./components/SerieForm/SerieForm.jsx";
import SerieList from "./components/SerieList/SerieList.jsx";

function App() {
  const [series, setSeries] = useState([]);

  function adicionarSerie(serie) {
    setSeries([...series, serie]);
  }

  function excluirSerie(index) {
    setSeries(series.filter((_, i) => i !== index));
  }

  function editarSerie(index, serieEditada) {
    const novasSeries = [...series];
    novasSeries[index] = serieEditada;
    setSeries(novasSeries);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cadastro" element={<SerieForm onAddSerie={adicionarSerie} />} />
        <Route
          path="/listagem"
          element={<SerieList series={series} onDelete={excluirSerie} onEdit={editarSerie} />}
        />
      </Routes>
    </div>
  );
}

export default App;