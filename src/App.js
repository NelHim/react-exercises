import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {

  const [users, setUsers] = useState({})
  const [changeable, setChangeable] = useState(true)
  // let changeable = true;

  useEffect(function() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(res => res.json())
        .then(data => setUsers(data))
}, [changeable])

console.log(users)



  return (
    <div className="grid justify-center items-center h-screen">
      <button onClick={() => setChangeable(prevChangeable => !prevChangeable)} className="bg-red-500 text-white text-xl font-bold py-2 px-4 border rounded-md">Fetch Random</button>

    </div>
  );
}

export default App;