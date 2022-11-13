// Créer une fonction qui prend en paramètre un tableau et affiche son contenu de façon
// lisible dans la console. Si le tableau est à deux dimensions, on doit afficher le contenu de
// ses cases sous forme de carré.
'use strict'

let myArray = [
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3],
    [4, 4,[4, ['']]]];

//une fonction qui prend en parametre un tableau
// et affiche son contenu dans la console sous forme de carré

let square = (arr) => arr.flat(Infinity)
 

console.log(square(myArray));
    

 