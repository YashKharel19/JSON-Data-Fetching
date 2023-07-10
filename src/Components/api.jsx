import { useState, useEffect } from 'react';
import './api.css';

function Api() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData().then(data => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {users.map(user => (
          <div className="card" key={user.id}>
            <img className="avatar" src={`https://robohash.org/${user.id}`} alt="User Avatar" />
            <div className="info">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Api;
