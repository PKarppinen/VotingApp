const client = require('./client');

define(function() {
    return function(selectedQuestionId) {

      client({method: 'GET', path: '/api/votes/yesVotesPerQuestion/' + selectedQuestionId}).done(response => {
        document.getElementById('countForYesVotesID').innerText = response.entity;
      });

      //Update no votes for selected question
      client({method: 'GET', path: '/api/votes/noVotesPerQuestion/' + selectedQuestionId}).done(response => {
        document.getElementById('countForNoVotesID').innerText = response.entity;
      });
    };
});
