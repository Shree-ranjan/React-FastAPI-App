import { useEffect, useState } from "react";
import CenterData from "./components/CenterData.jsx";

const API = "http://127.0.0.1:8000/centers";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <CenterData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
