import './SockCard.css';
import { Link } from 'react-router-dom'

export default function SockCard(props) {
  return (
    <div className="sock-card">
        <Link className="card" to={`/socks/${props._id}`}>
            <img className="sock-card-image" src={props.imgURL} alt={props.name} />
            <h2>{props.name}</h2>
            <h3>${props.price}</h3>
        </Link>
    </div>
  )
}
