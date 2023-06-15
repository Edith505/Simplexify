function validerFormulaire() {
    var variableDecision = document.getElementById('variable-decision').value;
    var variableContrainte = document.getElementById('variable-contrainte').value;

    if (variableDecision === '') {
        afficherErreur('Veuillez remplir le champ Variable de décision.', 'variable-decision');
        return false;
    }

    if (variableContrainte === '') {
        afficherErreur('Veuillez remplir le champ Contraintes.', 'variable-contrainte');
        return false;
    }
    return true;
}

function validerFormulaire2() {
    var inputsContraintes = document.querySelectorAll('.div-contraint input[type="text"]');
    
    for (var i = 0; i < inputsContraintes.length; i++) {
        var valeur = inputsContraintes[i].value;
        
        if (valeur.trim() === '') {
            afficherErreur('Veuillez remplir tous les champs de contraintes.', inputsContraintes[i]);
            return false;
        }
        
        if (!estNombre(valeur)) {
            afficherErreur('Veuillez entrer des nombres valides pour les champs de contraintes.', inputsContraintes[i]);
            return false;
        }
    }

    return true;
}

function estNombre(valeur) {
    return !isNaN(parseFloat(valeur)) && isFinite(valeur);
}

function afficherErreur(message, champId) {
    var champ = document.getElementById(champId);
    var erreur = document.createElement('p');
    erreur.className = 'erreur';
    erreur.innerHTML = message;
    champ.parentNode.insertBefore(erreur, champ.nextSibling);
}
