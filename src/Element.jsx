import React from "react";

const Element = ({tag, text}) => {
    return (
        React.createElement(tag,null,text)
    )
}

export default Element;