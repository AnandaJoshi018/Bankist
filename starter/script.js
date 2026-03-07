'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function(movements){
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
 
  const type = mov > 0 ? 'deposit' : 'withdrawal';

  const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type} </div> 
        <div class="movements__value">${mov}</div>
    </div>
  `;

   containerMovements.insertAdjacentHTML('afterbegin', html);

  });

};
// To check movements displayMovements(account1.movements);

const calcDisplayBalence = function(acc) {
  acc.balence = acc.movements.reduce((acc,mov) => acc+mov,0); 
   //reduce() is an array method that reduces an array into a single value
  //Like above line --> array.reduce((accumulator, currentValue) => {}, initialValue)
  //movements = [200, -100] 
  //Iteration 1  :acc = 0(initial),mov = 200 ➡️ acc + mov = 200
  //teration 2 :acc = 200 , mov = -100 ➡️   acc + mov = 100
  labelBalance.textContent = `${acc.balence} RUPEES`;
}
// To check Balence calcDisplayBalence(account1.movements);

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
   .filter(mov => mov > 0) //filter() returns a new array.#Example💠[200, -100, 500, -50] ➡️ [200, 500]
   .reduce((acc,mov) => acc + mov , 0); //Give a single value for filterd array
  labelSumIn.textContent = `${incomes}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc,mov) => acc + mov , 0);
  labelSumOut.textContent = `${Math.abs(out)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate)/100) //map() transforms each element.[200,500]--Intersest Rate --->[2.4,6]
    .filter((int , i ,arr) => { //Ignore small interest (< 1₹) & returns a new array.
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc,int) => acc + int , 0); ////Give a single value for filterd array.
  labelSumInterest.textContent = `${interest}₹`;
};
//To check Summary -> calcDisplaySummary(account1.movements);


const createUsernames = function (accs) {
  accs.forEach(function (acc){
    acc.username = acc.owner
    .toLowerCase() //if word like Jonas Ps convert to jonas ps
    .split(' ')     // It splits jonas and ps as seperate strings
    .map(name => name[0]) // it only retrieve or select first charact of each array value like 'j','p'
    .join(''); //it joins as finally 'jp' this is username of owners.
  });
};
createUsernames(accounts); // to cjeck console.log(accounts);

const updateUI = function(acc){
  //Display movements
    displayMovements(acc.movements);

    //Display Balence
    calcDisplayBalence(acc);

    //Display Summary
    calcDisplaySummary(acc); 
}

//Login Implementation
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  //prevent form from submitting
  e.preventDefault(); //Stop page from refreshing **Normally,Forms refresh the page when submitted but here not we use prevent❌**

  //Find the account with matching username
  //user types usernames & find() searches the list and picks the matching account.
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value); //Check every account → is username equal to what user typed?
  console.log(currentAccount); 
  
  if(currentAccount?.pin === Number(inputLoginPin.value)){ // ?. means  ->“Only check pin IF account exists.” and string convert to number (EX:pin->"1111"(String)--into-->1111(number))
    //Display UI and Message
    labelWelcome.textContent = `Welcome back,
      ${currentAccount.owner.split(' ')[0]}`; //.split(' ') makes: if "Jonas Schmedtmann" then splie(' ') makes ["Jonas","Schmedtmann"] then [0] picks first Jonas 

    containerApp.style.opacity = 100; //before login invisible(dashboard) and after login visible

    //Clear/hide Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); //It blurs the blinking cursor like this '|' in password filed

    //Update UI    
    updateUI(currentAccount);
  }
});

//Transfer Amount Section

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ""; //To hide user details in transfer money box

  if(amount > 0 && receiveAcc && receiveAcc.username !== currentAccount.username){
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

  }
  
});

//Loan Amount Section
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => 
  mov >= amount * 0.1)){
    // Add Movements
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
    }
  inputLoanAmount.value = '';


});

//Close Account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if(inputCloseUsername.value == currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // To check console.log(index);

    //Delete Account
    accounts.splice(index,1);

    //Hide UI
    containerApp.style.opacity = 0;
 
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
