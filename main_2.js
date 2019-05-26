"use strict";

let a = 2;
let b = 4;
let c = -3;


function getResult() {
  let disc = b**2 - 4*a*c;

  if (disc < 0) {
    console.log('Корней нет');
  } 
    else if (disc === 0) {
    return console.log(-b / 2*a);
  } else if (disc > 0) {

    let x1 = (-b + disc) /  2*a;
    let x2 = (-b - disc) /  2*a;

    let arr;
    return arr = [x1, x2];
  }
};

getResult();

//*******************************************************************

'use strict';

let marks = [1, 2, 3, 4, 5];
let quantity = marks.length;
let sum = 0;
let mean;


function getAverageMark() {
  for (let i = 0; i < quantity; i++) {
    if (marks[i] === undefined) {
    quantity = quantity - 1;
    } 
  }

  if (quantity > 5) {
    console.log("Слишком много оценок!")
    marks.splice(5,10);
  }

  for (let j = 0; j < quantity; j++) {
    sum += marks[j];
  }

  if (quantity <= 5) {
    let mean = sum / quantity;
    console.log(mean);
  }

};

getAverageMark();