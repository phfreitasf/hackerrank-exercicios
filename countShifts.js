/*
 * Complete the 'runningTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function runningTime(arr) {
    let count = 0
    let i = 0
    let j = 0
    let temp = 0
    for (i = 0;i < arr.length; i++)
    {
        for(j=0; j < arr.length; j++)
        {            
           if(arr[i] > arr[i+j])
           {
            temp = arr[i+j]
            arr[i+j] = arr[i]
            arr[i] = temp
            count = count +1
           }
        }
    }
    console.log(count)
    return(count)
}

let array = '4 4 3 4'
let arr = array.split(' ')

runningTime(arr)