let array = ["cake", 2, 4, null, 21, "pie"];

function checkingArrayElements () {
    let evenNumber = 0;
    let oddNumber = 0;
    let zeroNumber = 0;
    let stringValue = 0;
    let nullValue = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i]) === "string") {
    stringValue += 1;
    }
    else if (array[i] === null) {
        nullValue +=1
    }
    else if (array[i] === 0) {
        zeroNumber += 1;
    }
    else if (array[i] % 2 === 0) {
        evenNumber +=1
    }
    else {
        oddNumber += 1;
    }
}
    console.log (`количество чётных элементов в масссиве - ${evenNumber}`)
    console.log (`количество нечётных элементов в масссиве - ${oddNumber}`)
    console.log (`количество нулевых элементов в масссиве - ${zeroNumber}`)
    console.log (`количество значений null в масссиве - ${nullValue}`)
    console.log (`количество строчных элементов в масссиве - ${stringValue}`)
};

checkingArrayElements();
