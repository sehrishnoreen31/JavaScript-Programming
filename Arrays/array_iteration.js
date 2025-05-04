const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// map items breakfast
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>${index + 1}. ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// foreach items main course
let mainCourseMenuItem='';
mainCourseMenu.forEach((item,index) => {
    mainCourseMenuItem += `<p>${index + 1}. ${item}</p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseMenuItem;

// for items breakfast
let dessertMenuItems = '';
for (let index = 0; index < dessertMenu.length; index++) {
    dessertMenuItems += `<p>${index + 1}. ${dessertMenu[index]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItems;

