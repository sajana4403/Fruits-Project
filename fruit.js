// script.js
const fruits = [
    { name: "Apple", img: "apple.jpg" },
    { name: "Banana", img: "banana.jpg" },
    { name: "Cherry", img: "cherry.jpg" },
    { name: "Date", img: "date.jpg" },
    { name: "Elderberry", img: "elderberry.jpg" },
    { name: "Fig", img: "fig.jpg" },
    { name: "Grape", img: "grape.jpg" },
    { name: "Strawberry", img: "strawberry.jpg" } // C:\Users\aashi\OneDrive\Desktop
];

const searchBar = document.getElementById('search-bar');
const suggestions = document.getElementById('suggestions');

searchBar.addEventListener('input', () => {
    const input = searchBar.value.toLowerCase();
    suggestions.innerHTML = '';
    if (input) {
        const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(input));
        filteredFruits.forEach(fruit => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.innerHTML = `<img src="${fruit.img}" alt="${fruit.name}"><span>${fruit.name}</span>`;
            div.addEventListener('click', () => {
                searchBar.value = fruit.name;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(div);
        });
    }
});
