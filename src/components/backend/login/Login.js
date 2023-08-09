import React from 'react';
import Spinner from '../../spinner/Spinner';
import { sha3_256 } from 'js-sha3';
import './Login.scss';
import { Navigate } from "react-router-dom";

var data;

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

  async sendGetRequest(username) {
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    const url = 'https://ec2.goodey.co.uk:8443/Accounts/' + username;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    var passhash = ""
    if(data.passhash){
      passhash = data.passhash
    }
    this.setState({"passhash": passhash, "loading": false})
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
      this.sendGetRequest(this.state.username)
      if ((this.state.passhash !== "") && sha3_256(this.state.password) === this.state.passhash) {
        this.setState({ login: true })
        data = [this.state.username, sha3_256(this.state.password)];
      }else {
        this.setState({ notify: "Incorrect username or password!" });
      }
      
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