import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box sx={{
      minHeight: "72vh",
      background: "linear-gradient(180deg,#0a0120 0%, #1a0440 100%)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 4
    }}>
      <Box sx={{ textAlign: "center", maxWidth: 900 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: "#f3e9ff" }}>
          Bem-vindo ao SérieJournal
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, color: "#d6bfff" }}>
          Maratonas inesquecíveis a qualquer hora, em qualquer lugar. — Assistir. Viciar. Repetir.
        </Typography>
        <Button component={RouterLink} to="/series" variant="contained"
          sx={{
            background: "linear-gradient(90deg,#a020f0,#ff4ecf)",
            color: "#fff",
            px: 4,
            py: 1.2,
            fontWeight: 700,
            "&:hover": { filter: "brightness(1.05)" }
          }}>
          Ver Séries
        </Button>
      </Box>
    </Box>
  );
}
