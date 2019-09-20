package com.fr.gybels.cagnotte.cagnotte.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.fr.gybels.cagnotte.cagnotte.model.Partie;


public interface PartieRepository extends CrudRepository<Partie, Integer> {

	List<Partie> findAll();

}
