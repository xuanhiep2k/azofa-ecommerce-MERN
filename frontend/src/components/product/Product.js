import './product.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { productSlider } from '../../dummyData';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';



const Product = ({title, img, price, unit, qty, description}) =>{

  const navigate = useNavigate();

  const addToCartHandle = () =>{
    navigate('/cart');
  }

  return (
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
            Giá:
            <span>{price} đ</span>
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
          <p>
            <button type="button" onClick={addToCartHandle}>
              Thêm vào giỏ hàng
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Product