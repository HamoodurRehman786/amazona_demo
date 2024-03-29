import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import { 
    ORDER_CREATE_FAIL, 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS} 
    from "../constants/orderConstants"

export const createOrder = (Order) => async (dispatch, getState) => {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: Order})
    try {
        const {userSignin: { UserInfo }}  = getState();
        const { data } = await Axios.post('/api/orders', Order, {
            headers: {
                Authorization: `Bearer ${UserInfo.token}`,
            }
        })
        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.Order})
        dispatch({ type: CART_EMPTY})
        localStorage.removeItem('cartItems')
    } catch(error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        }) 
    }
}

export const detailsOrder = (orderId) => async(dispatch, getState) => {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId});
    const { userSignin: { userInfo }} = getState()
    try {
        const { data } = await Axios.get(`/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}`}
        })
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data})
    } catch (error) {
        const message =   error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        dispatch ({ type: ORDER_DETAILS_FAIL, payload: message});
    }
}