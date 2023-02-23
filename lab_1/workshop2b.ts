import * as readline from 'readline-sync'

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
let email: string;
let result: boolean;
do {
  email = String(readline.question('enter email for checking: ')).trim()
  result = expression.test(email);
  console.log(`e-mail (${email}) is ${result ? 'correct' : 'incorrect'}`);
} while (email !== "exit")
