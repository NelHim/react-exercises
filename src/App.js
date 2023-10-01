import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange (event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit (event){
    event.preventDefault()
    alert(`Hello ${formData.firstName} ${formData.lastName}!`)
  }


  return (
    <div className="grid justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <input type="text" className="border-solid border-black rounded-md border-2 py-2 px-2" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName}/>
        <input type="text" className="border-solid border-black rounded-md border-2 py-2 px-2"  placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName}/> 
        <button className="bg-red-600 text-white font-bold px-8 py-2 rounded-md">GREET ME</button>
      </form>
    </div>
  );
}

export default App;
