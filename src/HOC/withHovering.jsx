import { useState } from "react";
const withHovering = (OriginalComponent) => {
    return (props) => {
        const [isHovering, setHovered] = useState(false);
        const handleMouseLeave = () => {
            setHovered(false);
        }
        const handleMouseEnter = () => {
            setHovered(true);
        }
        return (
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <OriginalComponent isHovering={isHovering} {...props} />
            </div>
        )
    }
}

export default withHovering;