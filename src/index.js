import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import { Task,TaskList } from './tasks/tasks';

class App extends React.Component {


	render() {

		return (
			<div className="container">
      <h1>Tasks progress report</h1>
      <div >
      < TaskList tasks={tasks} logs={logs}/>
      </div>


			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
