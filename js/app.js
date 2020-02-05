const container = document.querySelector('.container');
const coffees = [
  { name: 'Perspiciatis', image: 'images/coffee.svg' },
  { name: 'Voluptatem', image: 'images/coffee.svg' },
  { name: 'Explicabo', image: 'images/coffee.svg' },
  { name: 'Rchitecto', image: 'images/coffee.svg' },
  { name: ' Beatae', image: 'images/coffee.svg' },
  { name: ' Vitae', image: 'images/coffee.svg' },
  { name: 'Inventore', image: 'images/coffee.svg' },
  { name: 'Veritatis', image: 'images/coffee.svg' },
  { name: 'Accusantium', image: 'images/coffee.svg' },
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

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker
//       .register('/serviceWorker.js')
//       .then(res => console.log('service worker registered'))
//       .catch(err => console.log('service worker not registered', err));
//   });
// }
