const newP = document.createElement('p');
newP.textContent = `Hey I'm red!`;
document.body.appendChild(newP);
newP.style.color = "red";

const newH3 = document.createElement('h3');
newH3.textContent = `I'm a blue h3!`;
document.body.appendChild(newH3);
newH3.style.color = "blue";

const div = document.createElement('div');
// div.textContent = `Custom border`;
div.style.borderWidth = '3px';
div.style.borderStyle = 'solid';
div.style.padding = '30px';
div.style.display = 'flex';
div.style.margin = '.5rem';
div.style.minHeight = '1rem';
div.style.flexGrow = 1;
document.body.appendChild(div);

const heading = document.createElement('h1');
heading.textContent = `I'm in a div`;
div.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = `ME TOO!`;
div.appendChild(paragraph);










