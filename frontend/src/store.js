import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailReducer } from './reducers/orderReducers';
import { productdetailsReducer, productListReducer } from './reducers/productReducers';
import { userRegisterReducer, usersigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin: {
        UserInfo: localStorage.getItem('UserInfo')
        ? JSON.parse(localStorage.getItem('UserInfo'))
        : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : [],
        paymentMethod: 'PayPal',
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productdetailsReducer,
    cart: cartReducer,
    userSignin: usersigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)) );

export default store;