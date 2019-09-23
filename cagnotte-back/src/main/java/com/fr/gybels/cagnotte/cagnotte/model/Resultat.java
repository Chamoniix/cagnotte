package com.fr.gybels.cagnotte.cagnotte.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Resultat {

	@Id
	private Integer idResultat;

	private Integer somme;

	@ManyToOne
	@JoinColumn(name = "utilisateur_fk")
	private Utilisateur utilisateur;

	@ManyToOne
	@JoinColumn(name="partie_fk", nullable=false)
	@JsonIgnore
	private Partie partie;

	public Integer getIdResultat() {
		return idResultat;
	}

	public void setIdResultat(Integer idResultat) {
		this.idResultat = idResultat;
	}

	public Integer getSomme() {
		return somme;
	}

	public void setSomme(Integer somme) {
		this.somme = somme;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
}
