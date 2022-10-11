import { Alert, Container, Paper, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export interface ITask {
  id: string;
  text: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [error, setError] = useState("");

  return (
    <Container maxWidth="sm" sx={{ mt: "20px" }}>
      <AddTodoForm tasks={tasks} setTasks={setTasks} setError={setError} />
      {tasks.length ? (
        <TodoList tasks={tasks} setTasks={setTasks} />
      ) : (
        <Paper elevation={3} sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6">
            Похоже, вы еще не добавили ни одной задачи
          </Typography>
        </Paper>
      )}
      {/* Небольшое всплывающее окошко для отображения ошибок */}
      <Snackbar
        open={error.length > 0}
        autoHideDuration={1500}
        onClose={() => setError("")}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
