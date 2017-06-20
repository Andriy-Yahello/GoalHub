import React, {Component} from 'react';
import { connect} from 'react-redux';
import {goalref} from '../firebase';
class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:''
    }
  }

  addgoal(){
    console.log('this', this);
    const {title} = this.state;
    const {email} = this.props.user;
    goalref.push({email, title});
  }

  render(){
    return(
      <div className="form-inline">
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="add a goal"
            style={{marginRight: '5px'}}
            onChange={event=>this.setState({title: event.target.value})}
          />
          <button className="btn btn-success"
            type="button"

            onClick={()=>this.addgoal()}
            >Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  const{user} = state;
  //console.log('sate in addgoal.jsx', state);
  return{
    user
  }
}


export default connect(mapStateToProps, null)(AddGoal);
