import { useState } from "react";

const withAuthenticationPermission = (OriginalComponent) => {
    const NewComponent = (props) => {
        const {requiredRoles, userRole} = {...props};
        return (requiredRoles.includes(userRole) ?
                <OriginalComponent {...props}/>
                : <div>You do not have permission to view</div>)
        
    }

    return NewComponent;
}

export default withAuthenticationPermission;