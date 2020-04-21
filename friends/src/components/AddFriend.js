import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


class AddFriend extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        userdetails: {
            name: '',
            age: '',
            email: ''
        },
        isLoading: false
    }
}
handleChange = e => {
    this.setState({
        userdetails: {
            ...this.state.userdetails,
            [e.target.name]: e.target.value
        }
    });
};

addFriend = e => {
    e.preventDefault();
    this.setState({
        isLoading: true
    })
    axiosWithAuth()
    .post('http://localhost:5000/api/friends', this.state.userdetails)
    .then(res => {
        this.props.history.push('/friendslist');
        this.setState({
            isLoading: false
    })
})
    .catch(err => console.log({err}));
}


render(){
    return (
        <div>
            {this.setState.isLoading && <p>Loading...</p>}
        <form onSubmit={this.addFriend}>
        <input
            type="text"
            name="name"
            value={this.state.userdetails.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            value={this.state.userdetails.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.userdetails.email}
            onChange={this.handleChange}
          />
          <button>add friend</button>
        </form>
      </div>
    )
}

}

export default AddFriend;