import './home.css'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

//import Components
import Banner from '../../components/banner/Banner';
import Sidebar from '../../components/sidebar/Sidebar';
import FeaturedProduct from '../../components/featuredProduct/FeaturedProduct';

//import Actions
import { getProducts as listProducts} from '../../redux/actions/productActions'

const Home = () =>{

  const dispatch = useDispatch();
  
  const getProducts = useSelector((state) => state.getProducts);
  const {loading, error, products} = getProducts;

  useEffect(() =>{
    dispatch(listProducts());
  }, [dispatch])

  return (
    <div className='home'>
      <div className="homeTop">
        <Sidebar />
        <Banner />
        <div className="ads">
          <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/116771291_342109780524997_2203136985235497266_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DadzhLfs-cYAX812G5K&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_VRGFFr2AvUBA1PcJGK2gwRWp3t6Ib-T8obdtO8KaVTQ&oe=6245F0A8" alt="" className="ads" />
        </div>
      </div>
      <div className="homeProduct">
        <div className="homeProductTitle"><a href="/">SẢN PHẨM NỔI BẬT</a></div>
        <div className="homeProductItem">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) =>(
              <FeaturedProduct 
                key = {product._id}
                title = {product.title}
                img = {product.img}
                price = {product.price}
                unit = {product.unit}
                qty = {product.qty}
                description = {product.description}
                productId = {product._id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Home