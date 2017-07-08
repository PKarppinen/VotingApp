package com.votingapp.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.votingapp.api.dto.Question;
import com.votingapp.api.repositories.QuestionRepository;

@RestController
@RequestMapping(value = "/api/questions")
public class QuestionsController {

	@Autowired
	QuestionRepository questionRepository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Iterable<Question> getAllQuestions() {
		return questionRepository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Question getQuestionById(@PathVariable Long id) {
		return questionRepository.findOne(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public Question addNewQuestion(@RequestBody Question question) {
		return questionRepository.save(question);
	}
}
