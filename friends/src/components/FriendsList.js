import React from 'react';


import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
 
    axiosWithAuth()
      .get('/api/data')
      .then(res => {
        this.setState({
            FriendsList: res.data.data.filter
        });
      })
      .catch(err => console.log({ err }));
  };

  formatData = () => {
  
  };

//   render() {
//     const friendsList = this.formatData();
// }
}

export default FriendsList;