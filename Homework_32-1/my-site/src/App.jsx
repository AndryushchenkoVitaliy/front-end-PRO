import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  TextField,
  List,
  ListItem,
  Checkbox,
  Paper,
  Card,
  CardContent,
  Grid,
  Avatar
} from "@mui/material";
import { useState } from "react";

// ---------------- HEADER ----------------
function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        background: "rgba(20,20,30,0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: 700, letterSpacing: 1 }}>
          DEV PORTFOLIO
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/todo">TODO</Button>
          <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// ---------------- FOOTER ----------------
function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        mt: 6,
        background: "linear-gradient(90deg,#0f172a,#111827)",
        color: "white"
      }}
    >
      <Typography sx={{ opacity: 0.8 }}>
        Contact: email@example.com | +380-XX-XXX-XX-XX
      </Typography>
    </Box>
  );
}

// ---------------- HOME ----------------
function Home() {
  return (
    <Box sx={{ background: "#0b1020", minHeight: "100vh", color: "white", py: 8 }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Avatar sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 800 }}>
            Frontend Developer
          </Typography>
          <Typography sx={{ opacity: 0.7 }}>
            React • Redux • MUI • API Integration
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ background: "#111827", color: "white" }}>
              <CardContent>
                <Typography variant="h6">About Me</Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  I build modern SPA applications with React ecosystem.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ background: "#111827", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Skills</Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  React, Redux Toolkit, MUI, REST API, Git
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ---------------- TODO ----------------
function TodoPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text, done: false }
    ]);
    setText("");
  };

  const toggle = (id) => {
    setTodos(
      todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        TODO LIST
      </Typography>

      <Paper sx={{ p: 2, display: "flex", gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Paper>

      <Grid container spacing={2}>
        {todos.map(t => (
          <Grid item xs={12} md={6} key={t.id}>
            <Card
              sx={{
                background: t.done ? "#1f2937" : "#111827",
                color: "white",
                transition: "0.3s",
                opacity: t.done ? 0.6 : 1
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Checkbox
                  checked={t.done}
                  onChange={() => toggle(t.id)}
                />
                <Typography sx={{ textDecoration: t.done ? "line-through" : "none" }}>
                  {t.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// ---------------- SWAPI ----------------
function SwapiPage() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch("https://swapi.dev/api/people/");
    const data = await res.json();
    setPeople(data.results);
    setLoading(false);
  };

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        STAR WARS CHARACTERS
      </Typography>

      <Button variant="contained" onClick={load} sx={{ mb: 3 }}>
        Load Data
      </Button>

      {loading && <Typography>Loading...</Typography>}

      <Grid container spacing={2}>
        {people.map((p, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ background: "#111827", color: "white" }}>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  Height: {p.height} cm
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// ---------------- APP ----------------
export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#0b1020", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/swapi" element={<SwapiPage />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
