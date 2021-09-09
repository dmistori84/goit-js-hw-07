const input = document.getElementById('validation-input');
const condition = input.dataset.length;

input.addEventListener('blur', onChangeColor);

function onChangeColor(event){
    
    if(event.currentTarget.value.length === Number(condition)){
        input.classList = 'valid';
    } else input.classList = 'invalid';
    
};