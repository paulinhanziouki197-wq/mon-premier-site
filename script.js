// scroll bouton
function scrollBas() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// animation scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});

// effet curseur dynamique
document.addEventListener("mousemove", e => {
    document.body.style.backgroundPosition = e.pageX/50 + "px " + e.pageY/50 + "px";
});let secret = Math.floor(Math.random() * 20) + 1;

function jouer() {
    let n = document.getElementById("nombre").value;

    if(n == secret) {
        document.getElementById("resultatJeu").innerText = "🎉 Gagné !";
    } else if(n < secret) {
        document.getElementById("resultatJeu").innerText = "Plus grand ⬆️";
    } else {
        document.getElementById("resultatJeu").innerText = "Plus petit ⬇️";
    }
}// DARK MODE
function toggleDark(){
    document.body.classList.toggle("dark");
}

// VISITES
let v = localStorage.getItem("visites") || 0;
v++;
localStorage.setItem("visites", v);
if(document.getElementById("visites"))
document.getElementById("visites").innerText = v;

// INSCRIPTION
function register(){
    localStorage.setItem("user", newUser.value);
    localStorage.setItem("pass", newPass.value);
    alert("Compte créé");
}

// LOGIN
function login(){
    if(user.value === localStorage.getItem("user") &&
       pass.value === localStorage.getItem("pass")){
        localStorage.setItem("connecte","oui");
        res.innerText="Connecté";
    } else {
        res.innerText="Erreur";
    }
}

// PROFIL
if(localStorage.getItem("connecte")){
    if(document.getElementById("profilNom"))
    profilNom.innerText = localStorage.getItem("user");
}

// JEU
let secret = Math.floor(Math.random()*10)+1;
function jouer(){
    resJeu.innerText = (nombre.value == secret) ? "Gagné 🎉" : "Perdu 😢";
}

// CONTACT
function envoyer(){
    alert("Message envoyé !");
}

// API CITATION
fetch("https://api.quotable.io/random")
.then(res=>res.json())
.then(data=>{
    if(document.getElementById("citation"))
    citation.innerText = data.content;
});