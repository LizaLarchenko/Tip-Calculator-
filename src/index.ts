import './styles/main.scss';

const inputBillAmount = <HTMLInputElement>document.getElementById('bill-amount');
const tipBtns = document.querySelectorAll<HTMLButtonElement>(".tip");
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const numberOfPeople = <HTMLInputElement>document.getElementById('number-people');
const resetBtn = document.getElementById('reset');

let tipAmountResult: number = 0

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let percent = Number(btn.value) / 100;
    tipAmountResult = Number(inputBillAmount.value) * percent
    tipAmount.innerText = `$${tipAmountResult.toFixed(2)}`;
    console.log(tipAmountResult);
  });
});

numberOfPeople.addEventListener('keyup', function () {
  let result = Number(this.value) * tipAmountResult;
  totalAmount.innerText = `$ ${result.toFixed(2)}`;
});

resetBtn.addEventListener('click', () => {
  inputBillAmount.value = '';
  numberOfPeople.value = '';
  tipAmountResult = 0;
  tipAmount.innerText = '$0.00';
  totalAmount.innerText = '$0.00'
});