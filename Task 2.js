function checkingNumber (number) {
    let variant
    if (number > 1000) {
        console.log ('Данные неверны');
    } else if (number === 0) {
      console.log ('Введенное значение равно нулю');
    } else if (number === 1) {
      console.log ('Введенное значение равно единице');
    }  else {for (let i = 2, i < number; i++) {
       if (number % i === 0 ){
          variant = 1; i = number;
       } else if (number % i !== 0) {
          variant = 0
       }
    }
    if (option === 0){
        console.log ('Введенное число простое');
    } else console.log ('Введенное число составное');
    }
};
 checkingNumber(39);