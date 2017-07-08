package com.votingapp.api.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Question {

	@Id
	@GeneratedValue
	public Long id;
	public String questionString;

	public Question() {
	}

	public Question(String questionString) {
		this.questionString = questionString;
	}

	@Override
	public String toString() {
		return String.format("Question[id=%s, question='%s']", id, questionString);
	}

}
