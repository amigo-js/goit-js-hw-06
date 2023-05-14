const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients"); //getting the list of ingredients

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li"); //li element creation
  item.textContent = ingredient; // adding ingredient text content
  item.classList.add("item"); // adding item class
  return item;
});

ingredientsList.append(...ingredientsItems); // past all the elements of the list into ingredient list
