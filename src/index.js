import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

import { TaskForm,TaskList,TaskListSimple, SelectedTask } from './tasks/tasks';

class App extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
			loaded: false,
      posts: [],
      currentTask: 1
    }

  }

  setCurrentTask(task_key){
      this.setState({currentTask: task_key});
  }

	componentWillMount() {
		this.fetchPosts();
	}

	render() {
    let mytask = this.state.posts.find(task=>task.key == this.state.currentTask)

		if(!this.state.loaded)
			return (
				<div className="container">
					<h1>Please wait a moment...</h1>;
				</div>
			);

		return (
			<div className="container">
				<h1>Tasks progress report</h1>
          <div className="column">
          <TaskListSimple setCurrentTask={this.setCurrentTask.bind(this)} fetchPosts={this.fetchPosts.bind(this)} posts={this.state.posts}/>
          </div>
          <div className="column">
          <SelectedTask name={mytask.name} description={mytask.description} mykey={mytask.key} currentTask={this.state.currentTask} posts={this.state.posts}/>
				  </div>
          <div className="task-form">
          <TaskForm onSend={this.fetchPosts.bind(this)}/>
          </div>
        {/* <TaskList fetchPosts={this.fetchPosts.bind(this)} posts={this.state.posts}/> */}
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
