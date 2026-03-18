// SCROLL VERS SECTION
function scrollVers(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// BOUTON PROJET
function alerteProjet() {
    alert("Ce projet est en cours de développement 🚀");
}

// CHANGER COULEUR
function changerTheme() {
    document.body.style.background = "linear-gradient(135deg, #ff512f, #dd2476)";
}

// FORMULAIRE CONTACT
function envoyerMessage() {
    let nom = document.getElementById("nom").value;
    let msg = document.getElementById("message").value;

    if(nom === "" || msg === "") {
        document.getElementById("confirmation").innerText = "Remplis tous les champs ❌";
    } else {
        document.getElementById("confirmation").innerText =
        "Merci " + nom + " ! Ton message a été envoyé ✅";
    }
}<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>DevSite Ultimate</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<nav>
    <h1>🚀 DevSite</h1>
    <div>
        <a href="index.html">Accueil</a>
        <a href="login.html">Connexion</a>
        <a href="register.html">Inscription</a>
        <a href="profil.html">Profil</a>
        <a href="jeu.html">Jeu 🎮</a>
    </div>
</nav>

<header class="hero">
    <h2>Bienvenue sur mon univers 💻</h2>
    <p>Je crée des sites et des jeux interactifs.</p>
    <button onclick="scrollVers('projets')">Explorer</button>
</header>

<section id="projets" class="section">
    <h2>💡 Mes projets</h2>
    <p>
        Je développe des applications web modernes avec des interactions,
        des animations et des systèmes utilisateurs.
    </p>
</section>

<footer>
    <p>© 2026 DevSite</p>
</footer>

<script src="script.js"></script>
</body>
</html>