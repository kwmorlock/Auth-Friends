import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        creditials: {
            username: '',
            password: ''
        }
    }
handleChange = e => {
    this.setState({
        creditials: {
            ...this.state.creditials,
            [e.target.name]: e.target.value
        }
    });
};

login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('./api/login', this.state.creditials)
    .then(rest => {
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        this.props.history.push('/protected');
    })
    .catch(err => console.log({err}));
}


render(){
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
          <button>Log in</button>
        </form>
      </div>
    )
}

}