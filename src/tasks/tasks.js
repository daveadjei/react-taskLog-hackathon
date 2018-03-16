import React from 'react';
import ReactDOM from 'react-dom';
import './tasks.css';

export class TaskForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			description: "",
			key: 0
		}
	}

	render() {
		return (
			<div>
				<h2>If you want to add a new task:</h2>
				<label>Name of task:
					<input
						className = "form-fields"
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.dataChanged.bind(this)}/>
				</label>
				<label>Description of task:
					<input
						className = "form-fields"
						type="text"
						name="description"
						value={this.state.description}
						onChange={this.dataChanged.bind(this)}/>
				</label>
				<button onClick={this.sendPost.bind(this)}>Send</button>
			</div>
		)
	}

	dataChanged(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	sendPost() {
		fetch('http://worklog.podlomar.org/tasks/create',
			{
				mode: 'no-cors',
				method: "POST",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then(function(response) {
			this.props.onSend();
		}.bind(this));
	}
}

class LogForm extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			description: "",
    		hours: 0,
    		key: 0,
    		task_key: props.task_key,
    		user: ""
		}
	}

	render() {
		return (
			<div className="containter">
				<label>Description of log:
					<input
						type="text"
						name="description"
						value={this.state.description}
						onChange={this.dataChanged.bind(this)}/>
				</label><br/>
				<label>Hours spent:
					<input
						type="number"
						name="hours"
						value={this.state.hours}
						onChange={this.dataChanged.bind(this)}/>
				</label><br/>
				<label>Task key:
					<input
						type="number"
						name="task_key"
						value={this.state.task_key}
						onChange={this.dataChanged.bind(this)}/>
				</label><br/>
				<label>User:
					<input
						type="text"
						name="user"
						value={this.state.user}
						onChange={this.dataChanged.bind(this)}/>
				</label><br/>

				<button onClick={this.sendPost.bind(this)}>Send</button>
			</div>
		)
	}

	dataChanged(event) {
		var newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	sendPost() {
		fetch('http://worklog.podlomar.org/logs/create',
			{
				mode: 'no-cors',
				method: "POST",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type": "application/json"
				}
			}
		).then(function(response) {
			this.props.onSend();
		}.bind(this));

	}

}

export class Log extends React.Component {

	render() {
		return (
			<div>
                <div>
				<span>What I did: </span>{this.props.description}
                </div>
                <div>
				<span>Hours spent on this: </span> {this.props.hours}
				<span> h.</span>
                </div>
                {/* <div>
                    <span>This belongs to task number: </span>{this.props.task_key}
                </div> */}
                <div>
                    {this.props.user}
                </div>
            </div>
		);
	}

}

export class LogList extends React.Component {
	render() {
		return (
			<div className="log">
				{
					this.props.logs
					.filter(
						log => log.task_key == this.props.task_key)
					.map(
						(log) => {
							return (
								<div className="log">
								<Log
                                    description={log.description}
                                    hours={log.hours}
									task_key={log.task_key}
									user={log.user}
									 />
								</div>
							)
						}

					)
				}
			</div>
		)
	}
}

class TaskSimple extends React.Component {
	constructor(props){
        super(props);

        this.state = {
			loaded: false,
			logs: []
        }
    }

    componentWillMount(){
		this.fetchPosts();
    }

	render() {
		let sum = 0;

		this.state.logs.filter(log => log.task_key==this.props.mykey).forEach(log => { sum+=log.hours });
		return (
                <div className="simple-task" onClick={this.props.setCurrentTask.bind(this,this.props.mykey)}>
                    {this.props.name}<span> - which took in total </span><strong>{sum}</strong><span> hours.</span>
                </div>

		);
	}
	fetchPosts(){
		fetch('http://worklog.podlomar.org/logs')
				.then(response => response.json())
				.then(
					(json) => {
						this.setState(
							{
								loaded: true,
								logs: json
							}
						);
					}
				);
	}
}
class Task extends React.Component {
	constructor(props){
        super(props);

        this.state = {
			loaded: false,
			logs: []
        }
    }

    componentWillMount(){
		this.fetchPosts();
    }

	render() {
		let sum = 0;

		this.state.logs.filter(log => log.task_key==this.props.mykey).forEach(log => { sum+=log.hours });
		return (
			<div>
                <div>
                    {this.props.name}<span> which took in total </span>{sum}<span> hours.</span>
                </div>
                <div>
                    {this.props.description}
                </div>
                <div>
                    {this.props.key}
                </div>
                <div>
					<LogForm onSend={this.fetchPosts.bind(this)} task_key={this.props.mykey}/>
                    <LogList sumHours={this.state.sumHours} logs={this.state.logs} task_key={this.props.mykey}/>
                </div>

            </div>
		);
	}
	fetchPosts(){
		fetch('http://worklog.podlomar.org/logs')
				.then(response => response.json())
				.then(
					(json) => {
						this.setState(
							{
								loaded: true,
								logs: json
							}
						);
					}
				);
	}
}

export class TaskListSimple extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            loaded: false
        }
    }

	render() {

		return (
			<div>
				{
					this.props.posts.map(
						(task) => {
							return (
								<TaskSimple
									setCurrentTask = {this.props.setCurrentTask.bind(this)}
									fetchPosts={this.props.fetchPosts.bind(this)}
                                    name={task.name}
                                    description={task.description}
									mykey={task.key}
									 />
							)
						}

					)
				}
			</div>
		)
	}
}
export class TaskList extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            loaded: false
        }
    }

	render() {

		return (
			<div className="container">
				{
					this.props.posts.map(
						(task) => {
							return (
								<Task
									fetchPosts={this.props.fetchPosts.bind(this)}
                                    name={task.name}
                                    description={task.description}
									mykey={task.key}
									 />
							)
						}

					)
				}
			</div>
		)
	}
}

export class SelectedTask extends React.Component{
	constructor(props){
        super(props);

        this.state = {
			loaded: false,
			logs: []
        }
    }

	render() {
		this.fetchPosts();

		let sum = 0;

		this.state.logs.filter(log => log.task_key==this.props.mykey).forEach(log => { sum+=log.hours });
		return (
			<div>
                <div>
                   <h4>You have picked task number: {this.props.mykey}</h4><br/>
                </div>
                <div>
					<span>Task's name: </span>{this.props.name}<span>.</span><br/>
					<span>This took a total of </span>{sum}<span> hours.</span>
                </div>
                <div>
				<span>Description: </span>{this.props.description}
                </div>
                <div>
					<h4>If you want to add a new log:</h4>
					<LogForm onSend={this.fetchPosts.bind(this)} task_key={this.props.mykey}/>
					<br/>
					<h4>Task's log:</h4>
                    <LogList sumHours={this.state.sumHours} logs={this.state.logs} task_key={this.props.mykey}/>
                </div>

            </div>
		);
	}
	fetchPosts(){
		fetch('http://worklog.podlomar.org/task/'+ this.props.currentTask + '/logs')
				.then(response => response.json())
				.then(
					(json) => {
						this.setState(
							{
								loaded: true,
								logs: json
							}
						);
					}
				);
	}
}


