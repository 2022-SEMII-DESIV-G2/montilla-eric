(() => {
    const form = document.querySelector('#form');
    const text = document.querySelector('#text-value');
    const result = document.querySelector('#result');
    const btnClear = document.querySelector('#btn-clear');
    const count = {};

    form.addEventListener('submit', (e) => {
        calc();
        e.preventDefault();
    });

    const calc = () => {
        const text2 = text.value;
        const newText = text2.split("");
        for (const element in newText) {
            count[newText[element]] = (newText[element] in count) ? count[newText[element]] + 1 
                                                                  : count[newText[element]] = 1;
        }
        const key = Object.keys(count);
        const value = Object.values(count);
        for (let i = 0; i < key.length; i++) {
            result.innerHTML += `<p class="format-text">${key[i]} = ${value[i]}</p>`;
        }
        btnClear.style.visibility = 'visible';
    }

    const clear = () => {
        location.reload();
        result.innerHTML = '';
        btnClear.style.visibility = 'hidden';
    }

    btnClear.addEventListener('click', clear);
})();
