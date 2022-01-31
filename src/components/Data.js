import React from "react";
import { Typography } from "@mui/material";

const Data = ({ageData,genderData,nationData}) => {


  const header = {
    paddingTop:'10px',
    paddingBottom:'10px'
}
  const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
  console.log(ageData,nationData,genderData)
  if (ageData.count!=0&&genderData.count!=0) {
    return (
      <div>
        <Typography variant="h4" component="h3" style={header}>Age Predictor</Typography>
        <Typography variant="h5" component="h4">We think that {ageData.name} is {ageData.age}</Typography>
        <Typography variant="h4" component="h3" style={header}>Gender Predictor</Typography>
        <Typography variant="h5" component="h4">We are {genderData.probability*100}% sure that {genderData.name} is {genderData.gender}</Typography>
        <Typography variant="h4" component="h3" style={header}>Nation Predictor</Typography>
        <Typography variant="h5" component="h4">We think that {nationData.name} is from:</Typography>
        {nationData.country.map(country => <Typography key={country.country_id}>{regionNames.of(country.country_id)} {Math.round(country.probability*10000)/100}%</Typography>)}

      </div>
    )
  } else{
    return (
      <h1>Invalid name!</h1>
    )
  }
}
export default Data