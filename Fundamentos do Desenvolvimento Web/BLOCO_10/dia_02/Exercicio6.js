const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimal = Animals.find((elem) => elem.name === name);      
      if (arrayAnimal) {        
        return resolve(arrayAnimal);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalByAge = Animals.find((elem) => elem.age === age);      
      if (animalByAge) {        
        return resolve(animalByAge);
      }
      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(animal => animal);
};

module.exports = {getAnimal, getAnimalByAge};