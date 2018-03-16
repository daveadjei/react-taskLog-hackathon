import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import { TaskForm,TaskList } from './tasks/tasks';

class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			posts: []
		}
	}

	componentWillMount() {
		this.fetchPosts();
	}

	render() {
		if(!this.state.loaded)
			return (
				<div className="container">
					<h1>Please wait a moment...</h1>;
				</div>
			);

		return (
			<div className="container">
				<h1>Tasks progress report</h1>
				<TaskForm onSend={this.fetchPosts.bind(this)}/>
				<TaskList posts={this.state.posts}/>
			</div>
		)
	}

	fetchPosts() {
		fetch('http://worklog.podlomar.org/tasks')
			.then(response => response.json())
			.then(
				(json) => {
					this.setState(
						{
							loaded: true,
							posts: json
						}
					);
				}
			);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
