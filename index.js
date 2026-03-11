// SELECT ELEMENTS

const amount = document.getElementById("amount");
const years = document.getElementById("years");
const interest = document.getElementById("interest");

const repayment = document.getElementById("repayment");
const interestOnly = document.getElementById("interest-only");

const calculateBtn = document.getElementById("calculate");
const clearBtn = document.getElementById("clear");

const results = document.getElementById("results");



// CALCULATE BUTTON

calculateBtn.addEventListener("click", function () {

    const loanAmount = parseFloat(amount.value);
    const loanYears = parseFloat(years.value);
    const interestRate = parseFloat(interest.value);

    // VALIDATION

    if (!loanAmount || !loanYears || !interestRate) {

        results.innerHTML = `
        <div class="result-content">
        <h3>Error</h3>
        <p>Please fill in all fields</p>
        </div>
        `;

        return;
    }


    const monthlyInterest = interestRate / 100 / 12;
    const totalMonths = loanYears * 12;

    let monthlyPayment;


    // REPAYMENT MORTGAGE

    if (repayment.checked) {

        monthlyPayment =
        loanAmount *
        (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
        (Math.pow(1 + monthlyInterest, totalMonths) - 1);

    }


    // INTEREST ONLY

    if (interestOnly.checked) {

        monthlyPayment = loanAmount * monthlyInterest;

    }


    const totalRepayment = monthlyPayment * totalMonths;
    const totalInterest = totalRepayment - loanAmount;


    // SHOW RESULT

    results.innerHTML = `
    <div class="result-content">

        <h3>Your results</h3>

        <p>Your monthly repayments</p>

        <h1>£${monthlyPayment.toFixed(2)}</h1>

        <p>Total repayment: £${totalRepayment.toFixed(2)}</p>

        <p>Total interest: £${totalInterest.toFixed(2)}</p>

    </div>
    `;

});



// CLEAR BUTTON

clearBtn.addEventListener("click", function (e) {

    e.preventDefault();

    amount.value = "";
    years.value = "";
    interest.value = "";

    repayment.checked = false;
    interestOnly.checked = false;

    results.innerHTML = `
    <div class="result-content">
        <img src="assets/images/illustration-empty.svg">

        <h3>Results shown here</h3>

        <p class="p">
        Complete the form and click “calculate repayments”
        <br>to see what your monthly repayments would be.
        </p>
    </div>
    `;
});