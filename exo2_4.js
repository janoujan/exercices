// Créer une fonction qui prend en paramètre un tableau (de 1 ou plusieurs cases) et qui
// renvoie un nouveau tableau dont les cases sont triées dans l’ordre.
// Si l’une de ces cases n’est pas un nombre, elle doit renvoyer null
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

