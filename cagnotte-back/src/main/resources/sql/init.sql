CREATE TABLE partie (
    id_partie INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type_jeu VARCHAR(100) NOT NULL,
    date TIMESTAMP
);

CREATE TABLE utilisateur (
    id_utilisateur INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100)
);

CREATE TABLE resultat (
    id_resultat INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    somme INT NOT NULL,
    utilisateur_fk INT UNSIGNED NOT NULL,
    partie_fk INT UNSIGNED NOT NULL,
    CONSTRAINT fk_resultat_partie
    		FOREIGN KEY (partie_fk) REFERENCES partie (id_partie),
    CONSTRAINT fk_resultat_utilisateur
    		FOREIGN KEY (utilisateur_fk) REFERENCES utilisateur (id_utilisateur)
);