import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import "../../components/Login/Style.css"
import { auth } from '../../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
           .signInWithEmailAndPassword(email, password)
           .then(auth => {
               history.push('/')
           })
           .catch(error  => alert(error.message))
    }
    const register = e  => {
            e.preventDefault();
              auth
                 .createUserWithEmailAndPassword(email, password)
                 .then((auth) => {
                     if (auth) {
                         history.push('/')
                     }
                 })
                 .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
           <Link to="/">
                <img className="logo__img" src="https://media.istockphoto.com/vectors/free-shipping-label-sign-origami-style-banner-vector-illustration-vector-id1202970854" alt="" />
            </Link>
            <div className="container">
               <h1>Sign-In</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                   <h5>Password</h5>
                   <input type='password' value={password} onChange={e => setPassword(e.target.value)} />


                   <button type='submit' onClick={signIn}  className='signin__button'>Sign In</button>
               </form>
               <button onClick={register} className='buton__2'>Create your account</button>
            </div>
        </div>
        
    )
}

export default Login
