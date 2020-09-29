const allItems = document.querySelectorAll('.item');
console.log(`В списке ${allItems.length} категории.`);

Array.prototype.forEach.call(allItems, (element) => {
    const title = element.querySelector('h2').textContent;
    const items = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${items}`);
});

// const allCatigories = allItems.forEach((element) =>
//   console.log(
//     `Категория: ${element.querySelector("h2").textContent}
//     Количество элементов: ${element.querySelectorAll("li").length}`
//   )
// );