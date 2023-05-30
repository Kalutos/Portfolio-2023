// Récupération des éléments HTML avec les selecteurs
const bouton1 = document.querySelector('#work_choice_micromania');
const bouton2 = document.querySelector('#work_choice_monop');
const bouton3 = document.querySelector('#work_choice_aquazena');
const bouton4 = document.querySelector('#work_choice_ensmv');
const div1 = document.querySelector('#work_text_micromania');
const div2 = document.querySelector('#work_text_monop');
const div3 = document.querySelector('#work_text_aquazena');
const div4 = document.querySelector('#work_text_ensmv');

// Ajout d'un événement clic sur chaque bouton
bouton1.addEventListener('click', () => {
  // On affiche la div1 et on masque les autres divs
  div1.style.display = 'block';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
});

bouton2.addEventListener('click', () => {
  // On affiche la div2 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'block';
  div3.style.display = 'none';
  div4.style.display = 'none';
});

bouton3.addEventListener('click', () => {
  // On affiche la div3 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'block';
  div4.style.display = 'none';
});

bouton4.addEventListener('click', () => {
  // On affiche la div4 et on masque les autres divs
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function() {
  var bouton1 = document.getElementById("work_choice_micromania");
  var div1 = document.getElementById("work_text_micromania");

  bouton1.classList.add("active");
  div1.classList.add("active");
});
