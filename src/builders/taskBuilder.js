let taskId = 1;

export const buildTask = (title) => ({
  id: taskId++,
  title,
})