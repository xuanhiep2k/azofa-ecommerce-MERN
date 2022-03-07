import './cartItem.css';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const CartItem = () =>{
  return (
    <div className='cartItem'>
        <div className="cartitem__image">
            <img src='https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/122145096_402515241151117_560129999522686289_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-kWwRgEWe1EAX8YUgB4&tn=kINUsOAA-IoCOhgK&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_scaGc8DS0K2nzC0rcfsQwtfjyBH3uXjZ5rQNfmKhWEg&oe=62494343' alt='' />
        </div>

        <Link to={`/product/111`} className="cartitem__name">
            <p>Nutri Canxi Nano</p>
        </Link>

        <p className="cartitem__unit">Tuýp</p>
        <p className="cartitem__price">13.000d</p>

        <p className="cartitem__qty">60</p>
        {/* <select className="cartitem__select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
            {[...Array(item.countInStock).keys()].map((x) =>(
            <option key={x+1} value={x+1}>
            {x+1}
            </option>
            ))}
        </select> */}

        <button className="cartitem__deleteBtn" >
            <DeleteOutlineIcon />
        </button>
    </div>
  )
}

export default CartItem
