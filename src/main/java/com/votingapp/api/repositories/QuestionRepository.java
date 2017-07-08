package com.votingapp.api.repositories;

import org.springframework.data.repository.CrudRepository;

import com.votingapp.api.dto.Question;

public interface QuestionRepository extends CrudRepository<Question, Long> {

}
