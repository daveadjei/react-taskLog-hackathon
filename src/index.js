import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import {Log,LogList} from './tasks/logs.js';

let logs = [
  {
    "description": "Fixing bug #21",
    "hours": 6.0,
    "key": 1,
    "task_key": 1,
    "user": "Jordan Gray"
  },
  {
    "description": "UI clean up",
    "hours": 4.5,
    "key": 2,
    "task_key": 1,
    "user": "Spencer Moore"
  },
  {
    "description": "Optimizing performance",
    "hours": 10.0,
    "key": 3,
    "task_key": 1,
    "user": "Ryan Wells"
  },
  {
    "description": "Menu items on front page",
    "hours": 2.0,
    "key": 4,
    "task_key": 2,
    "user": "Jay Foster"
  },
  {
    "description": "Backand database schema",
    "hours": 5.25,
    "key": 5,
    "task_key": 2,
    "user": "Carmelo Patel"
  }
]

class App extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		loaded: false,
	// 		post: []
	// 	}
	// }

	render() {
		// if(!this.state.loaded)
		// 	return(
		// 		<div className="container">
		// 		<h1>Loading...</h1>
		// 		</div>
		// 	);

		return (
			<div className="container">
			<h1>Tasks progress report</h1>
			<LogList logs={logs} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
