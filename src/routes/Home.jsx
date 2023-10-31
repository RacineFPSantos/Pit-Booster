import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import { MessageButton } from "../components/MessageButton";

const Home = ({ onSubmit, tasks, onDelete }) => {
  return (
    <>
      <h1>Você está na HOME</h1>

      <MessageButton />

      <TaskForm onSubmit={onSubmit} />
      <TaskList tasks={tasks} onDelete={onDelete} />
    </>
  );
};

export default Home;
