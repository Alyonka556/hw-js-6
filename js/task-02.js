// HTML містить порожній список ul#ingredients.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("ul#ingredients");

const newEl = ingredients.map((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.textContent = ingredient;
  itemEL.classList.add("item");
  return itemEL;
});

listEl.append(...newEl);
