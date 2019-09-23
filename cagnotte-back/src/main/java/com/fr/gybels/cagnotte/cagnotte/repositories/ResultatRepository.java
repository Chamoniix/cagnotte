package com.fr.gybels.cagnotte.cagnotte.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fr.gybels.cagnotte.cagnotte.model.Resultat;

public interface ResultatRepository extends CrudRepository<Resultat, Integer> {

	List<Resultat> findAll();

}
