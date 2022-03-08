import './cartItem.css';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useForm } from 'react-hook-form';

const CartItem = ({item, amountChangeHandle, removeFromCartHandle}) =>{

    const {
        register,
        formState: { errors }
      } = useForm();

  return (
    <div className='cartItem'>
        <div className="cartitem__image">
            <img src={item.img} alt={item.title} />
        </div>

        <Link to={`/product/${item.product}`} className="cartitem__name">
            <p>{item.title}</p>
        </Link>

        <p className="cartitem__unit">{item.unit}</p>
        <p className="cartitem__price">{item.price} đ</p>

        <p className="cartitem__qty">
            <span>
                <input 
                {...register("qty", {
                required: true,
                valueAsNumber: true
                })} 
                type="number" value={item.qty} onChange={(e) => amountChangeHandle(item.product, e.target.value)}/>
                {errors?.qty?.type === "required" && <a>Vui lòng nhập số lượng sản phẩm</a>}
            </span>
        </p>

        <button className="cartitem__deleteBtn" onClick={() => removeFromCartHandle(item.product)}>
            <DeleteOutlineIcon />
        </button>
    </div>
  )
}

export default CartItem
