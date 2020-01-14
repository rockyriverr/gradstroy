import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from '../../templates/style.css';

class App extends Component {
	render() {
		return <h1>React App</h1>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));