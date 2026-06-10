const myButton = document.querySelector('#sortear');
const myInputMin = document.querySelector('.number-control__input-min');
const myInputMax = document.querySelector('.number-control__input-max');
const myEndResult = document.querySelector('.result-value');
const myClearButton = document.querySelector('#limpar');
const btnMenosMin = document.querySelectorAll('.number-control__menos')[0];
const btnMaisMin = document.querySelectorAll('.number-control__mais')[0];
const btnMenosMax = document.querySelectorAll('.number-control__menos')[1];
const btnMaisMax = document.querySelectorAll('.number-control__mais')[1];

const generateNumber = () => {
    const inputMinValue = parseInt(myInputMin.value);
    const inputMaxValue = parseInt(myInputMax.value);

    if (isNaN(inputMinValue) || isNaN(inputMaxValue)) {
        alert('Por favor, preencha os valores mínimo e máximo.');
        return;
    }

    if (inputMinValue >= inputMaxValue) {
        alert('O valor mínimo deve ser MENOR que o valor máximo.');
        return;
    }

    const randomNumber = Math.floor(Math.random() * (inputMaxValue - inputMinValue + 1)) + inputMinValue;

    myEndResult.innerHTML = randomNumber;
}

const clearResult = () => {
    myInputMin.value = '';
    myInputMax.value = '';
    myEndResult.innerHTML = '00';
}

btnMaisMin.addEventListener('click', () => {
    myInputMin.value = (parseInt(myInputMin.value) || 0) + 1;
});

btnMenosMin.addEventListener('click', () => {
    myInputMin.value = (parseInt(myInputMin.value) || 0) - 1;
});

btnMaisMax.addEventListener('click', () => {
    myInputMax.value = (parseInt(myInputMax.value) || 0) + 1;
});

btnMenosMax.addEventListener('click', () => {
    myInputMax.value = (parseInt(myInputMax.value) || 0) - 1;
});

myButton.addEventListener('click', generateNumber);
myClearButton.addEventListener('click', clearResult);