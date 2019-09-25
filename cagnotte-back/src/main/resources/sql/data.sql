INSERT INTO partie (id_partie, type_jeu, date, nombre_joueurs) VALUES (1, 'POKER', '2019-09-23 16:02:39', 3);

INSERT INTO utilisateur (id_utilisateur, nom, prenom) VALUES (2, 'Gybels', 'Hugo');
INSERT INTO utilisateur (id_utilisateur, nom, prenom) VALUES (3, 'Bonnevialle', 'Théo');
INSERT INTO utilisateur (id_utilisateur, nom, prenom) VALUES (4, 'Salignat', 'Corentin');
INSERT INTO utilisateur (id_utilisateur, nom, prenom) VALUES (5, 'Muret', 'Alexis');

INSERT INTO cagnotte.resultat (id_resultat, somme, utilisateur_donneur_fk, utilisateur_preneur_fk, position, partie_fk) VALUES (4, 0, 2, null, 1, 1);
INSERT INTO cagnotte.resultat (id_resultat, somme, utilisateur_donneur_fk, utilisateur_preneur_fk, position, partie_fk) VALUES (2, 5, 5, 2, 2, 1);
INSERT INTO cagnotte.resultat (id_resultat, somme, utilisateur_donneur_fk, utilisateur_preneur_fk, position, partie_fk) VALUES (3, 15, 3, 1, 3, 1);
INSERT INTO cagnotte.resultat (id_resultat, somme, utilisateur_donneur_fk, utilisateur_preneur_fk, position, partie_fk) VALUES (1, 20, 4, 1, 4, 1);
