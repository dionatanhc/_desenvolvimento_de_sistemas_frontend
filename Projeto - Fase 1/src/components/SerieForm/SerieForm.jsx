import React, { useState } from "react";

function SerieForm({ onAddSerie }) {
  const [formData, setFormData] = useState({
    titulo: "",
    temporadas: "",
    dataLancamento: "",
    diretor: "",
    produtora: "",
    categoria: "",
    dataAssistiu: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddSerie(formData);
    setFormData({
      titulo: "",
      temporadas: "",
      dataLancamento: "",
      diretor: "",
      produtora: "",
      categoria: "",
      dataAssistiu: "",
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Série</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

        <label>
          Série:<br/>
          <input
            name="titulo"
            placeholder="Título da Série"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Nº Temporadas:<br/>
          <input
            name="temporadas"
            placeholder="Número de Temporadas"
            value={formData.temporadas}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Lançamento: <br/>
          <input
            type="date"
            name="dataLancamento"
            value={formData.dataLancamento}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Diretor: <br/>
          <input
            name="diretor"
            placeholder="Nome do Diretor"
            value={formData.diretor}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Produtora: <br/>
          <input
            name="produtora"
            placeholder="Produtora"
            value={formData.produtora}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gênero: <br/>
          <input
            name="categoria"
            placeholder="Ex: Ação, Drama, Comédia..."
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Assistido em: <br/>
          <input
            type="date"
            name="dataAssistiu"
            value={formData.dataAssistiu}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" style={{ marginTop: "10px" }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default SerieForm;
