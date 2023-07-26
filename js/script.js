const btn = document.getElementById('btn')

btn.addEventListener('click', () => {

    const form = document.querySelector('.concorrente');

    const tagInput = document.createElement('input');
    const tagInput2 = document.createElement('input');
    const tagLabel = document.createElement('label');
    const tagLabel2 = document.createElement('label');
    const tagBr = document.createElement('br');
    const tagBr2 = document.createElement('br');
    const tagBr3 = document.createElement('br');
    const tagBr4 = document.createElement('br');


    tagLabel.innerText = `Nome ${cont}:`;
    tagInput.type = 'text';
    tagInput.name = 'Nome do concorrente:';
    tagInput.placeholder = 'Nome...';
    tagLabel2.innerText = `link do site ${cont}:(opcional)`;
    tagInput2.type = 'text';
    tagInput2.name = 'Link:';
    tagInput2.placeholder = 'Link...';

    form.append(tagLabel, tagBr, tagInput, tagBr2, tagLabel2, tagBr3, tagInput2, tagBr4)

});

let cont = 1;

function contador() {
    cont++

};

const btn2 = document.getElementById('btn-2')

btn2.addEventListener('click', () => {

    const form = document.querySelector('.modelos');

    const tagInput = document.createElement('input');
    const tagLabel = document.createElement('label');
    const tagBr = document.createElement('br');
    const tagBr2 = document.createElement('br');

    tagLabel.innerText = `Site ${cont2}:`;
    tagInput.type = 'text';
    tagInput.name = 'Link do site:';
    tagInput.placeholder = 'Link...';
    tagInput.required

    form.append(tagLabel, tagBr, tagInput, tagBr2)

});

let cont2 = 1;

function contador2() {
    cont2++

};