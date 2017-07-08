const React = require('react');

export default class YesVotes extends React.Component{
  constructor(props) {
     super(props);
     this.props.voteYes.bind(this);
  }

	render() {
		return (
      <span id="YesVotesSpanID">
        <button id="buttonVoteYesID" type="button" className="btn btn-default" aria-label="Center Align" onClick={this.props.voteYes}>
          <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </button>
        <h3 id="countForYesVotesID"></h3>
      </span>
		)
	}
}
