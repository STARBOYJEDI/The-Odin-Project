const p = document.querySelector('#p');
const content1 = document.createElement("p");
content1.textContent = "Hey I'm red!";
p.style.color = "red";
p.appendChild(content1);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
p.appendChild(h3);


const border = document.querySelector("#border");
const content2 = document.createElement("div");
content2.classList.add("content");
content2.textContent = "This is the glorious text-content!";
border.appendChild(content2);












