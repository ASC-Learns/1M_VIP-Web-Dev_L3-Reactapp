const CardComponent = (props) => {
    return (
        <div>
            <img src={props.avatar}></img>
            <div>
                <div className="name">{props.first_name + " " + props.last_name} </div>
                <div className="email">{props.email}</div>
            </div>
        </div>
    )
}

export default CardComponent;