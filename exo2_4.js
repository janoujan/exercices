// Créer une fonction qui prend en paramètre un tableau (de 1 ou plusieurs cases) et qui
// renvoie un nouveau tableau dont les cases sont triées dans l’ordre.
// Si l’une de ces cases n’est pas un nombre, elle doit renvoyer null
'use strict'
let myArray = [1, 5, 2, 75, 56, 25, "banana", "ananas", "cacolac"];

    let order = (arr) => arr.sort(function (a, b) {
        if (a ?? b === Number) {
            return a - b;
        } else {
            return NaN
            }
    });



console.log(order(myArray));
