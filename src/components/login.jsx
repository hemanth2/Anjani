import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fbconfig';
import { useHistory } from 'react-router-dom';

const Login = (params) => {
  const queryParameters = new URLSearchParams(window.location.search)
  const type = queryParameters.get("id")
  const navigate = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setEror] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate.push('/plots?id='+type);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setEror(errorCode +' '+ errorMessage);
      });
  };

  return (
    <>
      <div style={{ padding: '5rem' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <center
            style={{
              border: '1px Solid',
              margin: 'auto',
              width :'15rem'
            }}
          >
            <br />
            <p> Anjani Putra </p>
            <form>
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  style={{ padding: '10px', margin: '1rem', width: '12rem',border:'solid 1px' }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  style={{ padding: '10px', margin: '1rem', width: '12rem' ,border:'solid 1px'}}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  type="submit"
                  value="LOGIN"
                  style={{
                    width: '12rem',
                    padding: '.5rem',
                    color: 'white',
                    backgroundColor: '#4CAF50',
                  }}
                  onClick={onLogin}
                />
              </div>
              <br />
              <p style={{color:'red'}}>{error}</p>
            </form>
          </center>
        </div>
      </div>
    </>
  );
};

export default Login;
