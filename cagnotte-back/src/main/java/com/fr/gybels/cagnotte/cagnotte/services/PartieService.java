package com.fr.gybels.cagnotte.cagnotte.services;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fr.gybels.cagnotte.cagnotte.model.Partie;
import com.fr.gybels.cagnotte.cagnotte.model.Resultat;
import com.fr.gybels.cagnotte.cagnotte.repositories.PartieRepository;
import com.fr.gybels.cagnotte.cagnotte.repositories.ResultatRepository;

@Service
public class PartieService {

	@Autowired
	PartieRepository partieRepository;

	@Autowired
	ResultatRepository resultatRepository;

	public List<Partie> getAllPartie() {
		List<Partie> parties = partieRepository.findAll();
		return parties;
	}

	public void addPartie(Partie partie) {
		Set<Resultat> resultatsTmp = partie.getResultats();
		partie.setResultats(null);
		Partie partieWithId = partieRepository.save(partie);
		resultatsTmp.forEach(resultat -> resultat.setPartie(partieWithId));
		resultatRepository.saveAll(resultatsTmp);
	}

}
