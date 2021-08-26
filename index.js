const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const label = document.querySelector("#label");
const nextButton = document.querySelector("#next-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector(".change-table");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

table.style.display = "none";
checkButton.style.display = "none";
label.style.display = "none";
cashGiven.style.display = "none";

const validateCash = () => {
  givenCash = Number(cashGiven.value);
  totalBill = Number(billAmount.value);
  //   console.log(typeof givenCash);
  hideMessage();
  if (!isNaN(givenCash) && givenCash > 0) {
    if (givenCash >= totalBill) {
      console.log(givenCash >= totalBill);
      const amountToBeReturned = givenCash - totalBill;
      calcuateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided is less than the bill Amount, Do you wanna do the dishes?"
      );
      table.style.display = "none";
    }
  } else {
    showMessage("Please provide cash");
    table.style.display = "none";
  }
};

const validateBillAmount = () => {
  hideMessage();
  if (!isNaN(billAmount.value) && billAmount.value > 0) {
    checkButton.style.display = "block";
    label.style.display = "block";
    cashGiven.style.display = "block";
  }
  if (billAmount.value < 0) {
    showMessage("Enter a number greater than 0");
    table.style.display = "none";
  } else showMessage("Enter a number greater than 0");
};

const showMessage = (errorMessage) => {
  message.style.display = "block";
  message.innerText = errorMessage;
};

const hideMessage = () => {
  message.style.display = "none";
};

const calcuateChange = (amountToBeReturned) => {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
  table.style.display = "block";
};

nextButton.addEventListener("click", validateBillAmount);

checkButton.addEventListener("click", validateCash);
