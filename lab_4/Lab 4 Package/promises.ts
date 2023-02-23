
import axios from 'axios';
import * as readline from 'readline-sync';

const url = 'https://api.apilayer.com/fixer';
const key = "gyoLjhjtmkX0BtTrRtI1A7r1NIs3jT2i";

const getInput = () => new Promise<String[]>((resolve) => {
  const base = readline.question("Enter base currency: ");
  const exchange = readline.question("Enter exchange currency: ");
  const amount = readline.question("Enter base amount: ");
  resolve([base, exchange, amount]);
});

const checkValidCurrencyCode = (input: String[]) => {
  console.log('Checking Valid Currency Code...');
  return new Promise<String[]>((resolve, reject) => {
    axios.get(`${url}/symbols`, {
      headers: {
        apikey: key
      }
    }).then(({ data, status }) => {
      if (status === 200) {
        const currency = data.symbols;
        if (!currency.hasOwnProperty(input[0]))
          reject(new Error(`invalid currency code ${input[0]}`));
        else
          resolve(input);
      }
      reject('Connection Error');
    }).catch((err) => {
      reject(err);
    })
  })
}

const getData = (input: String[]) => {
  console.log('Retrieving the rate...');
  return new Promise((resolve, reject) => {
    axios.get(`${url}/latest?base=${input[0]}&symbols=${input[1]}`, {
      headers: {
        apikey: key
      }
    }).then(({ data, status }) => {
      if (status === 200) {
        resolve([data, input[2]]);
      } else {
        reject('Connection Error');
      }
    }).catch((err) => {
      reject(err);
    })
  })
}

const printObject = (data: any) => new Promise<any>(resolve => {
  console.log(data[0]);
  console.log(data[1]);


  const indent = 2;
  const str = JSON.stringify(data[0], null, indent);
  console.log(str);
  resolve(null);
});

const exit = () => new Promise(() => {
  process.exit();
})

getInput()
  .then(checkValidCurrencyCode)
  .then(getData)
  .then(printObject)
  .then(exit)
  .catch(err => console.error(`error: ${err.message}`))
  .then(exit);
