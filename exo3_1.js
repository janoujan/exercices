// Le carré
// Demandez à l’utilisateur de saisir un nombre X compris entre 1 et 10.
const num = 4 //prompt('choisir un nombre entre 1 et 10');
const hashtag = '#'
if (num >= 1 && num <= 10) {
// Affichez en console un carré composé de X # sur chaque ligne
  for (let i = 0; i < num; i++) {
    console.log(hashtag.repeat(num))
  }
} else {
  alert("ceci n'est pas un nombre compris entre 1 et 10")
}
