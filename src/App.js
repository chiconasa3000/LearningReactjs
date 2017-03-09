import React, {Component} from 'react';
import logo from './imags/MyAvatar.jpg';
import './App.css';
import {Grid, Image, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

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

/*
const elemSaludo=React.createElement(
	'h1',
	{className:'App-container'},
	'Hello, World'
);

const elementImag=(
	<img src={user.avatarUrl} alt="avatar"></img>
);
*/
function Gustos(props){
	return <h3>Me gusta {props.hobby}</h3>;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <Image className="App-Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} rounded/>
   
  );
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <UserInfo user={props.author}/>
          </Col>
          <Col xs={12} md={8}>
              <div className="Comment-text">
                {props.text}
              </div>
              <div className="Comment-date">
                {formatDate(props.date)}
              </div>  
          </Col>
        </Row>
    </div>
  );
}


const comment = {
  date: new Date(),
  text: 'Tratando de averiguar como hacer una selfie :p',
  author: {
    name: 'Christian Suca',
    avatarUrl: logo
  }
};

const imageShapeInstance = (
  <Col xs={4} md={2}>
    <Image src={logo}  thumbnail />
  </Col>
);

//<Comment date={comment.date} text={comment.text} author={comment.author}/>

const modalInstance = (
  <Comment date={comment.date} text={comment.text} author={comment.author}/>
);

//<Comment date={comment.date} text={comment.text} author={comment.author}/>

class App extends Component {
	render(){
		return (
			<div className="App">
				<div className="App-header">
  				<img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
				</div>
        <div className="App-Body">
				  {getGreeting(user)}
          <Gustos hobby="investigar"/>
          {modalInstance}
        </div>
			</div>
		);
	}
}

export default App;