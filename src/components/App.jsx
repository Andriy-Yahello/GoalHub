import React, {Component} from 'react';

import {connect} from 'react-redux';

import {firebaseapp} from '../firebase';

import AddGoal from './addgoal';

import GoalList from './GoalList';

import CompleteGoalList from './completegoalList';



class App extends  Component{

  signout(){
    firebaseapp.auth().signOut();
  }

  render() {
    return(
      <div style={{margin: '5px'}}>
        <h3>Goal Hub</h3>
        <AddGoal />
        <hr />
        <h4>Golas</h4>
        <GoalList />
        <hr />
        <h4>Completed Goals List</h4>
        <CompleteGoalList />
        <hr />
      <button className="btn btn-danger"
        onClick={()=>this.signout()}
        >Sign Out</button></div>
    )
  }
}

function mapStateToProps(state){
  //console.log('state', state);
  return {}
}

export default connect(mapStateToProps, null)(App);

//export default App;
