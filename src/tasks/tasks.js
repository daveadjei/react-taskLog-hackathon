import React from 'react';
import ReactDOM from 'react-dom';
import './tasks.css';

export class Log extends React.Component {

	render() {
		return (
			<div>
                <div>
                    {this.props.description}
                </div>
                <div>
                    {this.props.hours}
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
		return (
			<div>
				{
					this.props.logs.map(
						(logs) => {
							return (
								<div className="log">
								<Log
                                    description={logs.description}
                                    hours={logs.hours}
									task_key={logs.task_key}
									user={logs.user}
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
                    <LogList logs={this.props.logs}/>
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
						(tasks) => {
							return (
								<Task
                                    name={tasks.name}
                                    description={tasks.description}
									key={tasks.key}
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


