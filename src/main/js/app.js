const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');

import QuestionList from './components/QuestionList.js';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {questions: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/questions/'}).done(response => {
			this.setState({questions: response.entity});
		});
	}

	render() {
		return (
			<div>
				<h1>Voting Application</h1>
				<QuestionList questions={this.state.questions} />
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)
