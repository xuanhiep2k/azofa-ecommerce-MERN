import './product.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//import Slider
import { productSlider } from '../../dummyData';

//import Actions
import { addToCart } from '../../redux/actions/cartActions';

//import Validator
import { useForm } from 'react-hook-form';

const Product = ({productId, title, img, price, unit, qty, description}) =>{

  const dispatch = useDispatch();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const addToCartHandle = () =>{
    dispatch(addToCart(productId, amount));
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () =>{
    navigate('/cart');
  }

  const user = JSON.parse(localStorage.getItem('authToken'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='product'>
        <div className="productscreen__left">
          <div className="left__image">
            <Slider {...productSlider}>
              <div className="">
                  <img className='bannerImg' src={img} alt={title} />
              </div>
              <div className="">
                  <img className='bannerImg' src={img} alt={title} />
              </div>
            </Slider>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="left__info">
            <p className="left__name">{title}</p>
            <p>Giá: {price} đ</p>
            <p>Mô tả: {description}</p>
          </div>
          <div className="right__info">
            <p>
              Số lượng:
              <span>
              
                <input 
                {...register("qty", {
                  required: true,
                  valueAsNumber: true
                })} 
              type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
              {errors?.qty?.type === "required" && <a>Vui lòng nhập số lượng sản phẩm</a>}
              </span>
            </p>
            <p>
              Đơn vị:
              <span>
                {unit}
              </span>
            </p>
            <p>
              Số lượng còn:
              <span>{qty}</span>
            </p>
              {
              user ? <>
                <p>
                  <button type="submit" onClick={addToCartHandle}>
                    Thêm vào giỏ hàng
                  </button>
                </p>
              </> : <>
                < div className='text-noLogin'>
                  <span>Bạn phải đăng nhập để đặt hàng.</span>
                  <Link to='/login'>Đăng nhập ngay</Link>
                </div>
              </>
              }
          </div>
        </div>
      </div>
    </form>
  )
}

export default Product