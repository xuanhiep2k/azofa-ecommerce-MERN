import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';

export const addToCart = (id, qty) => async(dispatch, getState) =>{
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            title: data.title,
            img: data.img,
            price: data.price,
            unit: data.unit,
            description: data.description,
            desDetails: data.desDetails,
            qty
        }
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) =>{
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}