package com.fr.gybels.cagnotte.cagnotte.controllers.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

public class PartieDTO {

	private Integer idPartie;

	private String typeJeu;

	private LocalDateTime date;

	public Integer getIdPartie() {
		return idPartie;
	}

	public void setIdPartie(Integer idPartie) {
		this.idPartie = idPartie;
	}

	public String getTypeJeu() {
		return typeJeu;
	}

	public void setTypeJeu(String typeJeu) {
		this.typeJeu = typeJeu;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}
}
