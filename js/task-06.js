const input = document.getElementById('validation-input');

input.addEventListener('blur', onChangeColor);

function onChangeColor(event){
    
    if(event.currentTarget.value.length === 6){
        input.classList = 'valid';
    } else input.classList = 'invalid';
    
};