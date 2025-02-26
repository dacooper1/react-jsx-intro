const App = () => {
  return (
    <Person 
        name="dejah"
        age= {25}
        hobbies= {["football", "cycling", "rockclimbing"]}
    />
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

