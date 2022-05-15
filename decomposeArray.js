//a funcao precisa retornar numeros de até 4 digitos, com o valor limitado de 1 a 9 pelo parametro maxDigit,
// onde o numero printado deve somar 21 na soma dos 4 digitos

function decomposeArray(maxDigit) {
    const maxSize = 9999
    for (let i = 1000; i <= maxSize; i++) {
        let arr = i.toString().split('')
        let sum = 0
        for (let j = 0; j < arr.length; j++) {
            if (Number(arr[j]) <= maxDigit) {
                sum = sum + Number(arr[j])
                // console.log(arr.length)
                if (sum == Number(21) && arr[j + 1] == undefined) {
                    console.log(i)
                }
            } else {
                break
            }

        }
    }
}

decomposeArray(8)