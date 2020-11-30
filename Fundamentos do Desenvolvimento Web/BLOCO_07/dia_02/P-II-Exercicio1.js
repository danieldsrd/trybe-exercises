const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addObject = (newObject, newKey, valueNewKey) => {
  newObject[newKey] = valueNewKey;
}
addObject(lesson2, 'turno', 'manhã');
console.log(lesson2);

const keysList = (object) => {
  const arrayOfKeys = Object.keys(object);  
  for(i in arrayOfKeys) {
    console.log(`${arrayOfKeys[i]}`);
  }
}

keysList(lesson2);

const keysLength = (object) => {
  const arrayOfKeys = Object.keys(object);  
  console.log(arrayOfKeys.length);
}

keysLength(lesson2);

const valuesList = (object) => {
  const arrayOfValues = Object.values(object);  
  for(i in arrayOfValues) {
    console.log(`${arrayOfValues[i]}`);
  }
}

valuesList(lesson2);

const allLessons = Object.assign({}, {lesson1: lesson1, lesson2: lesson2, lesson3: lesson3});
console.log(allLessons);

const sumStudents = (array) => {
  let sum = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index +=1) {
    sum = sum + Object.values(allLessons)[index].numeroEstudantes;    
  } 
  console.log(sum);
}

sumStudents(allLessons);

const getValueByNumber = (object, key) => {
  const value = Object.entries(object);  
  console.log(value[key][1]);
}

getValueByNumber(lesson1, 0);

const verifyPair = (object, key, value) => {
  const arrayKeys = Object.keys(object);
  const arrayValues = Object.values(object);
  let returnValue; 
  for (let index = 0; index < arrayKeys.length; index+=1) {
    if (arrayValues[index] === value && arrayKeys[index] === key) {
      returnValue = `true`;
    } else {
      returnValue = `false`;
    }
  }  
  console.log(returnValue);
}

verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson3, 'materia', 'Maria Clara');

const countStudents = (array) => {
  let sum = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index +=1) {
    if (Object.values(allLessons)[index].materia === 'Matemática') {
      sum = sum + Object.values(allLessons)[index].numeroEstudantes;
    }
  }  
  console.log(sum);
}

countStudents(allLessons);

const createReport2 = (array, teacher) => {
  let arrayLessons = [];
  let sumStudents = 0;
  for (let index = 0; index < Object.keys(allLessons).length; index +=1) {
    if (Object.values(allLessons)[index].professor === teacher) {
      sumStudents = sumStudents + Object.values(allLessons)[index].numeroEstudantes;
      arrayLessons.push(Object.values(allLessons)[index].materia);
    }      
  }
  const newObject = {
    professor: teacher,
    aulas: arrayLessons,
    estudantes: sumStudents,
  };  
  console.log(newObject);
}

createReport2(allLessons, 'Maria Clara');