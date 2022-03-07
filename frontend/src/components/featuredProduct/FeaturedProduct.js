import './featuredProduct.css';
import { Link } from 'react-router-dom';

const FeaturedProduct = ({productId, title, img, price, description}) =>{
  return (
    <div className='featuredProduct'>
        <img src={img} alt={title}/>
        <div className="product__info">
            <p className="info__name">{title}</p>
            <p className="info__description">
            {description}
            </p>
            <p className="info__price">{price} đ</p>

            <Link to={`/product/${productId}`} className="info__button">
                Xem chi tiết
            </Link>
        </div>
    </div>
  )
}

export default FeaturedProduct
