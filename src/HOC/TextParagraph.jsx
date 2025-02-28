import withAuthenticationPermission from "../AuthHOC/withAuthenticationPermission";
import withHovering from "./withHovering";

const TextParagraph = ({text, isHovering}) => {
    const hoverStyle = {
        backgroundColor: "blue"
    }
    return (
        <>
            <p style={isHovering ? hoverStyle : null} >{text}</p>
        </>
    )
}

export default TextParagraph;