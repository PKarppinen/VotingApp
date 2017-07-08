const React = require('react');

export default class NoVotes extends React.Component{
  constructor(props) {
     super(props);
     this.props.voteNo.bind(this);
  }

	render() {
		return (
      <span id="NoVotesSpanID">
        <button id="buttonVoteNoID" type="button" className="btn btn-default" aria-label="Center Align" onClick={this.props.voteNo}>
          <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <h3 id="countForNoVotesID"></h3>
      </span>
		)
	}
}
