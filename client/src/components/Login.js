import React from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import { ClipLoader } from 'react-spinners'

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    loading: false
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            <ClipLoader
              size={5}
              loading={this.state.loading}
            />Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;