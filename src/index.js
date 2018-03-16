import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import { Task,TaskList } from './tasks/tasks';

let tasks = [
  {
    "description": "Aenean interdum tellus eros, sed vestibulum dolor iaculis pellentesque. Curabitur mattis egestas massa, ac maximus leo porta id.",
    "key": 1,
    "name": "Name of the task 1"
  },
  {
    "description": "Sed sit amet tortor non erat vehicula dictum. Phasellus ultricies mi pharetra massa pharetra, pretium cursus nibh auctor. Donec et viverra arcu.",
    "key": 2,
    "name": "Name of the task 2"
  },
  {
    "description": "Donec eu enim tristique, porttitor leo et, vulputate sapien. Sed nec purus efficitur, fermentum odio in.",
    "key": 3,
    "name": "Name of the task 3"
  },
  {
    "description": "Hokus pokus",
    "key": 4,
    "name": "Name of my new task"
  }

]

let logs = [
  {
    "description": "Fixing bug #21",
    "hours": 6.0,
    "task_key": 1,
    "user": "Jordan Gray"
  },
  {
    "description": "UI clean up",
    "hours": 4.5,
    "task_key": 1,
    "user": "Spencer Moore"
  },
  {
    "description": "Optimizing performance",
    "hours": 10.0,
    "task_key": 1,
    "user": "Ryan Wells"
  },
  {
    "description": "Menu items on front page",
    "hours": 2.0,
    "task_key": 2,
    "user": "Jay Foster"
  },
  {
    "description": "Backand database schema",
    "hours": 5.25,
    "task_key": 2,
    "user": "Carmelo Patel"
  }
]

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
