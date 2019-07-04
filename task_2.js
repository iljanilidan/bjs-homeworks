"use strict";

function returnPayment(percent, sumContribution, sumCredit, time) {
percent = percent / 12;
let returnToBank = sumCredit - sumContribution;
let mounthPayment = sumCredit * (percent+percent/(((1+percent)**time)-1));
let allSum = (mounthPayment * time) + returnToBank;
  return allSum;
}

console.log(returnPayment(10,1000,50000,12));

//******************************************************************************************


function helloWorld(name) {
  if (name) {
    return `Привет, мир! Меня зовут ${name}`;
  } else {
    return `Привет, мир! Меня зовут "Аноним"`
  };

};

console.log(helloWorld());