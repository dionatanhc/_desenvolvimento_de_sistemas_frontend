import React, { useEffect, useState } from "react";
import {
  Box, Grid, Card, CardContent, CardActions, Typography,
  IconButton, Dialog, DialogTitle, DialogContent, DialogActions,
  Button, CircularProgress, Snackbar, Alert, TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SerieForm from "../SerieForm/SerieForm";
import { api } from "../../service/api";

export default function SerieList() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, id: null });
  const [snack, setSnack] = useState({ open: false, severity: "success", message: "" });
  const [query, setQuery] = useState("");

  const fetchSeries = async () => {
    setLoading(true);
    try {
      const res = await api.get("series");
      setSeries(res.data);
    } catch {
      setSnack({ open: true, severity: "error", message: "Erro ao carregar séries." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSeries(); }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`series/${id}`);
      setSnack({ open: true, severity: "success", message: "Série excluída." });
      fetchSeries();
    } catch {
      setSnack({ open: true, severity: "error", message: "Erro ao excluir." });
    } finally {
      setDeleteConfirm({ open: false, id: null });
    }
  };

  const filtered = series.filter(s => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.title?.toLowerCase().includes(q) ||
      s.category?.toLowerCase().includes(q) ||
      s.director?.toLowerCase().includes(q)
    );
  });

  function formatDate(d) {
    if (!d) return "-";
    try {
      return new Date(d).toLocaleDateString("pt-BR");
    } catch {
      return d;
    }
  }

  return (
    <Box sx={{ p: 3, minHeight: "72vh", background: "linear-gradient(180deg,#0a0120,#12002b)" }}>
      <Typography variant="h4" sx={{ color: "#fff", mb: 2, fontWeight: 800 }}>
        Séries Cadastradas
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          placeholder="Buscar por título, categoria ou diretor..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{ background: "#fff", borderRadius: 1, flex: 1 }}
          size="small"
        />
        <Button onClick={fetchSeries} variant="contained"
          sx={{ background: "linear-gradient(90deg,#a020f0,#ff4ecf)" }}>
          Atualizar
        </Button>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress color="inherit" />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filtered.length === 0 && (
            <Typography sx={{ color: "#d6bfff", ml: 2 }}>Nenhuma série encontrada.</Typography>
          )}

          {filtered.map(s => (
            <Grid item xs={12} md={6} lg={4} key={s.id}>
              <Card sx={{
                borderRadius: 2,
                overflow: "hidden",
                background: "linear-gradient(180deg,#2b0057,#3d00c2)"
              }} elevation={6}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#fff", fontWeight: 800 }}>
                    {s.title}
                  </Typography>

                  <Typography sx={{ color: "#e6d9ff", mt: 1 }}>
                    {s.category} — {s.seasons} temporadas
                  </Typography>

                  <Typography sx={{ color: "#f3e9ff", mt: 1 }}>
                    <strong>Diretor:</strong> {s.director || "-"}<br />
                    <strong>Produtora:</strong> {s.producer || "-"}<br />
                    <strong>Lançamento:</strong> {formatDate(s.releaseDate)}<br />
                    <strong>Assistido em:</strong> {formatDate(s.watchedDate)}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <IconButton onClick={() => setEditingId(s.id)}>
                    <EditIcon sx={{ color: "#fff" }} />
                  </IconButton>

                  <IconButton onClick={() => setDeleteConfirm({ open: true, id: s.id })}>
                    <DeleteIcon sx={{ color: "#ffb3e6" }} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* MODAL DE EDIÇÃO */}
      <Dialog
        open={!!editingId}
        onClose={() => { setEditingId(null); fetchSeries(); }}
        fullWidth maxWidth="md"
      >
        <DialogTitle sx={{ background: "linear-gradient(90deg,#2b0057,#3d00c2)", color: "#fff" }}>
          Editar Série
        </DialogTitle>

        <DialogContent sx={{ background: "#12002b" }}>
          <SerieForm id={editingId} onSaved={() => { setEditingId(null); fetchSeries(); }} />
        </DialogContent>
      </Dialog>

      {/* MODAL DE CONFIRMAR EXCLUSÃO */}
      <Dialog open={deleteConfirm.open} onClose={() => setDeleteConfirm({ open: false, id: null })}>
        <DialogTitle>Confirmar exclusão</DialogTitle>
        <DialogContent>
          <Typography>Tem certeza que deseja excluir esta série?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirm({ open: false, id: null })}>Cancelar</Button>
          <Button color="error" onClick={() => handleDelete(deleteConfirm.id)}>Excluir</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snack.open} autoHideDuration={3500}
        onClose={() => setSnack(s => ({ ...s, open: false }))}>
        <Alert severity={snack.severity} sx={{ width: "100%" }}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
}
