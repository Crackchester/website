import React from 'react';
import Spinner from '../spinner/Spinner';
import { sha256 } from 'js-sha256';
import './DummyLogin.scss';
import { Navigate } from "react-router-dom";

const AUTH_USERNAME = "d2653ff7cbb2d8ff129ac27ef5781ce68b2558c41a74af1f2ddca635cbeef07d"
const AUTH_PASSWORD = "f14d20f1e6b07f1162b183d34b1af77c9d578469a771b0a40de5e22a8a644143"

class DummyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      notify: false,
      login: false
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
      if (sha256(this.state.username.toLowerCase()) === AUTH_USERNAME && sha256(this.state.password) === AUTH_PASSWORD) {
        this.setState({ notify: "You have successfully authenticated! ( ͡° ͜ʖ ͡°)" });
        this.setState({ login: true })
      } else {
        this.setState({ notify: "Incorrect username or password!" });
      }
      // console.log(sha256(this.state.username))
      // console.log(sha256(this.state.password))
      
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  render() {
    // console.log(sha256(AUTH_USERNAME))
    // console.log(sha256(AUTH_PASSWORD))

    return (
      <React.Fragment>
        {this.state.login && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <section id="dummyLogin">
          <div className="container">
            <h1>Authenticate</h1>
            <p>You must be an authenticated user to access this page. Please login below.</p>
            <span>This is a demo page.</span>
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

export default DummyLogin;