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

	private Integer position;

	@ManyToOne
	@JoinColumn(name = "utilisateur_donneur_fk")
	private Utilisateur utilisateurDonneur;

	@ManyToOne
	@JoinColumn(name = "utilisateur_preneur_fk")
	private Utilisateur utilisateurPreneur;

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

	public Integer getPosition() {
		return position;
	}

	public void setPosition(Integer position) {
		this.position = position;
	}

	public Utilisateur getUtilisateurDonneur() {
		return utilisateurDonneur;
	}

	public void setUtilisateurDonneur(Utilisateur utilisateurDonneur) {
		this.utilisateurDonneur = utilisateurDonneur;
	}

	public Utilisateur getUtilisateurPreneur() {
		return utilisateurPreneur;
	}

	public void setUtilisateurPreneur(Utilisateur utilisateurPreneur) {
		this.utilisateurPreneur = utilisateurPreneur;
	}

	public Partie getPartie() {
		return partie;
	}

	public void setPartie(Partie partie) {
		this.partie = partie;
	}
}
