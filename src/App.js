import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {

  const [users, setUsers] = useState([])
  const [changeable, setChangeable] = useState(true)

  useEffect(function() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then(res => res.json())
        .then(data => setUsers(data))
}, [changeable])

console.log(users)    

  let elements = users.map(user => {
    return <Card {...user} /> 
  })

  return (
    <div className="grid justify-center gap-4">
      <button onClick={() => setChangeable(prevChangeable => !prevChangeable)} className="bg-red-500 text-white text-xl font-bold py-2 px-4 border rounded-md">Fetch Random</button>
      <div className="grid grid-cols-2 bg-[#E1F6DC] p-4 gap-8">
        {elements}
      </div>
    </div>
  );
}

export default App;