import { useState } from "react";
import withAuthenticationPermission from "../AuthHOC/withAuthenticationPermission";
import withHovering from "./withHovering";

const TextInput = ({type, isHovering}) => {
    const hoverStyle = {
        backgroundColor: "blue"
    }
    return (
        <><input style={isHovering ? hoverStyle : null} type={type}/></>
    )
}

export default TextInput;