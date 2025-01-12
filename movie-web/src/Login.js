
import React, { useState, useRef } from 'react';
import usersData from './users.json';
import './Login.css';

function LoginForm() {
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usersRef = useRef(usersData.users);

  function handleSubmit(event) {
    event.preventDefault();
    const user = usersRef.current.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Successfully logged in');
      // Redirect to another page or perform other actions
    } else {
      alert('Invalid username or password');
    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className='LoginContainer'>
          <div className='login'>
            <label>
              Username:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <div>
            <button type="submit">Đăng nhập</button>
          </div>
        </div>
      </form>


    </div >
  );
}

export default LoginForm;