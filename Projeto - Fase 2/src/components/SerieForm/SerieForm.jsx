import React, { useState, useEffect } from "react";
import {
  Box, Card, CardContent, Grid, TextField,
  Button, Typography, CircularProgress,
  Snackbar, Alert
} from "@mui/material";
import { api } from "../../service/api";

export default function SerieForm({ id = null, onSaved }) {
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    message: ""
  });

  const [formData, setFormData] = useState({
    title: "",
    seasons: "",
    releaseDate: "",
    director: "",
    producer: "",
    category: "",
    watchedDate: ""
  });

  // CARREGAR SÉRIE PARA EDIÇÃO
  useEffect(() => {
    async function load() {
      if (!id) return;

      setLoading(true);
      try {
        const res = await api.get(`series/${id}`);
        const d = res.data;

        setFormData({
          title: d.title || "",
          seasons: d.seasons ?? "",
          releaseDate: d.releaseDate ? d.releaseDate.split("T")[0] : "",
          director: d.director || "",
          producer: d.producer || "",
          category: d.category || "",
          watchedDate: d.watchedDate ? d.watchedDate.split("T")[0] : ""
        });
      } catch {
        setSnack({
          open: true,
          severity: "error",
          message: "Erro ao carregar série."
        });
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  // INPUTS
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // SUBMIT
  async function handleSubmit(e) {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      if (id) {
        await api.put("series", { id, ...formData });
        setSnack({
          open: true,
          severity: "success",
          message: "Série atualizada."
        });
      } else {
        await api.post("series", formData);
        setSnack({
          open: true,
          severity: "success",
          message: "Série cadastrada."
        });
      }

      if (onSaved) onSaved();
    } catch {
      setSnack({
        open: true,
        severity: "error",
        message: "Erro ao salvar."
      });
    } finally {
      setLoading(false);
    }
  }

  const labelStyle = { style: { color: "#d6bfff" }, shrink: true };
  const inputStyle = { input: { color: "#fff" } };

  return (
    <Box sx={{ p: 1 }}>
      <Card sx={{
        maxWidth: 860,
        mx: "auto",
        background: "linear-gradient(180deg,#1a0440,#2b0057)",
        color: "#fff"
      }} elevation={6}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 800, color: "#ffe6ff" }}>
            {id ? "Editar Série" : "Cadastrar Série"}
          </Typography>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField fullWidth label="Título" name="title"
                    value={formData.title} onChange={handleChange}
                    required InputLabelProps={labelStyle} sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField fullWidth label="Nº Temporadas" name="seasons"
                    type="number" value={formData.seasons}
                    onChange={handleChange} required
                    InputLabelProps={labelStyle} sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField fullWidth label="Lançamento" name="releaseDate"
                    type="date" value={formData.releaseDate}
                    onChange={handleChange} InputLabelProps={labelStyle}
                    sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField fullWidth label="Diretor" name="director"
                    value={formData.director} onChange={handleChange}
                    InputLabelProps={labelStyle} sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField fullWidth label="Produtora" name="producer"
                    value={formData.producer} onChange={handleChange}
                    InputLabelProps={labelStyle} sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Categoria" name="category"
                    value={formData.category} onChange={handleChange}
                    InputLabelProps={labelStyle} sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Assistido em" name="watchedDate"
                    type="date" value={formData.watchedDate}
                    onChange={handleChange} InputLabelProps={labelStyle}
                    sx={inputStyle}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth
                    sx={{
                      background: "linear-gradient(90deg,#a020f0,#ff4ecf)",
                      py: 1.2,
                      fontWeight: 700
                    }}>
                    {id ? "Salvar Alterações" : "Cadastrar Série"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </CardContent>
      </Card>

      <Snackbar open={snack.open} autoHideDuration={3500}
        onClose={() => setSnack(s => ({ ...s, open: false }))}>
        <Alert severity={snack.severity} sx={{ width: "100%" }}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
}
