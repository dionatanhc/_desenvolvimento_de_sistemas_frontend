import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

test("deve exibir o título SerieJournal", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const title = screen.getByText(/SerieJournal/i);
  expect(title).toBeInTheDocument();
});
