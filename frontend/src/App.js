import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"
function App() {
  const [name, setName] = useState()

  const getData = async() =>{
    const response = await axios.get("http://localhost:5000/")
    console.log(response)
    setName(response?.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
     {name}
    </div>
  );
}

export default App;
