// ======= 1 =======
const listByCategory = document.querySelector('#categories');
const countOfCategory = listByCategory.children.length; 

console.log(`В списке ${countOfCategory} категории`);
// ======= 1 =======

// ======= 2 =======
const listCategiryItem = document.querySelectorAll('#categories .item');

listCategiryItem.forEach(item => {
    item.querySelectorAll('h2')
    .forEach(name => console.log(`Категория: ${name.textContent}`)),
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
// ======= 2 =======
