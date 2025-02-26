const App = () => {
    return(
        <div className="continer">
            <Tweet 
                username="dcoop"
                name="dejah"
                date={new Date().toDateString()}
                message="This is my first tweet"
            />
            <Tweet 
                username="prisonmike"
                name="micheal scott"
                date={new Date().toDateString()}
                message="From the clink"
            />
            <Tweet 
                username="thetemp"
                name="ryan"
                date={new Date().toDateString()}
                message="The temp agency could have sent me anywhere"
            />                        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);