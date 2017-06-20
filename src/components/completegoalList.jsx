import React, {Component} from 'react';
import { completegoalref} from '../firebase';
import {connect} from 'react-redux';

import {setCompleted} from '../actions';


class  CompleteGoalList extends Component {

  removeAll(){
    completegoalref.set([]);
  }

  componentDidMount(){
    completegoalref.on('value', snap=>{
      let completegoals = [];
      snap.forEach(completeGoal => {
        const{email, title} = completeGoal.val();
        completegoals.push({email, title});
      })

      //console.log('completegoals', completegoals);
      this.props.setCompleted(completegoals);
    })
  }

  render(){
    console.log('this.props.completegoals', this.props.completegoals);
    return(<div>{
      this.props.completegoals.map((completeGoal,  index) =>{
        const {title, email} = completeGoal;
        return(
          <div key={index}>
            <strong>{title}</strong> completed by <em>{email}</em>
          </div>
        )
      })
    }
    <button className="btn btn-success"
      onClick={()=>this.removeAll()}>Remove all</button>
  </div>)
  }

}

function mapStateToProps(state){
  const {completegoals} = state;
  return{
    completegoals
  }
}

export default connect(mapStateToProps, {setCompleted}) (CompleteGoalList);
