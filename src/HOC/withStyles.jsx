const withStyles = (OriginalComponent) => {
    const NewComponent = (props) => {
        const buttonStyle = {
            color: 'red'
        }

        return <OriginalComponent style = {buttonStyle} handleAlert = {() => console.log(1)} {...props}>{props.children}</OriginalComponent>
    }

    return NewComponent;
}

export default withStyles;