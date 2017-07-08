package com.votingapp.api.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vote {

	@Id
	@GeneratedValue
	public Long id;
	public Long questionId;
	public Boolean answer;

	public Vote() {
	}

	public Vote(Long questionId, Boolean answer) {
		this.questionId = questionId;
		this.answer = answer;
	}

	@Override
	public String toString() {
		return String.format("Vote[id=%s, questionId='%s', answer='%s']", id, questionId, answer);
	}

}
