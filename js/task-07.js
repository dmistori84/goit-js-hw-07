const scrollBar = document.getElementById('font-size-control');
const text = document.getElementById('text');

scrollBar.addEventListener('input', onResizeText);

function onResizeText(event){

    text.style.fontSize = `${event.target.value}px`;
};