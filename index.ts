#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1, //Base Currency
  AUD: 1.52,
  EUR: 0.76,
  INR: 83.30,
  PKR: 277.78,
  CNY: 7.23,
  IRR: 42075.00,
  JPY:151.60,
  RUB: 92.58,
  SAR: 3.75,
  AED: 3.67,
  BDT: 109.70,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter Currency Exchange From",
    type: "list",
    choices: ["USD","AUD", "EUR", "INR", "PKR","CNY","IRR","JPY","RUB","SAR","AED"],
  },
  {
    name: "to",
    message: "Enter Exchange Currency Into",
    type: "list",
    choices: ["USD","AUD", "EUR", "INR", "PKR","CNY","IRR","JPY","RUB","SAR","AED"],
  },
  {
    name: "amount",
    message: "Enter Your Amount To Be Exchanged",
    type: "number",
  }
]);

  

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount // USD Base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
