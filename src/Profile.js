import React, { Component } from 'react';
import UserHome from './UserHome.js';
import axios from 'axios';
import '../node_modules/react-vis/dist/style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        budget: {}
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('mernToken')
    console.log('getting budget info', token)
    axios.post('http://localhost:3000/budget', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => {
      this.setState({budget: res.data})
    })
  }

  render() {
    if(this.props.user){
      return (
          <div>
            <UserHome budget={this.state.budget} user={this.props.user}/>

          </div>
        );
    }
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
