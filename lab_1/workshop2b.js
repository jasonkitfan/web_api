"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var email;
var result;
do {
    email = String(readline.question('enter email for checking: ')).trim();
    result = expression.test(email);
    console.log("e-mail (".concat(email, ") is ").concat(result ? 'correct' : 'incorrect'));
} while (email !== "exit");
