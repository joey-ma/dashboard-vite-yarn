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

  const displayTooltip = !state.showPassword ? "Warning: this will display your password on screen." : "Release click to hide password";

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

  // const handleMouseOverPassword = (event) => {
  //   event.preventDefault();
  //   const displayText = state.showPassword ? "Show password as plain text. Warning: this will display your password on the screen." : "Hide password";
  //   setState(values => ({ ...values, showPassword: true }));
  // }

  // const handleMouseOutPassword = (event) => {
  //   event.preventDefault();
  //   const displayText = state.showPassword ? "Show password as plain text. Warning: this will display your password on the screen." : "Hide password";
  //   setState(values => ({ ...values, showPassword: false }));
  // }

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

  // console.log('in component', state);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="container">
        <label htmlFor="current-username"><b>Username</b></label>
        <input type="text" id="current-username" placeholder="Enter username (email OK)" name="current-username" onChange={handleChange} required autoFocus />
        <label htmlFor="current-password"><b>Password</b></label>
        <div className='password-container'>
          <input
            type={state.showPassword ? "text" : "password"}
            id="current-password" placeholder="Enter password" name="current-password"
            onChange={handleChange}
            // * mouse over to show password feature *
            // * test user preference first*
            // onMouseOver={(e) => {
            //   e.preventDefault();
            //   setState(values => ({ ...values, showPassword: true }));
            // }
            // }
            // onMouseOut={(e) => {
            //   e.preventDefault();
            //   setState(values => ({ ...values, showPassword: false }));
            // }}
            required
          />
          {/* Eye Icon */}
          <button
            className='mui tooltip'
            type='button'
            // onClick={handleClickShowPassword}
            onKeyDown={(e) => {
              e.preventDefault();
              if (e.code === 'Space' || e.code === 'Enter') setState(values => ({ ...values, showPassword: true }));
              if (e.code === 'Tab') document.getElementById('login').focus();
              if (e.shiftKey && e.code === 'Tab') document.getElementById('current-password').focus();
            }}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.code === 'Space' || e.code === 'Enter') setState(values => ({ ...values, showPassword: false }))
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              setState(values => ({ ...values, showPassword: true }));
            }}
            onMouseUp={(e) => {
              e.preventDefault();
              setState(values => ({ ...values, showPassword: false }));
            }}
          >
            {state.showPassword ?
              <Visibility className="tooltip" aria-label="Hide password" /> :
              <VisibilityOff
                className="tooltip"
                aria-label="Show password as plain text. Warning: this will display your password on the screen." />}

            <span className="tooltiptext">
              {displayTooltip}
            </span>
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
    </form >
  )
}

export default LoginForm

