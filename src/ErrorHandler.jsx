const ErrorHandler = ({ errorMessage }) => {
    const pStyle = {
        color: 'red'
    }
    return (
        <p style={pStyle}>{errorMessage}</p>
    )
}

export default ErrorHandler;