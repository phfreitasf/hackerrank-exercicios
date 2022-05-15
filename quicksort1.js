/*
 * Complete the 'quickSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quickSort(arr) {
    let left = []
    let right = []
    let piv = arr[0] //define o elemento pivor para organizar o novo array

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] <  piv && arr[i] != piv ) //se o elemento arr[i] for menor que o pivor, é jogado para esquerda, caso contrario pra direita
        {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }


    let array = []
    left.map((number,index) => {
        array.push(number)
    });

    right.map((number,index) => {
        array.push(number)
    });

    console.log(array)
}

let array = '5 1 2 3 4 6 7 8 9'
let arr = array.split(' ')

quickSort(arr)