const NamedComp = (props) => {
    return <p> My name is {props.name}</p>
}

ReactDOM.render(<NamedComp />, document.getElementById("root"))