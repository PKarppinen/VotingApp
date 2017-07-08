package com.votingapp.api.repositories;

import org.springframework.data.repository.CrudRepository;

import com.votingapp.api.dto.Vote;

public interface VoteRepository extends CrudRepository<Vote, Long> {

}
