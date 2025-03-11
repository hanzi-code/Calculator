let inputField = document.querySelector("#inputField");

document.querySelector("#backspace").addEventListener('click', () => {
    inputField.value = inputField.value.slice(0, -1);
});

document.querySelector("#allClear").addEventListener('click', () => {
    inputField.value = '';
});

document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener('click', () => {
        appendValue(button.textContent);
    });
});

document.querySelector("#point").addEventListener('click', () => {
    const currentValue = inputField.value;
    if (!currentValue.includes('.') && currentValue.length) {
        appendValue('.');
    } else {
        console.log("No more dots for you!")
    }
});

document.querySelectorAll(".operation").forEach((button) => {
    button.addEventListener('click', () => {
        appendValue(button.textContent);
    });
});

function appendValue(value) {
    inputField.value += value;
}