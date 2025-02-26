const App = () => {
    return (
        <div>
            <FirstComp />
            <NamedComp name="Dejah" />
        </div>  
    )
}

ReactDOM.render(<App />, document.getElementById("root"))