import './cartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

//import Componrnts
import CartItem from '../../components/cartItem/CartItem';

//import Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const CartScreen = () =>{

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const amountChangeHandle = (id, amount) =>{
    dispatch(addToCart(id, amount));
  }

  const removeFromCartHandle = (id) =>{
    dispatch(removeFromCart(id));
  }

  const getCartCount = () =>{
    return cartItems
    .reduce((qty, item) => Number(item.qty) + qty, 0);
  }

  const getCartSubTotal = () =>{
    return cartItems
    .reduce((price, item) => price + item.price * item.qty, 0)
    .toFixed(0)
    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const {
    handleSubmit
  } = useForm();

  const onSubmit = () =>{
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='cartScreen'>
        <div className="cartscreen__left">
        <h2>GIỎ HÀNG</h2>
        {cartItems.length === 0 ? (
          <div>Giỏ hàng đang trống <Link to='/'>Quay trở lại</Link></div>
        ) : cartItems.map(item =>(
          <CartItem
          item={item} amountChangeHandle={amountChangeHandle} removeFromCartHandle={removeFromCartHandle}
          />
        ))}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Tổng ({getCartCount()}) sản phẩm</p>
            <p>{getCartSubTotal()} đ</p>
          </div>
          <div>
            <button type="submit">Tiến hành đặt hàng</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CartScreen