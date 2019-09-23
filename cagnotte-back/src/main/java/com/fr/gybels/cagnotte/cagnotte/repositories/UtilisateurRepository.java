package com.fr.gybels.cagnotte.cagnotte.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fr.gybels.cagnotte.cagnotte.model.Utilisateur;

public interface UtilisateurRepository extends CrudRepository<Utilisateur, Integer> {

	List<Utilisateur> findAll();

}
