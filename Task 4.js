function showNumbers(firstNumber, lastNumber) {
    let currentNumber = firstNumber;
    let intervalId = setInterval(function() {
        console.log(currentNumber);
        if (currentNumber == lastNumber) {
            clearInterval(intervalId);
        }
        currentNumber++;
    }, 1000);
}
showNumbers(6, 7)