/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

//Sort no ultimo elemento inserido em um array 
function insertionSort1(n, arr) {
    
let temp = arr[n-1]
let i = n-1

while(temp <= arr[i] ) {

    arr[i] = arr[i-1]
    if (temp > arr[i-1] && temp < arr[i+1]) arr[i] = temp
    if (arr[i-1] == undefined) arr[i] = temp //verifica se esta abaixo de 0 no indice do array

    console.log(arr.map((number,index) => number).join(' ')) 

    i--
}
}



//alterar 'n' para o tamanho do array
let array = '2 3 4 5 6 7 8 9 10 1'
let arr = array.split(' ')
let n = 10
insertionSort1(10,arr)