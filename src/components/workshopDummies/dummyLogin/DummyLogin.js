import React from 'react';
import Spinner from '../spinner/Spinner';
import { sha256 } from 'js-sha256';
import { sha3_256 } from 'js-sha3';
import './DummyLogin.scss';
import { Navigate } from "react-router-dom";

const AUTH_USERNAME = "d2653ff7cbb2d8ff129ac27ef5781ce68b2558c41a74af1f2ddca635cbeef07d"
const AUTH_PASSWORD = "5ba00b46237dcaf3e284a254da1e894c34dee1121fde4a6b2f0cb6887f9962bd"

var data;

// // Fake usernames with default 1234 password
// const AUTH_DNAMES = ["b9dd960c1753459a78115d3cb845a57d924b6877e805b08bd01086ccdf34433c", "0b3659243e3eb91cd2da518ebbad79997209e1284fe70756b3e8b8bc8701ac83", "936f75b65669d11251a7d240d32cb334e2983f3c9aed61110f8ec152301b62bf", "b29e0a70e1e3d07981184c0f2f7d8543fcb87f8043f464a8349b5c6ac63b9baf", "e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605"]
// const AUTH_DPASS = "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"

class DummyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
      notify: false,
      login: false,
      win: false
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
        this.setState({ notify: "You have successfully authenticated! ( ͡° ͜ʖ ͡°) You beat the challenge successfully" });
        this.setState({ win: true })
        data = sha3_256(this.state.password);
      }else {
        this.setState({ notify: "Incorrect username or password!" });
      }
      // console.log(sha256(this.state.username))
      // console.log(sha3_256(this.state.password))
      
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  render() {
    // console.log(sha256(AUTH_USERNAME))
    // console.log(sha256(AUTH_PASSWORD))

    return (
      <React.Fragment>
        {this.state.win && (
          <Navigate to='/win' state={{ data }} replace={true} />
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