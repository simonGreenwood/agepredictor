import React, {useState} from "react";
import SubmitName from "./components/SubmitName"
import axios from "axios"
import Data from "./components/Data"
import Footer from "./components/Footer"
const App = () => {

  const [newName, setNewName] = useState("")

  const [submitted,setSubmitted] = useState(false)

  const [ageLoaded,setAgeLoaded] = useState(false)
  const [genderLoaded, setGenderLoaded] = useState(false)
  const [nationLoaded, setNationLoaded] = useState(false)

  const [age,setAge] = useState("")
  const [gender,setGender] = useState("")
  const [nation,setNation] = useState("")

  const handleSubmit = (event) => {
    console.log(`Submitted ${newName}`)
    setSubmitted(true)
    event.preventDefault()
    console.log(newName)
    setAgeLoaded(false)
    setGenderLoaded(false)
    setNationLoaded(false)
    getAgeData(newName)
    getGenderData(newName)
    getNationData(newName)
    setNewName("")
  }

  const getAgeData = (name) => {
    return axios
      .get("https://api.agify.io?name="+name)
      .then(response => {
        setAge(response.data)
        setAgeLoaded(true)
        console.log(age)
      })
  }

  const getGenderData = (name) => {
    return axios
    .get("https://api.genderize.io?name="+name)
    .then(response => {
      setGender(response.data)
      setGenderLoaded(true)
      console.log(gender)
    })
  }

  const getNationData = (name) => {
    return axios
      .get("https://api.nationalize.io?name="+name)
      .then(response => {
        setNation(response.data)
        setNationLoaded(true)
        console.log(nation)
      })
  }

  if(submitted){
    if(ageLoaded && genderLoaded && nationLoaded) {
      console.log(age,gender,nation)
      return (
        <div>
          <SubmitName name={newName} onNameChange={(event) => setNewName(event.target.value)} onSubmit={event => handleSubmit(event)}/>
          <Data ageData={age} genderData={gender} nationData={nation}/>
          <Footer/>
        </div>
      ) 
    } else {
      return (
        <div>
          <SubmitName name={newName} onNameChange={(event) => setNewName(event.target.value)} onSubmit={event => handleSubmit(event)}/>
          <h1>Loading Data...</h1>
          <Footer/>
        </div>
      ) 
    }
  } else {
    return (
      <div>
        <SubmitName name={newName} onNameChange={(event) => setNewName(event.target.value)} onSubmit={event => handleSubmit(event)}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
