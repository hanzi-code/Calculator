let inputField = document.querySelector("#inputField");

document.querySelector("#backspace").addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
});

document.querySelector("#allClear").addEventListener('click', () => {
    inputField.value = '';
});