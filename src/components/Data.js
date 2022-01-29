
import axios from "axios";
import React, {useEffect, useState} from "react";
const Data = ({showData,ageData,genderData,nationData}) => {
  // const [ageData, setAgeData] = useState("")
  // const [genderData, setGenderData] = useState("")
  // const [nationData, setNationData] = useState("")
  const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  console.log(ageData,nationData,genderData)
  if (ageData.count!=0&&genderData.count!=0) {
    return (
      <div>
        <h1>Age Predictor</h1>
        <h2>We think that {ageData.name} is {ageData.age}</h2>
        <h1>Gender Predictor</h1>
        <h2>We are {genderData.probability*100}% sure that {genderData.name} is {genderData.gender}</h2>
        <h1>Nation Predictor</h1>
        <h2>We think that {nationData.name} is from:</h2>
        <ul>
          {nationData.country.map(country => <li key={country.country_id} >{regionNames.of(country.country_id)} {Math.round(country.probability*10000)/100}%</li>)}
        </ul>
      </div>
    )
  } else {
    return (
      <h1>Invalid name!</h1>
    )
  }
}
export default Data