import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseapp} from '../firebase';


class SignUp extends  Component{

constructor(props)
  {super(props);
    this.state={
      email:'',
      password: '',
      error:{
        message: ''
      }
    }
  }

  signup(){
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseapp.auth().createUserWithEmailAndPassword(email,password)
    //.catch(error=>{console.log('error', error);
    .catch(error=>{
      this.setState({error})
  })
  }

  render() {
    return(
      <div className="form-inline" style={{margin: '5px'}}>
        <h1>SignUp</h1>
        <div className='form-group'>
        <input className="form-control"
          type="text"
          style={{marginRight: '5px'}}
          placeholder="email"
          onChange={event =>this.setState({email: event.target.value})}
          />
          <input className="form-control"
          type="password"
          placeholder="password"
          style={{marginRight:'5px'}}
          onChange={event =>this.setState({password: event.target.value})}
          />
          <button className="btn btn-primary"
            type="button"
            onClick={()=>this.signup()}
            >Sign Up</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to="/signin">Already a user? Sign in instead</Link></div>
        </div>
    )
  }
}

export default SignUp;
