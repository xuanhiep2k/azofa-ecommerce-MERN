import './productScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//import Components
import InfoSidebar from '../../components/infoSidebar/InfoSidebar';
import Sidebar from '../../components/sidebar/Sidebar';
import Product from '../../components/product/Product';
import InfoProduct from '../../components/infoProduct/InfoProduct';

//import Actions
import { getProductDetails } from '../../redux/actions/productActions';

const ProductScreen = () =>{

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const {loading, error, product} = productDetails;
  const { id } = useParams();

  useEffect(() =>{
    if(product && id !== product._id){
      dispatch(getProductDetails(id));
    }
  },[]);

  return(
    <div className='productScreen'>
      <div className="productDetailsLeft">
        <Sidebar />
        <InfoSidebar />
      </div>
      
      <div className="productDetailsRight">
        {loading ? (
          <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
          <>
            <Product
            key = {product._id}
            title = {product.title}
            img = {product.img}
            price = {product.price}
            unit = {product.unit}
            qty = {product.qty}
            description = {product.description}
            productId = {product._id}
            />
            <InfoProduct 
            key = {product._id}
            desDetails = {product.desDetails}
            />
          </>
        )}
      </div>
    </div>
  );
}
export default ProductScreen
