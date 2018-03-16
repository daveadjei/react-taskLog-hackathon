import React from 'react';
import ReactDOM from 'react-dom';
import './logs.css';

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

