const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listIngred = document.querySelector('ul');

//Вариант через обычный for

//const elemListIngred;

// for (let i = 0; i < ingredients.length; i += 1) {
//   elemListIngred[i] = document.createElement('li');
//   elemListIngred[i].textContent = ingredients[i];
//   listIngred.appendChild(elemListIngred[i]);
// };

const createTag = array => 
  array.map(item => {
  const elemListIngred = document.createElement('li');
  elemListIngred.textContent = item;
    
  return elemListIngred;
  });
 

listIngred.append(...createTag(ingredients));
 




