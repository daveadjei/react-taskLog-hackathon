import React from 'react';
import ReactDOM from 'react-dom';
import './logs.css';

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
            </div>
		);
	}

}

export class TaskList extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.tasks.map(
						(tasks) => {
							return (
								<Task
                                    name={tasks.name}
                                    description={tasks.description}
                                    key={tasks.key}

									 />
							)
						}

					)
				}
			</div>
		)
	}
}


