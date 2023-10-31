import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    onSubmit({ title });
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button style={{ margin: 8 }}onClick={handleSubmit}>Adicionar Task</button>
    </div>
  );
};

export default TaskForm;
