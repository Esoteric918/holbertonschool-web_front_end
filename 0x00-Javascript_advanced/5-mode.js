function changeMode(size, weight, transform, background, color) {
  return () => {
  document.body.style.fontSize = size;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
  }
}

function main() {
  spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* add p tag with txt */
  const para = document.createElement('p');
  const node = document.createTextNode('Welcome Holberton!');
  para.appendChild(node);
  document.body.appendChild(para);


  /* add spooky button */

  let body = document.body;
  body.innerHTML += '<button onclick="spooky()">Spooky</button>'

  /* add Dark Mode button */
  body.innerHTML += '<button onclick="darkMode()">Dark mode</button>'

  /* add Scream Mode button */
  body.innerHTML += '<button onclick="screamMode()">Scream mode</button>'
}
main();
