// Créer une fonction qui prend en paramètre un tableau à deux dimensions et qui renvoie
// la somme de tous les nombres contenus dans ce tableau.
// Si l’une de ces cases n’est pas un nombre ou si le tableau ne comporte qu’une dimension,
// elle doit renvoyer null.
'use strict'
let MyArray = [
  [1, 1, 1, 2],
  [2, 2, 2],
  [7, 8, 9],
];

// Function to calculate sum
const sum = (arr) => {
  let i;
  let sum = 0;
  if (arr[i] === Number) {
    for (i = 0; i < arr.length; ++i) {
      sum = sum + arr[i].reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    }
    return sum;
  } else {
    return null
  }
}
console.log(sum(MyArray));
