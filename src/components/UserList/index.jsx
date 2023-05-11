import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/getUsers';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    getUsers()
      .then((data) => {
        const { results } = data;
        setUsers(results);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      })
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <div>
      <ol>
        {users.map((u, i) => {
          return <li key={i}>{JSON.stringify(u)}</li>;
        })}
      </ol>
    </div>
  );
};
