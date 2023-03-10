import { useEffect, useState } from 'react';
import { User } from './user.model';

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers () {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
    }

    fetchUsers();
  }, []);

  return <div className="UsersList">
    {users.map((user) => <div className="user" key={user.id}>{user.name}</div>)}
  </div>;
}

export default UsersList;