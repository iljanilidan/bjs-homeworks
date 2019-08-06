let animal = new Object({frog: 'kwa-kwa', lion: 'arrrgh'});

function soundText(animal) {
    
  if (animal === undefined) {
    return null;
  } else {
    let sound = Object.values(animal);
    return sound;
  }
}

soundText(animal);


*****************************************************************************************************
    
    
let marks = {
algebra: [2,3,4,5,6],
geometry: [6,7,8,9,10],
russian: [5,4,3,2,1],
physics: [2,2,3,4,5],
music: [5,5,5,5,5],
english: [1,1,1,1,1],
poety: [2,2,2,2,2],
chimestry: [3,3,3,3,3],
french: [4,4,5,4,4],
};

function finalGrades(marks) {
  function averageValue(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average = sum/arr.length;
    return average;
  }

  for (let key in marks) {
    marks[key] = averageValue(marks[key]);
  }
  marks.average = averageValue(Object.values(marks));
  marks.roundedAverage = Math.round(marks.average);
  let roundedAverage = marks.roundedAverage;
  return roundedAverage;
}


finalGrades(marks);