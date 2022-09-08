import { useState } from 'react';

// import IconButton from "@material-ui/core/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import './LoginForm.css';

const test = {
  username: 'test',
  password: 'test'
}
const LoginForm = ({ setLogin, setError }) => {

  const [state, setState] = useState({
    'current-username': '',
    'current-password': '',
    showPassword: false,
    remembered: true,
    submitted: false,
  });

  const [isHoveringShowPassword, setIsHoveringShowPassword] = useState(false);

  const cancelLogin = (event) => {
    event.preventDefault();

    handleChange({ target: { name: { 'current-username': '' } } })
    handleChange({ target: { name: { 'current-password': '' } } })

    setState(values => ({
      ...values,
      'current-username': '',
      'current-password': '',
    }));
    // setError("cancelled");
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const loginButton = document.getElementById('login');
    console.log(loginButton.textContent)
    if (loginButton.textContent === 'No match found') {
      loginButton.textContent = 'Login'
      setError("")
    }
    setState(values => ({ ...values, [name]: value }));
  }

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setState(values => ({ ...values, showPassword: !state.showPassword }));
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseOverPassword = (event) => {
    event.preventDefault();
    const displayText = state.showPassword ? "Show password as plain text. Warning: this will display your password on the screen." : "Hide password";

  }

  const handleMouseOutPassword = (event) => {
    event.preventDefault();
    const displayText = state.showPassword ? "Show password as plain text. Warning: this will display your password on the screen." : "Hide password";
    console.dir(event.target);

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginButton = document.getElementById('login')

    // validate data and provide feedback responding to user input 
    // display logging in, no match found, or login failed if error occurred
    if (state['current-username'] === test.username &&
      state['current-password'] === test.password
    ) {
      // submit username & password in current state to database
      setState(values => ({ ...values, submitted: !state.submitted }))
      loginButton.disabled = true;
      loginButton.className += ' submitted';
      loginButton.textContent = 'Logging In...';
      console.log('username OK, password OK')
      setLogin(true)
    } else {
      loginButton.textContent = 'No match found';
      console.log('no match found for entered username and password');
      setError("no match found")
    }



  }

  console.log('in component', state);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="container">
        <label htmlFor="current-username"><b>Username</b></label>
        <input type="text" id="current-username" placeholder="Enter username (can be also be your email!)" name="current-username" onChange={handleChange} required />
        <label htmlFor="current-password"><b>Password</b></label>
        <div className='password-container'>
          <input type={state.showPassword ? "text" : "password"} id="current-password" placeholder="Enter password" name="current-password" onChange={handleChange} required />
          <button
            className='mui'
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            onMouseOver={handleMouseOverPassword}
          >
            {state.showPassword ? <Visibility aria-label="Hide password" /> : <VisibilityOff aria-label="Show password as plain text. Warning: this will display your password on the screen." />}
          </button>
        </div>
        <button id="login" type="submit">Login</button>

        <label className="checkbox-container"> Remember Me
          <input type="checkbox" name="remembered" checked={state.remembered} onChange={handleChange} />
          <span className="check-mark" ></span>
        </label>
      </div>

      <div className="container more-options" style={{ backgroundColor: 'darkgray' }}>
        <button type="button" className="cancel-button" onClick={cancelLogin}>Cancel</button>
        <span className="psw"><a href="#">Forgot password?</a></span>
      </div>
    </form>
  )
}

export default LoginForm

