package com.fr.gybels.cagnotte.cagnotte.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fr.gybels.cagnotte.cagnotte.controllers.dto.PartieDTO;
import com.fr.gybels.cagnotte.cagnotte.model.Partie;
import com.fr.gybels.cagnotte.cagnotte.model.Resultat;
import com.fr.gybels.cagnotte.cagnotte.repositories.PartieRepository;
import com.fr.gybels.cagnotte.cagnotte.repositories.ResultatRepository;

@Controller
@RequestMapping("/resultat")
public class ResultatController {

	@Autowired
	private ResultatRepository resultatRepository;

	@RequestMapping(method= RequestMethod.GET)
	public ResponseEntity getAllResultats() {
		List<Resultat> resultats = resultatRepository.findAll();
		try {
			return new ResponseEntity(resultats, HttpStatus.OK);
		}
		catch (Exception e) {

		}
		return null;
	}

}
