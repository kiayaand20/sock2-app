import './Sock.css';
import { Link } from 'react-router-dom'

export default function Sock(props) {
  return (
    <>
        <Link className="sock" to={`/socks/${props._id}`}>
            <img className="sock-image" src={props.imgURL} alt={props.name} />
            <div className="sock-name">{props.name}</div>
            <div className="price">{`$${props.price}`}</div>
        </Link>
    </>
  )
}
