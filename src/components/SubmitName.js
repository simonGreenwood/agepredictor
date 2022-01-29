const SubmitName = ({name,onNameChange,onSubmit}) => {
    return (
        <div>
            <h1>Enter your name here:</h1>
            <form onSubmit={(event) => onSubmit(event)}>
            <label>
                Name:
                <input type="text" value={name} onChange={event => onNameChange(event)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
}
export default SubmitName