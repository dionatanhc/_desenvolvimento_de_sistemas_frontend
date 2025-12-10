import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static" sx={{
      background: "linear-gradient(90deg,#12002b 0%, #2b0057 50%, #5a00c6 100%)",
      boxShadow: "0 6px 18px rgba(90,0,198,0.25)"
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <span style={{ color: "#ff78d0" }}>📺</span> SerieJournal
          </Typography>
        </Box>

        <Box>
          <Button color="inherit" component={RouterLink} to="/">Início</Button>
          <Button color="inherit" component={RouterLink} to="/sobre">Sobre</Button>
          <Button color="inherit" component={RouterLink} to="/cadastrar">Cadastrar</Button>
          <Button color="inherit" component={RouterLink} to="/series">Listagem</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
