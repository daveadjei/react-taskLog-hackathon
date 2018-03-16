import React from 'react';
import ReactDOM from 'react-dom';
import './tasks.css';

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
                <div>
                    <span>This belongs to task number: </span>{this.props.task_key}
                </div>
                <div>
                    {this.props.user}
                </div>
            </div>
		);
	}

}

export class LogList extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentWillMount(){
        fetch('http://worklog.podlomar.org/logs')
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

	render() {
		if(!this.state.loaded){
            return(
                <div className="container">
                    <h1>Please wait a moment...</h1>
                </div>
            );
        }
		return (
			<div>
				{
					this.state.posts
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



export class Task extends React.Component {

	render() {
		return (
			<div>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {this.props.description}
                </div>
                <div>
                    {this.props.key}
                </div>
                <div>
                    <LogList logs={this.props.logs} task_key={this.props.mykey}/>
                </div>

            </div>
		);
	}

}

export class TaskList extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            loaded: false
        }
    }

    componentWillMount(){
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
	render() {
		if(!this.state.loaded){
            return(
                <div className="container">
                    <h1>Please wait a moment...</h1>
                </div>
            );
		}

		return (
			<div className="container">
				{
					this.state.posts.map(
						(task) => {
							return (
								<Task
                                    name={task.name}
                                    description={task.description}
									mykey={task.key}
									logs={this.props.logs}

									 />
							)
						}

					)
				}
			</div>
		)
	}
}


