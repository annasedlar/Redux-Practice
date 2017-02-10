import React, { Component } from 'react';
//We need to tie em together! This component (container) needs to know about our redux state? store? 
//so we include the connect method from react-redux (the glue)
import { connect } from 'react-redux'; 

class ReduxStyle extends Component{
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		})
		this.props.students2.map((student, index)=>{
			studentArray.push(<li key={student.name}>{student.name} - {student.seat}</li>)
		})
		return(
			<div>
			{studentArray}
			</div>
		)
	}
}

	function mapStatetoProps(state){
		return{
			//from our master reducer, we have a 'state' object. 
			//inside our state object, we have a property: students
			//we need to set up the state of that object, to the props of this component
			students: state.students,
			//the above will be available as this.props.students
			students2: state.students2
		}
	

};

export default connect(mapStatetoProps)(ReduxStyle); 