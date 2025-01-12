import './App.css';
import LoginForm from './Login.js';
import { useState } from 'react';

function App() {
const [formState, setFormState] = useState('');

const handleLogin = () => {
setFormState('login');
}

return (
<div className="App">
{/* <button onClick={handleLogin}>Đăng nhập</button>
{formState === 'login' && <LoginForm />} */}
<LoginForm />
</div>
);
}
export default App;