package com.fr.gybels.cagnotte.cagnotte.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Resultat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idResultat;

	private Integer somme;

	private Integer position;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "utilisateur_donneur_fk")
	private Utilisateur utilisateurDonneur;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "utilisateur_preneur_fk")
	private Utilisateur utilisateurPreneur;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="partie_fk")
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
