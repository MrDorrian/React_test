import React, { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCESS': {
      const {
        data: { users, message },
      } = action;
      const usersMap = new Map();
      users.forEach((user) => {
        usersMap.set(user.id, user);
      });
      return state;
    }
    default: {
      return state;
    }
  }
};

export const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    message: [],
    users: [],
  });

  useEffect(() => {
    fetch('/chat.json')
      .then((data) => data.json())
      .then((data) =>
        dispatch({
          data,
          type: 'DATA_LOAD_SUCCESS',
        })
      );
  });

  return (
    <div>
      {state.message.map((m) => {
        return <li key={m.id}>{JSON.stringify(m)}</li>;
      })}
    </div>
  );
};
