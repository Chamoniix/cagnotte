package com.fr.gybels.cagnotte.cagnotte.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fr.gybels.cagnotte.cagnotte.model.Utilisateur;
import com.fr.gybels.cagnotte.cagnotte.repositories.UtilisateurRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/utilisateur")
public class UtilisateurController {

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@RequestMapping(method= RequestMethod.GET)
	public ResponseEntity getAllUtilisateurs() {
		List<Utilisateur> utilisateurs = utilisateurRepository.findAll();
		try {
			return new ResponseEntity(utilisateurs, HttpStatus.OK);
		}
		catch (Exception e) {

		}
		return null;
	}

}
