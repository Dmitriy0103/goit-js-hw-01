const allItems = document.querySelectorAll('.item');

Array.prototype.forEach.call(allItems, (element) => {
    const title = element.querySelector('h2').textContent;
    const items = element.querySelectorAll('li').length;
    console.log(`Категория: ${title} / Количество элементов: ${items}`);
});