import {Button, TextField, Typography} from '@mui/material';
const SubmitName = ({name,onNameChange,onSubmit}) => {

  const nameInput = {
    marginTop:'25px'
  }
  const button = {
    marginTop:'10px',
    marginBottom:'10px'
  }
  
  const title = {
    marginTop:'10px'
  }

  return (
    <div>
      <Typography variant="h4" component="h2" style={title} >Enter your name here:</Typography>
      <form onSubmit={(event) => onSubmit(event)}>
          <TextField id="outlined-basic" label="Enter your name" variant="outlined" style={nameInput} value={name} onChange={event => onNameChange(event)}/>
          <br/>
          <Button variant="contained" type="submit" className="button" style={button}>Go</Button>
      </form>
    </div>
  )
}
export default SubmitName