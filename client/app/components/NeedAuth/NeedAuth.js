import React, { Component } from 'react';
import AuthService from '../AuthService/AuthService';
import {withRouter} from "react-router-dom";

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('http://0.0.0.0:8080');
  class AuthWrapped extends Component {
    constructor(props) {
       super(props);
       this.state = {
           user: null
       }
    }

    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.push('/login');
      } else {
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        }catch(err){
          Auth.logout()
          this.props.history.push('/login');
        }
      }
    }
    render() {
      if (this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      }else{
        return null
      }
    }
  }
  return withRouter(AuthWrapped)
}
