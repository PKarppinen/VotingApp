package com.votingapp.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.votingapp.api.dto.Vote;
import com.votingapp.api.repositories.VoteRepository;

@RestController
@RequestMapping(value = "/api/votes")
public class VoteController {

	@Autowired
	VoteRepository voteRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Iterable<Vote> getAllVotes() {
		return voteRepository.findAll();
	}

	@RequestMapping(value = "/yesVotesPerQuestion/{questionId}", method = RequestMethod.GET)
	public int getAllYesVotesPerQuestion(@PathVariable Long questionId) {
		Iterable<Vote> allVotes = voteRepository.findAll();
		int returnValue = 0;
		for (Vote vote : allVotes) {
			if (vote.questionId.equals(questionId) && vote.answer.booleanValue()) {
				returnValue++;
			}
		}
		return returnValue;
	}

	@RequestMapping(value = "/noVotesPerQuestion/{questionId}", method = RequestMethod.GET)
	public int getAllNoVotesPerQuestion(@PathVariable Long questionId) {
		Iterable<Vote> allVotes = voteRepository.findAll();
		int returnValue = 0;
		for (Vote vote : allVotes) {
			if (vote.questionId.equals(questionId) && !vote.answer.booleanValue()) {
				returnValue++;
			}
		}
		return returnValue;
	}

	@RequestMapping(method = RequestMethod.POST)
	public Vote addNewVote(@RequestBody Vote vote) {
		return voteRepository.save(vote);
	}
}
