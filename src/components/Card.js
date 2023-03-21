
const Card = ({id, name, onClick}) => {
    return <div className="card" id={id} onClick={onClick}>{name}</div>
}

export default Card