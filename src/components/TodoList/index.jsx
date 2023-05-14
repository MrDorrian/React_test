import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export const TodoList = () => {
  const getArray = useContext(TodoContext);
  const handlerArray = getArray[0].map((e) => <li key={e.id}>{e.text}</li>);
  return <ul>{handlerArray}</ul>;
};
