package com.fr.gybels.cagnotte.cagnotte.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Partie {

	@Id
	private Integer idPartie;

	private String typeJeu;

	private LocalDateTime date;

}
