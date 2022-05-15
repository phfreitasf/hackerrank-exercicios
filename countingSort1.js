'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    
    let array = []
    let count = 0
    let previous = []
    // for(let i = 0; i < Math.max(...arr) + 1; i++)
    // {
    //     array.push(0)
    // }

    for(let i = 0; i < arr.length; i++)
    {
        let current = arr[i]
        
        for(let j = 0; j < arr.length; j++)
        {
            if(current == arr[j] && !previous.includes(current))
            {
                
                count = count + 1
                array[i] = count  
                //console.log('run numero:'+j) 
                      
                       
            }

        }
        previous[i]= current
        // console.log(previous) 
        count = 0
    }
    // 0 2 1 1 1 2
   console.log(array)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


let array = '1 1 2 3 5 6 6'
let arr = array.split(' ')

countingSort(arr)