import React, { useState } from "react";

function SerieList({ series, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  function handleEditChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }

  function salvarEdicao(index) {
    onEdit(index, editData);
    setEditIndex(null);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Listagem de Séries</h2>
      {series.length === 0 ? (
        <p>Nenhuma série cadastrada.</p>
      ) : (
        <ul>
          {series.map((s, index) => (
            <li key={index} style={{ marginBottom: "15px" }}>
              {editIndex === index ? (
                // 🎯 MODO DE EDIÇÃO COMPLETO
                <div>
                  <input
                    name="titulo"
                    placeholder="Título"
                    value={editData.titulo}
                    onChange={handleEditChange}
                  />
                  <input
                    name="temporadas"
                    placeholder="Temporadas"
                    value={editData.temporadas}
                    onChange={handleEditChange}
                  />
                  <input
                    type="date"
                    name="dataLancamento"
                    value={editData.dataLancamento}
                    onChange={handleEditChange}
                  />
                  <input
                    name="diretor"
                    placeholder="Diretor"
                    value={editData.diretor}
                    onChange={handleEditChange}
                  />
                  <input
                    name="produtora"
                    placeholder="Produtora"
                    value={editData.produtora}
                    onChange={handleEditChange}
                  />
                  <input
                    name="categoria"
                    placeholder="Categoria"
                    value={editData.categoria}
                    onChange={handleEditChange}
                  />
                  <input
                    type="date"
                    name="dataAssistiu"
                    value={editData.dataAssistiu}
                    onChange={handleEditChange}
                  />

                  <button onClick={() => salvarEdicao(index)}>Salvar</button>
                  <button onClick={() => setEditIndex(null)}>Cancelar</button>
                </div>
              ) : (
                // 📄 VISUAL NORMAL
                <div>
                  <strong>{s.titulo}</strong> — {s.categoria} ({s.temporadas} temporadas)
                  <br />
                  Diretor: {s.diretor} | Produtora: {s.produtora}
                  <br />
                  Lançamento: {s.dataLancamento} | Assistido em: {s.dataAssistiu}
                  <br />
                  <button onClick={() => onDelete(index)}>Excluir</button>
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditData(s); // carrega os dados originais no formulário
                    }}
                  >
                    Editar
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SerieList;
