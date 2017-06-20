import React, {Component} from 'react';
import {goalref} from '../firebase';
import {setGoals} from  '../actions';
import {connect} from 'react-redux';
import GoalItem from './GoalItem';


class GoalList extends Component{
componentDidMount(){
  goalref.on('value', snap => {
    let goals = [];
    snap.forEach(goal => {

      const{email, title} = goal.val();
      const serverKey = goal.key;
      //let goalObject = goal.val();
      //console.log('goalObject', goalObject);
      goals.push({email,title, serverKey});
      console.log('goal', goal);
    })
    console.log('goals', goals);
    this.props.setGoals(goals);
  })
}

  render(){
    console.log('this.props.goals', this.props.goals);
    return(
        <div>
          {
            this.props.goals.map((goal, index) => {
            return (
              <GoalItem key={index} goal ={goal} />
              //<div key={index}>{goal.title}</div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  const {goals} = state;
  return{goals}
}

export default connect(mapStateToProps, {setGoals})(GoalList);
