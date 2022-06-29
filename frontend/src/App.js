import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './Screens/CartScreen';
import HOmeScreen from './Screens/HOmeScreen';
import OrderScreen from './Screens/OrderScreen';
import PaymentMethodScreen from './Screens/PaymentMethodScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ShippingAddressScreen from './Screens/ShippingAddressScreen';
import SigninScreen from './Screens/SigninScreen';
 
function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { UserInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
         <Link className="brand" to="/">amazona</Link>
        </div>
        <div>
         <Link to="/cart">Cart
         {cartItems.length > 0 && (
            <span className='badge'>{cartItems.length}</span>
         )}
         </Link>
         {
          UserInfo ? (
            <div className='dropdown'>
            <Link to='#'>
            { UserInfo.name } <i className='fa fa-caret-down'></i>
            </Link>
            <ul className='dropdown-content'>
              <Link to='#signout' onClick={signoutHandler}>
                Sign Out
              </Link>
            </ul>
            </div>
          ) : (
            <Link to='/signin'>Sign In</Link>
          )
         }
        </div>
    </header>
    <main>
      <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/Signin' component={SigninScreen}></Route>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/shipping' component={ShippingAddressScreen}></Route>
      <Route path='/payment' component={PaymentMethodScreen}></Route>
      <Route path='/placeorder' component={PlaceOrderScreen}></Route>
      <Route path='/order/:id' component={OrderScreen}></Route>
      <Route path='/' component={HOmeScreen} exact></Route> 
    </main>
    <footer className="row center">All Right Reserved</footer>
 </div>
 </BrowserRouter>
  );
};

export default App; 
