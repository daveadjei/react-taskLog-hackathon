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
                    {this.props.key}
                </div>
                <div>
                    {this.props.task_key}
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
								<Log
                                    description={logs.description}
                                    hours={logs.hours}
                                    key={logs.key}
                                    task_key={logs.task_key}
                                    user={logs.user}
									 />
							)
						}
						// Elementary school:
						// post => <Post user={post.user} text={post.text} />
					)
				}
			</div>
		)
	}
}

