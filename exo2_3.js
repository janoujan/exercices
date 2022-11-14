// 'use strict'
// Créer une fonction qui prend en paramètre un tableau et affiche son contenu de façon
// lisible dans la console. Si le tableau est à deux dimensions, on doit afficher le contenu de
// ses cases sous forme de carré.

/*
const tab = [[1, 1, 1]], [2, 2, 2], [3, 3, 3]]

1 1 1
2 2 2
3 3 3

*/

/*
const myArray = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4]
]

// une fonction qui prend en parametre un tableau
// et affiche son contenu dans la console sous forme de carré
const square = (arr) => {
  for (const tab2d of arr) {
    let line = ''
    for (const num of tab2d) {
      line += num
    }

    console.log(line)
  }
}

square(myArray)
console.log('coucou')
*/

const myArray = [1, 5, 2, 75, 56, 25, 'banana', 'ananas', 'cacolac']

const sortArray = (arr) => arr.sort((a, b) => {
  if (Number(a) && Number(b)) {
    // c'est des nombres
    return a - b
  }
  return 0
})


const replaceStringByNull = myArray => {

  for(let i = 0; i < myArray.length; i++) {
    if (!Number(myArray[i])) {

      myArray[i] = null

    }
  }
  return myArray

}


const arraySorted = sortArray(myArray)
const result = replaceStringByNull(arraySorted)
console.log(result)
