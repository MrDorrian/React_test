import React, { useState } from 'react';
import styles from './todo.module.scss';
import { TodoContext } from '../../context/TodoContext';
import { TodoList } from '../../components/TodoList';
import { TodoInput } from '../../components/TodoInput';

const initialState = [
  {
    id: Date.now(),
    text: 'First TODO',
    isSelected: false,
    createdAt: new Date(),
  },
];

export const TodoPage = () => {
  const todoListArray = useState(initialState);
  return (
    <TodoContext.Provider value={todoListArray}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <span>TODO List</span>
        </div>
        <div className={styles.mainContainer}>
          <TodoList />
          <TodoInput />
        </div>
      </div>
    </TodoContext.Provider>
  );
};
