let abrevStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
let states = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];

function createOptionsState() {
    for (let index = 0; index < states.length; index++) {
        let optionState = document.createElement('option');
        optionState.textContent = states[index];
        optionState.value = abrevStates[index];
        document.querySelector('#input-estado').appendChild(optionState);
    }
}
createOptionsState();

document.querySelector('#criar-cv').addEventListener('click', function (e){
    e.preventDefault();
    let pName = document.createElement('p');
    pName.textContent = "Nome Completo: "+document.querySelector('#nome-completo').value;
    document.querySelector('#cv-montado').appendChild(pName);
    let pEmail = document.createElement('p');
    pEmail.textContent = "Email: "+document.querySelector('#input-email').value;
    document.querySelector('#cv-montado').appendChild(pEmail);
    let pCPF = document.createElement('p');
    pCPF.textContent = "CPF: "+document.querySelector('#input-cpf').value;
    document.querySelector('#cv-montado').appendChild(pCPF);
    let pAdress = document.createElement('p');
    pAdress.textContent = "Endereço: "+document.querySelector('#input-endereco').value;
    document.querySelector('#cv-montado').appendChild(pAdress);
    let pCity = document.createElement('p');
    pCity.textContent = "Estado: "+document.querySelector('#input-cidade').value;
    document.querySelector('#cv-montado').appendChild(pCity);
    let pState = document.createElement('p');
    pState.textContent = "Estado: "+document.querySelector('#input-estado').value;
    document.querySelector('#cv-montado').appendChild(pState);
    let pWork = document.createElement('p');
    pWork.textContent = "Experiência Profissional: "+document.querySelector('#textarea-1').value
    document.querySelector('#cv-montado').appendChild(pWork);
    let pRole = document.createElement('p');
    pRole.textContent = "Cargo: "+document.querySelector('#input-cargo').value
    document.querySelector('#cv-montado').appendChild(pRole);
    let pJobFunction = document.createElement('p');
    pJobFunction.textContent = "Descrição do cargo: "+document.querySelector('#input-descr').value
    document.querySelector('#cv-montado').appendChild(pJobFunction);
    let pInitialDate= document.createElement('p');
    pInitialDate.textContent = "Data de Inicío: "+document.querySelector(' #input-data').value
    document.querySelector('#cv-montado').appendChild(pInitialDate);
});