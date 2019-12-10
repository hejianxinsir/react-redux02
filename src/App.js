import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
	constructor(props){
		super(props)
	}	
	render(){
  	return (
   	 <div className="App">
	 	 	你点击了<span>{this.props.n}</span>次
	 	 	<div>
	 	 		<button onClick={()=>this.props.add1()}>+1</button>
	 	 		<button onClick={()=>this.props.add2()}>+2</button>
	 	 	</div>
   	 </div>
  	);
	}
}

function mapStateToProps(state){
	return {
		n: state.n
	}	
}

function mapDispatchToProps(dispatch){
	return {
		add1: ()=> dispatch({type: 'add', payload: 1}),
		add2: ()=> dispatch({type: 'add', payload: 2})
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
