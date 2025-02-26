const Tweet = (props) => {
    return (
        <div className="tweet">
            <h1 className="user"> {props.username} </h1>
            <h2 className="name"> {props.name} </h2>
            <p className="date"> <b>{props.date}</b> </p>
            <p className="message"> {props.message} </p>
        </div>
    )
}