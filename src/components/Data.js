
import axios from "axios";
import React, {useEffect, useState} from "react";
const Data = ({showData}) => {
  const [ageData, setAgeData] = useState("")
  const [genderData, setGenderData] = useState("")
  const [nationData, setNationData] = useState("")
  const [loaded,setLoaded] = useState(false)
  const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  const hook = () => {
    console.log("Loading Data")
    axios
      .get("https://api.agify.io?name="+showData)
      .then(response => setAgeData(response.data))
    axios
      .get("https://api.genderize.io?name="+showData)
      .then(response => setGenderData(response.data))
    axios
      .get("https://api.nationalize.io?name="+showData)
      .then(response => {
        setNationData(response.data)
        setLoaded(true)
      })
  }
     useEffect(hook,[])
  if (loaded) {
    return (
      <div>
        <h1>Age Predictor</h1>
        <h2>We think that {ageData.name} is {ageData.age}</h2>
        <h1>Gender Predictor</h1>
        <h2>We are {genderData.probability*100}% sure that {genderData.name} is {genderData.gender}</h2>
        <h1>Nation Predictor</h1>
        <h2>We think that {nationData.name} is from:</h2>
        <ul>{nationData.country.map(country => <li key={country.country_id} >{regionNames.of(country.country_id)} {Math.round(country.probability*10000)/100}%</li>)}</ul>
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}
export default Data