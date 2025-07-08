import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill all fields');
    } else {
      setMessage('Login successful!');
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 10, width: '100%', padding: 8 }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 10, width: '100%', padding: 8 }}
        />
        <br />
        <button type="submit" style={{ padding: 10, width: '100%' }}>
          Login
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
