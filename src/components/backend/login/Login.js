import React from 'react';
import Spinner from '../../spinner/Spinner';
import { sha256 } from 'js-sha256';
import { sha3_256 } from 'js-sha3';
import './Login.scss';
import { Navigate } from "react-router-dom";

var data;

// Charlie username with default 1234 password
const AUTH_DNAMES = ["b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c"]
const AUTH_DPASS = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      notify: false,
      login: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ notify: false, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      if (AUTH_DNAMES.includes(sha256(this.state.username.toLowerCase())) && sha256(this.state.password) === AUTH_DPASS) {
        this.setState({ notify: "You have successfully authenticated! ( ͡° ͜ʖ ͡°) You beat the challenge successfully" });
        this.setState({ login: true })
        data = sha3_256(this.state.password);
      }else {
        this.setState({ notify: "Incorrect username or password!" });
      }
      console.log(sha256(this.state.username))
      console.log(sha3_256(this.state.password))
      
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  render() {

    return (
      <React.Fragment>
        {this.state.login && (
          <Navigate to='/admin' state={{ data }} replace={true} />
        )}
        <section id="login">
          <div className="container">
            <h1>Authenticate</h1>
            <p>You must be an authenticated user to access this page. Please login below.</p>
          </div>
          <div className="flex-middle container">
            <form onSubmit={this.handleSubmit}>
              <label>Username
                <input type="text" name="username" required minLength={3} maxLength={32} onChange={this.handleChange} />
              </label>
              <label>Password
                <input type="password" name="password" required minLength={3} maxLength={128} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Log In" className="btn" disabled={this.state.loading} />
            </form>
          </div>
          <div className="container">
            <p style={{display: this.state.notify !== false ? 'block' : 'none'}}>{this.state.notify}</p>
            <Spinner isVisible={this.state.loading} />
          </div>
        </section>
      </React.Fragment>     
    )
  }
}

export default Login;