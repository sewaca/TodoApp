import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ITask } from "../App";

interface AddTodoFormProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  setError: Dispatch<SetStateAction<string>>;
}

export default function AddTodoForm({ tasks, setTasks, setError }: AddTodoFormProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!newTaskText) return setError("Задача не может быть пустой");
    setTasks([
      ...tasks,
      {
        id: "task_" + Math.random().toString(16).slice(2, 10),
        text: newTaskText,
      },
    ]);
    setNewTaskText("");
  };

  return (
    <Paper elevation={3} sx={{ py: 4, px: 2 }}>
      <Typography variant="h6" sx={{textAlign: "center", mb: 1, fontWeight: 700}}>Добавить новую задачу </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 300, mx: "auto" }}
      >
        
        <TextField
          color="primary"
          label="Введите задачу"
          variant="standard"
          sx={{ width: "100%" }}
          value={newTaskText}
          onInput={(e) => setNewTaskText((e.target as HTMLInputElement).value)}
          
        />
        <Button
          variant="outlined"
          sx={{ mt: 2, width: "100%" }}
          type="submit"
        >
          Добавить
        </Button>
      </Box>
    </Paper>
  );
}
