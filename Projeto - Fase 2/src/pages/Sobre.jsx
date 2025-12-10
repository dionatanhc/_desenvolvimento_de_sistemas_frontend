import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function Sobre() {
  return (
    <Box sx={{ p: 4, background: "#0b0220", minHeight: "72vh", color: "#fff" }}>
      <Paper elevation={6} sx={{ p: 4, maxWidth: 900, mx: "auto", background: "linear-gradient(180deg,#1a0440,#2b0057)" }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>
          Sobre o Projeto
        </Typography>

        <Typography sx={{ color: "#e6ddff", lineHeight: 1.6 }}>
          O SérieJournal é uma aplicação de exemplo para praticar consumo de API REST
          (CRUD). A interface foi construída com React + Material-UI e consome a API
          local (serieJournal-api) via Axios. A proposta é criar ações dinâmicas:
          listar, buscar, cadastrar, editar e excluir séries a partir dos dados retornados pela API.
        </Typography>
      </Paper>
    </Box>
  );
}
