/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */


function insertionSort2(n, arr) {
    let i = 0
    let j = 0
    let temp = 0
    for (i = 0;i < n; i++)
    {
        for(j=0; j<n; j++)
        {            
           if(arr[i] > arr[i+j])
           {
            temp = arr[i+j]
            arr[i+j] = arr[i]
            arr[i] = temp
            console.log(arr.map((number,index) => number).join(' '))
           }
        }
    }
}

//alterar 'n' para o tamanho do array
let array = '8 7 6 5 4 3 2 1'
let arr = array.split(' ')
let n = 8
insertionSort2(n,arr)