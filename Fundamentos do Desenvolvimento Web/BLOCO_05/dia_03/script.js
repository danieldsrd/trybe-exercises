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