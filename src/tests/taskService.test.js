import { addTask, deleteTask, getAllTasks } from '../services/taskService';
import { buildTask } from '../builders/taskBuilder';

describe('CRUD Task Service', () => {
   test('should add a task to the task list', () => {
    const task = buildTask('First Task');
    addTask(task);

    const tasks = getAllTasks();
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toEqual(task);
  });
  
  test('should delete a task from the task list', () => {
    const task1 = buildTask('Task 1');
    const task2 = buildTask('Task 2');
    
    addTask(task1);
    addTask(task2);

    const initialTasks = getAllTasks();
    expect(initialTasks).toHaveLength(3);
    
    deleteTask(task1.id);
    const updatedTasks = getAllTasks();

    expect(updatedTasks).toHaveLength(2);
    expect(updatedTasks[1].title).toEqual('Task 2');
  });

  test('should return all tasks from the task list', () => {
    const task3 = buildTask('Task 3');
    const task4 = buildTask('Task 4');
    addTask(task3);
    addTask(task4);

    const tasks = getAllTasks();
    expect(tasks).toHaveLength(4);
    expect(tasks[0].title).toEqual('First Task');
    expect(tasks[tasks.length - 1].title).toEqual('Task 4');
  });
});