import React, { Component} from 'react';
import logo from './imags/MyAvatar.jpg';
import './App.css';

function getGreeting(user){
	if(user){
		return <h3>Hola Soy {formatName(user)}</h3>;
	}
	return <h1>Hola Soy un Extraño.</h1>;
}

function formatName(user){
	return user.firstName + '_' + user.lastName + '@gmail.com'; 
}

const user = {
	firstName: 'Christian',
	lastName: 'Suca',
	avatarUrl: logo
};

const element_B = (
	<img src={user.avatarUrl}></img>
);

class App extends Component {
	render(){
		return (
			<div className="App">
				<div className="App-header">
				<img src={logo} className = "App-logo" alt="logo" />
				<h2>Bienvenido a React</h2>
				</div>
				{getGreeting(user)}
			</div>
		);
	}
}

export default App;