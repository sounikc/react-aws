import withStyles from "./withStyles"
const Button = ({type, style, handleAlert}) => {
    return (
        <button type={type} style={style} onClick= {handleAlert}>Click Here</button>
    )
}
const StylishButton = withStyles(Button);

export default StylishButton;