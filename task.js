function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult() {
  let disc = b**2 - 4*a*c;

  if (disc < 0) {
    return 'Корней нет';
  } 
    else if (disc === 0) {
    let x = (-b / 2*a);
    return x;
  } else if (disc > 0) {

    let x1 = (-b + disc) /  2*a;
    let x2 = (-b - disc) /  2*a;

    let arr;
    return arr = [x1, x2];
  }
};

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}


function getAverageMark(marks) {
  let sum = 0;

  if (marks.length > 5) {
    console.log("Слишком много оценок!")
    marks.splice(5);
    // return; Не возвращая значение он выводит и сообщение и считает среднее значение от пяти элементов
  }

  for (let j = 0; j < marks.length; j++) {
    sum += marks[j];
  }

    let result = sum / marks.length;
    console.log(result);

};

getAverageMark([1,2,3,4,5]);