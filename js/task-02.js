const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listIngred = document.querySelector('ul');
const elemListIngred = [];

for (let i = 0; i < ingredients.length; i += 1) {
  elemListIngred[i] = document.createElement('li');
  elemListIngred[i].textContent = ingredients[i];
  listIngred.appendChild(elemListIngred[i]);
};




