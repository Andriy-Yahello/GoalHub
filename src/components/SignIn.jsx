import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseapp} from '../firebase';

class SignIn extends  Component{

constructor(props){
  super(props);
    this.state={
      email: '',
      password: '',
      error:{
        message:''
      }
    }
  }


signin(){
  console.log('this.state', this.state);
  const {email, password} = this.state;
  firebaseapp.auth().signInWithEmailAndPassword(email,password)
  .catch(error=>{
    this.setState({error})
  })
}

  render() {
    return(
      <div className="form-inline" style={{margin: '5px'}}>
        <h1>SignIn</h1>
        <div className="form-group">
        <input className="form-control"
        type="text"
        style={{marginRight:'5px'}}
        placeholder="email"
        onChange={event=>this.setState({email: event.target.value})}
      />
      <input className="form-control"
        type="password"
        placeholder="password"
        style={{marginRight:'5px'}}
        onChange={event=>this.setState({password:event.target.value})}
      />
      <button className="btn btn-danger"
        type="button"
        onClick={()=>this.signin()}
        >Sign In</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to="/signup">Sign up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
