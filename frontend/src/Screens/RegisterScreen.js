import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const userRegister = useSelector(state => state.userRegister);
    const { UserInfo, loading, error } = userRegister;

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert ('Password and Confrim Password are not match')
        } 
        else {
            dispatch(register(name, email, password))
        }
        dispatch(register(name, email, password))
    }

    useEffect(() => {
        if(UserInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, UserInfo]
)
  return (
    <div>
        <form className='form' onSubmit={submitHandler}>
            <div>
                <h1>Create Account</h1>
            </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant='danger'>{error}</MessageBox>}
            <div>
                <label htmlFor='name'>Name</label>
                <input 
                     type='text' 
                     id='name' 
                     placeholder='Enter Name'
                     required
                     onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor='email'>Email Address</label>
                <input 
                     type='email' 
                     id='email' 
                     placeholder='Enter Email'
                     required
                     onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                     type='password' 
                     id='password' 
                     placeholder='Enter password'
                     required
                     onChange={(e) => setpassword(e.target.value)}
                ></input>
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input 
                     type='password' 
                     id='confirmPassword' 
                     placeholder='Enter Confirm Password'
                     required
                     onChange={(e) => setconfirmPassword(e.target.value)}
                ></input>
            </div>
            <div>
                <label />
                <button className='primary' type='Submit'>
                    Register
                </button>
            </div>
            <div>
                <label />
                <div>
                    Already have an Account? 
                    <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                </div>
            </div>
        </form>
    </div>
  )
}
