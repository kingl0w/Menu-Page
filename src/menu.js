import beef from '../assets/beefspinach.jpg';
import lamb from '../assets/lamb.jpg';
import salmon from '../assets/salmon.jpg';
import soup from '../assets/sandwichsoup.jpg';
import shrimp from '../assets/shrimp.jpg';
import squash from '../assets/squashrav.jpg';
import pepper from '../assets/stuffedpepper.jpg';
import sandwich from '../assets/turkeysandwich.jpg';


function activateBtn(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');

    const home = document.getElementById(id);
    home.classList.add('active');
}

function createMenuItem(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('food');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const description = document.createElement('div');
    description.classList.add('description');

    const foodName = document.createElement('h3');
    foodName.textContent = text;

    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;

    description.appendChild(foodName);
    description.appendChild(foodPrice);

    food.appendChild(img);
    food.appendChild(description);
    return food;
}

export default function loadMenu() {
    const content = document.getElementById('main-content');
    content.classList.add('grid-layout');
    content.classList.remove('flex-layout');

    content.textContent = '';
    activateBtn('menu');

    const foods = [
        createMenuItem(
            lamb,
            'Lamb Kebab',
            '$18',
            'Delicious fresh kebab'
        ),
        createMenuItem(
            salmon,
            'Lemon Salmon',
            '$21',
            'Wild caught atlantic salmon'
        ),
        createMenuItem(
             beef,
            'Beef in Aus Jus',
            '$23',
            'Succulent beef served in aus jus'
        ),
        createMenuItem(
            soup,
            'Tomato Soup and Slider',
            '$16',
            'Fresh tomato soup with a chicken slider'
        ),
        createMenuItem(
            shrimp,
            'Thai Coconut Shrimp',
            '$16',
            'Crispy shrimp with tangy sauce'
        ),
        createMenuItem(
            squash,
            'Butternut Squash Ravioli',
            '$17',
            'Seasonal butternut squash in homemade ravioli'
        ),
        createMenuItem(
            pepper,
            'Stuffed Pepper',
            '$16',
            'Pepper stuffed with southwest style filling'
        ),
        createMenuItem(
            sandwich,
            'Turkey Sandwich',
            '$16',
            'Turkey sandwich on ancient grain bread'
        )
    ];

    foods.forEach((food) => {
        content.appendChild(food);
    });
}