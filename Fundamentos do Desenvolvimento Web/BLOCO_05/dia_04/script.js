let nodeBgColor = document.querySelector('#background-colortxt');
nodeBgColor.addEventListener('keyup', function(event) {
    let txtBgColor = document.getElementById('background-colortxt').value;      
    if (event.key === 'Enter') {        
        if (document.getElementById('background-colortxt').value == '') {
            alert('Espaço vazio! Erro ao adcionar cor de fundo!!')
        } else {
            document.body.style.background = document.getElementById('background-colortxt').value;
        }
    }
});

let nodeTypeFont = document.querySelector('#font-family-type');
nodeTypeFont.addEventListener('keyup', function(event) {
    let txtTypeFont = document.getElementById('font-family-type').value;      
    if (event.key === 'Enter') {        
        if (document.getElementById('font-family-type').value == '') {
            alert('Espaço vazio! Erro ao adcionar tipo de fonte!!')
        } else {
            document.body.style.fontFamily = document.getElementById('font-family-type').value;
        }
    }
});

let nodeTxtColor= document.querySelector('#color-text');
nodeTxtColor.addEventListener('keyup', function(event) {
    let txtColor = document.getElementById('color-text').value;      
    if (event.key === 'Enter') {        
        if (document.getElementById('color-text').value == '') {
            alert('Espaço vazio! Erro ao adcionar tipo de fonte!!')
        } else {
            document.body.style.color = document.getElementById('color-text').value;
        }
    }
});

let nodeFontSize= document.querySelector('#font-size');
nodeFontSize.addEventListener('keyup', function(event) {
    let fontSize = document.getElementById('font-size').value;      
    if (event.key === 'Enter') {        
        if (document.getElementById('font-size').value == '') {
            alert('Espaço vazio! Erro ao adcionar o valor da fonte!!')
        } else {
            document.body.style.fontSize = document.getElementById('font-size').value + 'px';
        }
    }
});

let nodeLineHeight= document.querySelector('#line-height');
nodeLineHeight.addEventListener('keyup', function(event) {
    let lineHeight = document.getElementById('line-height').value;      
    if (event.key === 'Enter') {        
        if (document.getElementById('line-height').value == '') {
            alert('Espaço vazio! Erro ao adcionar o valor do espaçamento!!')
        } else {
            document.body.style.lineHeight = document.getElementById('line-height').value;
        }
    }
});

let bttnReset = document.getElementById('btn-reset');
bttnReset.addEventListener('click', function (){
    document.body.style.background = '';
    document.body.style.fontFamily = '';
    document.body.style.color = '';
    document.body.style.fontSize = '';
    document.body.style.lineHeight = '';
})