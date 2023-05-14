const categoriesList = document.querySelector("#categories"); // getting the list of categories
const categoriesItems = categoriesList.querySelectorAll(".item"); //getting items category

console.log(`Number of ${categoriesItems.length} categories.`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent; // getting text of the header
  const categoryItemsCount = item.querySelectorAll("li").length; //getting quantity of elements in category
  console.log(`Category: ${categoryTitle} \nElements: ${categoryItemsCount}`);
});
