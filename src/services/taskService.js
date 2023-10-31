let tasks = [];

export const getAllTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  tasks = [ ...tasks, task];
};

export const deleteTask = ( taskId ) => {
  tasks = tasks.filter((task) => task.id !== taskId);
};