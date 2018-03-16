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
	render() {
		console.log(this.props.task_key);
		return (
			<div>
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
	render() {
		return (
			<div className="container">
				{
					this.props.tasks.map(
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


