import { List, Paper, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ITask } from "../App";
import TodoItem from "./TodoItem";

interface TodoListProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export default function TodoList({ tasks, setTasks }: TodoListProps) {
  return (
    <Paper elevation={3} sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ px: 2, pt: 2 }}>
        Ваши задачи:
      </Typography>
      <List>
        {tasks.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            removeTask={() =>
              setTasks([...tasks.filter((t) => t.id !== item.id)])
            }
          />
        ))}
      </List>
    </Paper>
  );
}
