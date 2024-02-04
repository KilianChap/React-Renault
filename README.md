## React-Renault
Un site en react pour consulter différents  anciens véhicules Renault

Projet React

Création d'un site en React orienté sur les anciens véhicules de la marque Renault.

# Création du projet

Pour cela, j'ai créé un nouveau projet grâce à la commande npx create-react-app projet.01.02.2024.

# Utilisation de Bootstrap

J'ai décidé d'utiliser Bootstrap car je suis habitué à son utilisation et à sa simplicité (sauf pour l'installation qui peut parfois être un calvaire).

# Installation de Bootstrap

Pour utiliser Bootstrap avec React, on peut soit utiliser un CDN, soit l'installer directement. Je l'ai installé grâce à la commande npm install react-bootstrap bootstrap donnée sur le site de Bootstrap.

# Les Cards Bootstrap

Dans un premier temps, j'ai pris un template Bootstrap d'une carte pour afficher un véhicule en dur. Le template étant plutôt sympa, je l'ai gardé. J'ai tout mis dans une fonction.

# La Navbar

Ensuite, j'ai ajouté un template Bootstrap de navbar pour que la page paraisse un peu moins vide. J'ai utilisé une balise <a> pour mon titre "Renault" sur ma navbar, pour pouvoir, si je le veux un jour, rediriger vers une page en cliquant dessus. Ensuite, j'ai rajouté un logo PNG Renault à ma balise <a> en ajoutant une balise <img> dans ma balise <a>, me permettant d'étendre le lien de mon texte "Renault". Le logo étant trop gros et n'arrivant pas à le mettre comme je veux en Bootstrap, je suis passé par du CSS en donnant un id à ma balise <img>. J'ai donné une hauteur en vh et mis la largeur en auto, permettant à la largeur de s'adapter automatiquement.

# Données via un jSON

Ensuite, j'ai voulu mettre plusieurs véhicules dans un fichier JSON. Pour cela, j'ai demandé à ChatGPT de me faire un JSON avec plusieurs noms de véhicules auxquels j'ai ajouté une image.

Pour tout afficher dans une card, j'ai créé un nouveau fichier .js dans lequel j'ai appelé mon fichier JSON et créé un composant CarteVoiture qui prend les propriétés que j'ai dans mon JSON (id, nom, année, image) et génère la carte Bootstrap que j'ai utilisée pour afficher en dur un véhicule. Ensuite, dans le composant VoitureListe, j'utilise map pour itérer sur la liste de voitures et appeler le composant CarteVoiture pour chaque voiture.

# API Youtube

Pour l'API, j'ai utilisé celle de YouTube (en générant une clé avec mon compte YouTube). Pour utiliser l'API de YouTube, j'utilise Axios (pour les requêtes HTTP).

Installation d'Axios : npm install axios.

# JSON => Base de données (Supabase)

Pour cela, il faut installer le client : npm install @supabase/supabase-js.

J'utilise ensuite le template donné par Supabase et je l'ai modifié en fonction de ma base, puis je retourne ma carte.


