function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // EXERCICIO 1
  
  
  let ulList = document.querySelector('#day');
 

  function createDays () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulList = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const daysList = dezDaysList[index];        
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = daysList;
        dayListItem.className = 'day';
        if (dayListItem.innerHTML.includes('24') || dayListItem.innerHTML.includes('31') || dayListItem.innerHTML.includes('25')) {
            dayListItem.classList.add('holiday')
        }
        if (dayListItem.innerHTML === '4' || dayListItem.innerHTML.includes('11') || dayListItem.innerHTML.includes('18') || dayListItem.innerHTML.includes('25')) {
            dayListItem.classList.add('friday');
        };         
    
        ulList.appendChild(dayListItem);
      };
  };
createDays();

// EXERCICIO 2

function createButton (string) {
    let button = document.createElement('button');
    button.innerHTML = string; 
    button.id = 'btn-holiday';
    let divMother = document.querySelector('.buttons-container');
    divMother.appendChild(button);
}
createButton("FERIADOS");

// EXERCICIO 3

function changeColorDay () {    
    let holiday = document.querySelectorAll('.holiday');          
    for (let index = 0; index < holiday.length; index +=1) {  
        if (holiday[index].style.background === 'black') {
            holiday[index].style.background = 'rgb(238,238,238)'; 
        } else        
        holiday[index].style.background = 'black';          
    } 
       
}
let button = document.querySelector('#btn-holiday');
button.addEventListener('click', changeColorDay); 

//EXERCICIO 4

function fridayButton (string) {
    let button = document.createElement('button');
    button.innerHTML = string; 
    button.id = 'btn-friday';
    let divMother = document.querySelector('.buttons-container');
    divMother.appendChild(button);
}
fridayButton("SEXTA-FEIRA");

// EXERCICIO 5

let friday = document.querySelectorAll('.friday');
let fridayArray = [];
for (let index = 0; index < friday.length; index +=1) { 
    fridayArray[index] = friday[index].innerHTML; 
};
function changeTextFriday () {           
    for (let index = 0; index < friday.length; index +=1) {         
        if (friday[index].innerHTML === 'SEXTOU!') {
            friday[index].innerHTML = fridayArray[index]; 
        } else        
        friday[index].innerHTML = 'SEXTOU!';          
    }        
}
let button2 = document.querySelector('#btn-friday');
button2.addEventListener('click', changeTextFriday); 

// EXERCICIO 6

const ulDays = document.querySelector('#days');

function aumentaFonte(ulDays) {
    ulDays.target.style.fontSize = '35px';
}

function diminuiFonte(ulDays) {
    ulDays.target.style.fontSize = '20px';
}

ulDays.addEventListener('mousemove', aumentaFonte);
ulDays.addEventListener('mouseout', diminuiFonte);


// EXERCICIO 7

function myTasks (string) {
    let myTaskSpan = document.createElement('span');
    myTaskSpan.innerHTML = string;
    let divTasks = document.querySelector('.my-tasks');
    divTasks.appendChild(myTaskSpan);
}

myTasks("Cozinhar!");

// EXERCICIO 8

function createDiv (string) {
    let divNova = document.createElement('div');
    divNova.className = 'task';
    divNova.style.background = string;
    let divMother = document.querySelector('.my-tasks');
    divMother.appendChild(divNova);
}
createDiv('red');



// EXERCICIO 9
let divColor = document.querySelector('.task') 

function eventClick () {       
    if (divColor.classList.contains('selected')) {
        divColor.classList.remove('selected');             
    } else {
        divColor.classList.add('selected');        
    }

}
divColor.addEventListener('click', eventClick);

// EXERCICIO 10
const ulDaysColor = document.querySelector('#days');

function changeColorDayTask (event) {    
    if (event.target.style.color == document.querySelector('.selected').style.background) {
        event.target.style.color = 'rgb(119,119,119)'
    } else {
        event.target.style.color = document.querySelector('.selected').style.background;
    }
} 
ulDaysColor.addEventListener('click', changeColorDayTask);


// EXERCICIO BONUS

function addCompromisso() {
    let txtName = document.getElementById('task-input').value;
    let ilAdd = document.createElement('li');    
    let ulAdd = document.querySelector('.task-list');
    ilAdd.innerHTML = txtName;    
    if (ilAdd.innerHTML == '') {
        alert('Espaço vazio! Erro ao adcionar!')
    } else {
        ulAdd.appendChild(ilAdd);
    }     
}
let button3 = document.querySelector('#btn-add');
button3.addEventListener('click', addCompromisso);

let node = document.querySelector('#task-input');
node.addEventListener('keyup', function(event) {
    let txtName = document.getElementById('task-input').value;
    let ilAdd = document.createElement('li');
    let ulAdd = document.querySelector('.task-list');    
    ilAdd.innerHTML = txtName;    
    if (event.key === 'Enter') {        
        if (ilAdd.innerHTML == '') {
            alert('Espaço vazio! Erro ao adcionar!')
        } else {
            ulAdd.appendChild(ilAdd);
        }
}});