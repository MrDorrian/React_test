import { useData } from 'hooks/userList';
import { getUsers } from 'api/getUsers';
import { useMouse } from "hooks/useMouse";

export const UserList = () => {
  const { data: users, error, isFetching } = useData(getUsers);
  const coordinates = useMouse();
  return (
    <div>
      <h1>{JSON.stringify(coordinates)}</h1>
      <ol>
        {isFetching && <li>Loading...</li>}
        {users.map((u, i) => {
          return <li key={u.login.uuid}>{JSON.stringify(u)}</li>;
        })}
      </ol>
    </div>
  );
};
