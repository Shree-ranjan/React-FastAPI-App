import { useEffect, useState } from "react";
import VaccineData from "./components/VaccineData.jsx";

const API = "http://127.0.0.1:8000/vaccines";

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
            <th>Manufacture</th>
          </tr>
        </thead>
        <tbody>
          <VaccineData users={users} />
        </tbody>
      </table>
    </>
  );
};

export default App;
