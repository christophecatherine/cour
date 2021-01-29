// DOM - Document Object Model

// Définir l'interface

const form = document.querySelector(`#course-form`),
    listeTache = document.querySelector(`.collection`),
    supprimerListe = document.querySelector(`.supprimer-course`),
    contenuTache = document.querySelector(`#contenuTache`),
    filtrer = document.querySelector(`#filter`);

// Apllication
malistedeTache()

function malistedeTache() {
    // Ajouter un évènement
    form.addEventListener(`submit`, ajouterUneTache);

    // Supprimer une tâche
    listeTache.addEventListener(`click`, supprimerUneTache)

    // Nettoyer la liste de tâche
    supprimerListe.addEventListener(`click`, nettoyerLaListe)

    //  Flitre les tâches
    filtrer.addEventListener(`keyup`, filtrerLesTaches)

}

// Ajouter une tâche
function ajouterUneTache(e) {
    if (contenuTache.value === '') {
        alert(`Ajouter une tâche`)
    }

    // Ajouter une balise
    const li = document.createElement(`li`)

    // Ajouter une classe <li>
    li.className = "collection-item";

    // Relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    // Créer le lien <a>
    const link = document.createElement(`a`);

    // Ajouter une classe à <a>
    link.className = `delete-item secondary-content`;

    // Ajouter l'icone
    link.innerHTML = `<ion-icon name="close-circle"><ion-icon>`;

    // Relier <a> dans le <li>
    li.appendChild(link);

    // Relier <li> à <ul>
    listeTache.appendChild(li);

    contenuTache.value = ``

    e.preventDefault()
}

// Supprimer une tâche
function supprimerUneTache(e) {
    if (e.target.parentElement.classList.contains(`delete-item`)) {
        if (confirm(`Voulez-vous vraiment supprimer ?`))
            e.target.parentElement.parentElement.remove();
    }
}


// Nettoyer la liste de tâche

function nettoyerLaListe() {
    listeTache.innerHTML = ''
}

// Flitrer 
function filtrerLesTaches(e) {
    const contenuClavier = e.target.value.toLowerCase()

    document.querySelectorAll(`.collection-item`).forEach(
        function(tache) {
            const motCle = tache.firstChild.textContent;
            if (motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1) {
                tache.getElementsByClassName.display = `block`
            } else {
                tache.style.display = `none`
            }
        }
    );


    console.log(contenuClavier);
}