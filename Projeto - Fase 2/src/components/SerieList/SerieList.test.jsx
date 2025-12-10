import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SerieList from "./SerieList";
import { api } from "../../service/api";

// 🔥 Mock da API
vi.mock("../../service/api", () => ({
  api: {
    get: vi.fn(),
    delete: vi.fn(),
  },
}));

const mockSeries = [
  {
    id: 1,
    title: "Breaking Bad",
    category: "Drama",
    seasons: 5,
    director: "Vince Gilligan",
    producer: "AMC",
    releaseDate: "2008-01-20",
    watchedDate: "2020-05-10",
  },
  {
    id: 2,
    title: "Dark",
    category: "Sci-Fi",
    seasons: 3,
    director: "Baran bo Odar",
    producer: "Netflix",
    releaseDate: "2017-12-01",
    watchedDate: "2021-03-22",
  }
];

describe("SerieList Component", () => {

  test("deve renderizar lista de séries retornada pela API", async () => {
    api.get.mockResolvedValueOnce({ data: mockSeries });

    render(<SerieList />);

    // aguarda a API completar
    await waitFor(() => {
      expect(screen.getByText("Breaking Bad")).toBeInTheDocument();
      expect(screen.getByText("Dark")).toBeInTheDocument();
    });
  });

  test("deve exibir mensagem quando não houver séries", async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    render(<SerieList />);

    await waitFor(() => {
      expect(screen.getByText("Nenhuma série encontrada.")).toBeInTheDocument();
    });
  });

  test("deve filtrar séries pelo campo de busca", async () => {
    api.get.mockResolvedValueOnce({ data: mockSeries });

    render(<SerieList />);

    // espera carregar a lista
    await waitFor(() => screen.getByText("Breaking Bad"));

    // digitar no campo de busca
    const input = screen.getByPlaceholderText(/buscar/i);
    fireEvent.change(input, { target: { value: "Dark" } });

    // deve exibir apenas Dark
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.queryByText("Breaking Bad")).not.toBeInTheDocument();
  });
});
