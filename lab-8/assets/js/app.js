const form = document.querySelector('form');
const text = document.querySelector('#text-value');
const result = document.querySelector('#result');
const btnClear = document.querySelector('#btn-clear');

form.addEventListener('submit', (e) => {
    calc();
    e.preventDefault();
});

const calc = () => {
    const count = {};
    const text2 = text.value;
    const newText = text2.split("");
    for (const element in newText) {
        count[newText[element]] = (newText[element] in count) ? count[newText[element]] + 1 
                                                              : count[newText[element]] = 1;
    }
    result.innerHTML = `<p class="format-text">${Object.keys(count)}</p>`;
    console.log({count});
    btnClear.style.visibility = 'visible';
}

const clear = () => {
    form.reset();
    result.innerHTML = '';
    text.innerHTML = '';
    btnClear.style.visibility = 'hidden';
}

btnClear.addEventListener('click', clear);
