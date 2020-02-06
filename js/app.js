const container = document.querySelector('.container');
const coffees = [
  { name: 'Jamaican', image: 'images/coffee.svg' },
  { name: 'Turkish', image: 'images/coffee.svg' },
  { name: 'Nicaraguan', image: 'images/coffee.svg' },
  { name: 'Sumatran', image: 'images/coffee.svg' },
  { name: 'French', image: 'images/coffee.svg' },
  { name: 'Italian', image: 'images/coffee.svg' },
  { name: 'Moroccan', image: 'images/coffee.svg' },
  { name: 'Venezuelan', image: 'images/coffee.svg' },
  { name: 'Costa Rican', image: 'images/coffee.svg' },
];

const showCoffees = () => {
  let output = '';
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);
