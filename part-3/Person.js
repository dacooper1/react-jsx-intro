const Person = (props) => {
    const text = props.age < 18 ? "you must be 18." : "please go Vote!"
    const maxNameLength = 6
    const hobbiesList = props.hobbies.map((hobby) => <li> {hobby} </li>)

    return (
        <div>
            <p>Learn some information about this person:</p>
            name: {props.name.slice(0,maxNameLength)} <br></br>
            age: {props.age}<br></br>
            hobbies: {hobbiesList}
            {text}
        </div>
    )

}