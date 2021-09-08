const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

function getCount() {
    let count = 0;

    function increment(){
        return count += 1;
    };
    function decrement(){
        return count -= 1;
    };

    return { increment, decrement };
};

const varStoringValue = getCount();

decBtn.addEventListener('click', () => {
    let counterValue = varStoringValue.decrement();
    counter.textContent = counterValue;
});

incBtn.addEventListener('click', () => {
    let counterValue = varStoringValue.increment();
    counter.textContent = counterValue;
});