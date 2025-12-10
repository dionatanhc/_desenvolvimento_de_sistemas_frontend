// SerieForm.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SerieForm from "./SerieForm";
import { vi, describe, it, beforeEach, expect } from "vitest";

// mock do axios (api)
vi.mock("../../service/api", () => ({
  api: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
  },
}));

import { api } from "../../service/api";

describe("SerieForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // -------------------------------------------------------
  it("deve cadastrar nova série (POST)", async () => {
    api.post.mockResolvedValueOnce({}); // mock POST

    render(<SerieForm />);

    // Preencher campos
    fireEvent.change(screen.getByLabelText(/Título/i), {
      target: { value: "Friends" },
    });

    fireEvent.change(screen.getByLabelText(/Nº Temporadas/i), {
      target: { value: "10" },
    });

    fireEvent.change(screen.getByLabelText(/Diretor/i), {
      target: { value: "David Crane" },
    });

    fireEvent.change(screen.getByLabelText(/Produtora/i), {
      target: { value: "NBC" },
    });

    fireEvent.change(screen.getByLabelText(/Categoria/i), {
      target: { value: "Comédia" },
    });

    // Enviar formulário
    fireEvent.submit(
      screen.getByRole("button", { name: /Cadastrar Série/i })
    );

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith("series", {
        title: "Friends",
        seasons: "10",
        releaseDate: "",
        director: "David Crane",
        producer: "NBC",
        category: "Comédia",
        watchedDate: "",
      });
    });
  });

  // -------------------------------------------------------
  it("deve atualizar série existente (PUT)", async () => {
    // mock do GET para carregar série inicial
    api.get.mockResolvedValueOnce({
      data: {
        title: "Friends",
        seasons: 10,
        releaseDate: "1994-09-22T00:00:00",
        director: "David Crane",
        producer: "NBC",
        category: "Comédia",
        watchedDate: null,
      },
    });

    api.put.mockResolvedValueOnce({}); // mock PUT

    render(<SerieForm id={1} />);

    // ✔ Esperar o formulário ser carregado
    await screen.findByDisplayValue("Friends");

    // Editar título
    fireEvent.change(screen.getByLabelText(/Título/i), {
      target: { value: "Friends Updated" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: /Salvar Alterações/i })
    );

    await waitFor(() => {
      expect(api.put).toHaveBeenCalledWith("series", {
        id: 1,
        title: "Friends Updated",
        seasons: 10,
        releaseDate: "1994-09-22",
        director: "David Crane",
        producer: "NBC",
        category: "Comédia",
        watchedDate: "",
      });
    });
  });
});
