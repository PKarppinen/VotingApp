const React = require('react');
const client = require('../client');

import YesVotes from './YesVotes.js';
import NoVotes from './NoVotes.js';

var updateVoteCounts = require('../updateVoteCounts.js');

var selectedQuestionId = -1;

export default class QuestionList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {handleChange: this.handleChange,
                  voteYes: this.voteYes,
                  voteNo: this.voteNo};

    this.handleChange = this.handleChange.bind(this);
    this.voteYes = this.voteYes.bind(this);
    this.voteNo = this.voteNo.bind(this);
  }

  handleChange(event) {

      if (event.target.value != undefined) {

        selectedQuestionId = event.target.value;

        // Update question info
        client({method: 'GET', path: '/api/questions/' + event.target.value}).done(response => {
          document.getElementById('questionTitleID').innerText = response.entity.questionString;
        });

        // Set yes votes for selected question
        client({method: 'GET', path: '/api/votes/yesVotesPerQuestion/' + event.target.value}).done(response => {
          document.getElementById('countForYesVotesID').innerText = response.entity;
        });
        // Set no votes for selected question
        client({method: 'GET', path: '/api/votes/noVotesPerQuestion/' + event.target.value}).done(response => {
          document.getElementById('countForNoVotesID').innerText = response.entity;
        });
      }
  }

  voteYes(event) {

      console.log('Voted yes with question id ' +  selectedQuestionId );

      if (selectedQuestionId > 0) {
        var yesVote = {
          "questionId": selectedQuestionId,
          "answer": "true"
        };

        client({method: 'POST',
                path: '/api/votes',
                entity: yesVote,
                headers: {'Content-Type': 'application/json'}})
            .then(updateVoteCounts(selectedQuestionId));
      }
  }

  voteNo(event) {

      console.log('Voted no with question id ' +  selectedQuestionId );

      if (selectedQuestionId > 0) {
        var noVote = {
          "questionId": selectedQuestionId,
          "answer": "false"
        };

        client({method: 'POST',
                path: '/api/votes',
                entity: noVote,
                headers: {'Content-Type': 'application/json'}})
              .then(updateVoteCounts(selectedQuestionId));
      }
  }

	render() {
		var questions = this.props.questions.map(question =>
      <button key={question.id} type="button" className="btn btn-default" value={question.id} onClick={this.handleChange}>{question.id}</button>
		);
		return (
      <div>
        <div>
          <span>Select question </span>
          <span>
            <div className="btn-group" role="group">
		          {questions}
	          </div>
          </span>
        </div>
        <div>
          <h3 id="questionTitleID"></h3>
        </div>
        <div>
          <YesVotes voteYes={this.state.voteYes}/>
          <NoVotes voteNo={this.state.voteNo}/>
        </div>
      </div>
		)
	}
}
