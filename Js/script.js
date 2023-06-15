function validerFormulaire() {
    let variableDecision = document.getElementById('variable-decision').value;
    let variableContrainte = document.getElementById('variable-contrainte').value;
  
    if (variableDecision === '') {
      afficherErreur('Veuillez remplir ce champ', 'variable-decision');
      return false;
    }
  
    if (isNaN(variableDecision)) {
      afficherErreur('Veuillez entrer un nombre valide', 'variable-decision');
      return false;
    }
  
    if (variableContrainte === '') {
      afficherErreur('Veuillez remplir ce champ', 'variable-contrainte');
      return false;
    }
    return true;
  }
  
  function afficherErreur(message, champId) {
    let champ = document.getElementById(champId);
    let erreur = champ.parentNode.querySelector('.erreur');
  
    if (!erreur) {
      erreur = document.createElement('p');
      erreur.className = 'erreur';
      erreur.innerHTML = message;
      champ.parentNode.insertBefore(erreur, champ.nextSibling);
    }
  }
  
  function afficherInsert() {
    var choiceForm = document.querySelector('.choice form');
    var insertDiv = document.querySelector('.insert');
  
    if (choiceForm.checkValidity() && validerFormulaire()) {
      insertDiv.style.display = 'block';
    } else {
      insertDiv.style.display = 'none';
    }
  }
  
  function creerDivFunct(n) {
    let container = document.getElementById('container');
    container.innerHTML = '';
  
    for (let i = 0; i < n; i++) {
      let divFunct = document.createElement('div');
      divFunct.className = 'div-funct';
  
      let label = document.createElement('label');
      label.textContent = 'X' + (i + 1) + ' :';
  
      let input = document.createElement('input');
      input.type = 'text';
  
      divFunct.appendChild(label);
      divFunct.appendChild(input);
  
      container.appendChild(divFunct);
    }
  }
  
  function creerDivContrainte(n) {
    let container = document.getElementById('contraintes-container');
    container.innerHTML = '';
  
    let variableDecision = document.getElementById('variable-decision').value;
  
    for (let i = 0; i < n; i++) {
      let divContrainte = document.createElement('div');
      divContrainte.className = 'insert-contraint';
  
      for (let j = 1; j <= variableDecision; j++) {
        let inputX = document.createElement('input');
        inputX.type = 'text';
        inputX.name = 'contrainte';
        inputX.id = 'contrainte-' + (i + 1) + '-x' + j;
  
        let spanX = document.createElement('span');
        spanX.textContent = 'X' + j;
  
        divContrainte.appendChild(inputX);
        divContrainte.appendChild(spanX);
  
        if (j !== variableDecision) {
          let plusSign = document.createElement('span');
          plusSign.textContent = '+';
          divContrainte.appendChild(plusSign);
        }
      }
  
      let selectOperator = document.createElement('select');
      let option1 = document.createElement('option');
      option1.value = '=';
      option1.textContent = '=';
      let option2 = document.createElement('option');
      option2.value = '>=';
      option2.textContent = '≥';
      let option3 = document.createElement('option');
      option3.value = '<=';
      option3.textContent = '≤';
      selectOperator.appendChild(option1);
      selectOperator.appendChild(option2);
      selectOperator.appendChild(option3);
  
      let inputContrainte = document.createElement('input');
      inputContrainte.type = 'text';
      inputContrainte.name = '';
      inputContrainte.id = '';
  
      divContrainte.appendChild(selectOperator);
      divContrainte.appendChild(inputContrainte);
  
      container.appendChild(divContrainte);
    }
  }
  
  document.querySelector('.choice form').addEventListener('submit', function(event) {
    event.preventDefault();
    afficherInsert();
  
    let variableDecision = parseInt(document.getElementById('variable-decision').value);
    if (!isNaN(variableDecision)) {
      creerDivFunct(variableDecision);
    }
  
    let variableContrainte = parseInt(document.getElementById('variable-contrainte').value);
    if (!isNaN(variableContrainte)) {
      creerDivContrainte(variableContrainte);
    }
  });
  