import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders task list correctly', () => {
  const tasks = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];

  render(<TaskList tasks={tasks} onDelete={() => {}} />);

  const taskElements = screen.getAllByRole('listitem');
  
  expect(taskElements).toHaveLength(2);
  expect(taskElements[0]).toHaveTextContent('Task 1');
  expect(taskElements[1]).toHaveTextContent('Task 2');
});