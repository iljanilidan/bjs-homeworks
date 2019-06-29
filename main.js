function getSolutions(a,b,c) {

  let D = (Math.pow(b, 2)) - 4*a*c

  if (D < 0) {
    return { D: D }
  } else if (D === 0) {
    let x1 = -b / (2*a);
    return { roots: x1, D: D };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / 2*a;
    let x2 = (-b - Math.sqrt(D)) / 2*a;
    return { roots: [ x1, x2 ], D: D }
  }

  console.log(D);
};


function showSolutionsMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  let x;
  console.log("Вычисляем корни квадратного уравнения " + a + "x²+" + b + "x+" + c);
  console.log(" ");
  D = result.D;
  console.log("Значение дискреминанта:" + D);
  
  if (D < 0) {
    console.log("Уравнение не имеет вещественных корней")
  } else if (D === 0) {
    console.log("Уравнение имеет один корень X₁ = "+ result.roots)
  } else if (D > 0) {
    console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + "; X₂ = " + result.roots[1])
  }
}

showSolutionsMessage(2,4,2);



************************************************************************************************************************************
    
    
let data = {
algebra: [2,3,4,5,6],
geometry: [6,7,8,9,10],
russian: [5,4,3,2,1],
physics: [2,2,3,4,5],
music: [5,5,5,5,5],
english: [1,1,1,1,1],
poety: [2,2,2,2,2],
chimestry: [3,3,3,3,3],
french: [4,4,5,4,4]
};

function averageValue(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let average = sum/arr.length; 
  
  return average;
};

function summ(data) {
  let summa = averageValue(data.algebra) + averageValue(data.geometry) +  averageValue(data.russian) +averageValue(data.physics) + averageValue  (data.music) +averageValue(data.english) + averageValue(data.poety)   +averageValue(data.chimestry) + averageValue(data.french)

  function sizeObj(data) {
    let size = 0, key;
    for (key in data) {
        if (data.hasOwnProperty(key)) size++;
    }
    return size;
  }
  size = sizeObj(data);
  return summa/size;
  }

function getAverageScore(data) {

  data = {algebra: averageValue(data.algebra),
  geometry: averageValue(data.geometry),
  russian: averageValue(data.russian),
  physics: averageValue(data.physics),
  music: averageValue(data.music),
  english: averageValue(data.english),
  poety: averageValue(data.poety),
  chimestry: averageValue(data.chimestry),
  french: averageValue(data.french),
  average: summ(data)
  };
return data;
}

console.log(getAverageScore(data));