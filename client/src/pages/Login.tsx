import { useState, type FormEvent, type ChangeEvent} from 'react';
import "../styling/Login.css"; 
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'; // Import the login mutation

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      if (data && data.login) {
        Auth.login(data.login.token);
      } else {
        console.error("Invalid credentials");
      }
    } catch (e) {
      console.error(e);
    }

    setFormState({ email: '', password: '' });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome to LMS</h2>
        {data && data.login ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                className="login-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                className="login-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="login-button">Login</button>
            <p style={{color: "white", margin: 20}}> Don't have an account? </p> <Link to="/signup" style={{color: "white"}}>Sign Up Here!</Link>
          </form>
        )}

        {error && (
          <div className="error-message">
            {error.message}
          </div>
        )}        
      </div>
    </div>
  );
};

export default Login;

