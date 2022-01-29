import React, {useEffect, useState} from "react";
import SubmitName from "./components/SubmitName"
import axios from "axios"
import Data from "./components/Data"
const App = () => {
  const handleSubmit = (event) => {
    console.log(`Submitted ${newName}`)
    event.preventDefault()
    setShowData(newName)
    setNewName("")
  }
  const [newName, setNewName] = useState("")
  const [showData,setShowData] = useState(null)
  if(showData) {
    return (
      <div>
        <SubmitName name={newName} onNameChange={(event) => setNewName(event.target.value)} onSubmit={event => handleSubmit(event)}/>
        <Data showData={showData}/>
      </div>
    ) 
  } else {
    return (
      <div>
        <SubmitName name={newName} onNameChange={(event) => setNewName(event.target.value)} onSubmit={event => handleSubmit(event)}/>
      </div>
    )
  }
}

export default App;
