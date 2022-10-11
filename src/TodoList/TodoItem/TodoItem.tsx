import { ListItem, Checkbox, Typography, Fade } from "@mui/material";
import { useState } from "react";
import { ITask } from "../../App";

interface TodoItemProps {
  item: ITask;
  removeTask: () => void;
}

export default function TodoItem({ item, removeTask }: TodoItemProps) {
  const [isVisible, setIsVisible] = useState(true);
  const handleChange = () => {
    setIsVisible(false);
    setTimeout(() => {
      removeTask();
    }, 300);
  };

  return (
    <Fade in={isVisible} timeout={300}>
      <ListItem sx={{ overflow: "hidden" }}>
        <Checkbox onChange={(e) => handleChange()} />
        <Typography variant="body1">{item.text}</Typography>
      </ListItem>
    </Fade>
  );
}
