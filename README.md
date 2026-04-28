# 🏦 Bankist App

A modern **Banking UI Simulation** built using **Vanilla JavaScript**, HTML, and CSS.
This project demonstrates core JavaScript concepts such as DOM manipulation, array methods, event handling, and UI state management.

🔗 **Live Demo:** https://bankist-app-247.netlify.app

---

# 📌 Project Overview

**Bankist** is a simple front-end banking application that allows users to:

* Log in securely using username and PIN
* View account balance
* Track transaction history
* Transfer money to other users
* Request loans
* Close accounts
* Sort transactions
* Automatically update UI after every action

The app simulates a **real-world banking workflow** entirely on the client side.

---

# 🧠 Features

## 🔐 Login System

* Users log in using:

  * Username
  * PIN
* Usernames are automatically generated from account owner names.
* After login:

  * Welcome message is displayed
  * Current date & time is shown
  * Account data is loaded dynamically

---

## 💰 Account Balance

Displays:

* Total balance
* Updated in real time
* Calculated using array reduction

Example logic:

```javascript
acc.balance = acc.movements.reduce(
  (acc, mov) => acc + mov,
  0
);
```

---

## 📜 Transaction History

Shows:

* Deposits
* Withdrawals
* Transaction dates
* Formatted dates (Today, Yesterday, etc.)

Transactions are dynamically rendered in the UI.

---

## 🔄 Money Transfer

Users can:

* Transfer money to another account
* Automatically update both sender and receiver accounts
* Record transaction dates
* Refresh UI instantly

Conditions:

* Amount must be greater than 0
* Receiver must exist
* Cannot transfer to self

---

## 🏦 Loan Request

Users can request a loan.

Loan approval condition:

* User must have a deposit ≥ **10% of requested loan**

Example:

```javascript
mov >= amount * 0.1
```

If approved:

* Loan amount is added
* UI updates automatically

---

## 📊 Summary Section

Displays:

* Total deposits
* Total withdrawals
* Earned interest

Interest is calculated only if ≥ ₹1.

---

## 🔃 Sort Transactions

Users can:

* Sort transactions in ascending order
* Toggle sorting on/off

---

## ❌ Close Account

Users can delete their account by:

* Confirming username
* Entering PIN

Account is removed from the system.

---

## ⏱ Logout Timer (UI Feature)

The app includes a logout timer display that simulates automatic logout behavior.

---

# 🧪 Test Accounts

Use these credentials to test the app:

| User | PIN  |
| ---- | ---- |
| js   | 1111 |
| jd   | 2222 |
| stw  | 3333 |
| ss   | 4444 |

---

# 🏗️ Project Structure

```
bankist-app/
│
├── index.html     # Main HTML layout
├── style.css      # Styling and layout
├── script.js      # Application logic
├── logo.png       # App logo
├── icon.png       # Favicon
├── README.md      # Documentation
```

---

# 🧩 Technologies Used

* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (ES6+)
* DOM Manipulation
* Array Methods

  * map()
  * filter()
  * reduce()
  * find()
  * sort()

---

# ⚙️ Core JavaScript Concepts Practiced

This project demonstrates:

* Event Handling
* DOM Selection
* UI Rendering
* Data Modeling
* Array Transformations
* Date Handling
* Conditional Logic
* Modular Functions

---

# 🔄 Application Workflow

Main workflow:

1. User logs in
2. Credentials validated
3. UI loads account data
4. User performs actions:

   * Transfer
   * Loan
   * Sort
   * Close account
5. UI updates automatically

---

# 📸 UI Features

* Modern banking interface
* Gradient-based transaction indicators
* Responsive grid layout
* Animated UI appearance
* Clean typography (Poppins font)

---

# 🚀 Deployment

This project is deployed using:

**Netlify**

Live URL:

https://bankist-app-247.netlify.app

---

# 📈 Learning Outcomes

Through this project, I learned:

* How to build dynamic UI using JavaScript
* How to manage application state
* How to work with arrays efficiently
* How to structure real-world logic flows
* How to simulate banking features

---

# 🛠 Future Improvements

Possible enhancements:

* Add authentication security
* Add persistent storage (LocalStorage / Database)
* Add dark mode
* Add currency formatting
* Add real logout countdown logic
* Make fully responsive for mobile

---

# ⭐ If you like this project

Give it a **star ⭐** on GitHub!
