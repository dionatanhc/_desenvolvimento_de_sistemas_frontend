import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import SerieList from "./components/SerieList/SerieList";
import SerieForm from "./components/SerieForm/SerieForm";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/series" element={<SerieList />} />
        <Route path="/cadastrar" element={<SerieForm />} />
        <Route path="/editar/:id" element={<SerieForm />} />
      </Routes>
    </>
  );
}

export default App;
