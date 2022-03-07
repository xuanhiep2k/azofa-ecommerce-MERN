import CartItem from '../../components/cartItem/CartItem';
import './cartScreen.css';

const CartScreen = () =>{
  return (
    <div className='cartScreen'>
      <div className="cartscreen__left">
      <h2>GIỎ HÀNG</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>13.000 đ</p>
        </div>
        <div>
          <button>Tiến hành đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default CartScreen