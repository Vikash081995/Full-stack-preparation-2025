//DOM(Document Object Model)
//It is a programming interface for web documents.
//It represents the structure of the document as a tree of objects.

const img = document.getElementById("image");
console.dir(img);

const getElementByTag = document.getElementsByTagName("p");
console.dir(getElementByTag);

const header = document.getElementsByClassName("header");

const ul = document.getElementsByTagName("ul")[0];

console.log(header, ul);

const h1 = document.querySelector("h1");
console.log(h1);

const pg = document.querySelector("p");
console.log(pg);

const selectImage = document.querySelector("img");
console.log(selectImage);

const special = document.querySelector(".special");
console.log(special);

const lispeacial = document.querySelector("li.special");
console.log(lispeacial);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const specialClass = document.querySelectorAll(".special");
console.log(specialClass);

const lis = document.querySelectorAll("li");
console.log(lis);

///----------------------------------------
//Value,src,href
//----------------------------------------
const AllInputs = document.querySelectorAll("input");
console.log(AllInputs, "all inputs");
console.log(AllInputs[0].value);
inputs[0].value = "hello";
console.log(AllInputs[0].value);
console.log(AllInputs[1].placeholder);
const anchor = document.querySelector("a");
console.log(anchor.href);
const image = document.querySelector("img");
console.log(image.src);
//----------------------------------------
//getting and setting attributes
//----------------------------------------
const range = document.querySelector('input[type="range"]');
console.log(range.getAttribute('max'))
console.log(range.getAttribute('min'))
range.setAttribute('min', '-500')
console.log(range.getAttribute('min'))
//===========================================
//Finding parent, children, siblings
//===========================================
const firstLI = document.querySelector("li");
console.log(firstLI.parentElement);
console.log(firstLI.parentElement.parentElement);
console.log(firstLI.parentElement.parentElement.parentElement);
const firstul = document.querySelector("ul");
console.log(firstul.children);
console.log(firstul.children[0]);
const firstLi = document.querySelector("li");
console.log(firstLi.previousElementSibling);
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.nextElementSibling);
//===========================================
//changing multiple elements
//===========================================
const allLis = document.querySelectorAll("li");

for (let i = 0; i < allLis.length; i++) {
    console.log(allLis[i].innerText)
}

// for(let li of allLis){
//     li.innerHTML = "WE ARE <b>THE CHAMPIONS</b>"
// }
//===========================================
//changing styles
//===========================================
const p = document.querySelector("p");
console.log(p.style.color);
p.style.color = "red";
p.style.fontSize = "20px";
p.style.backgroundColor = "yellow";
//===========================================
const allLIS = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

allLIS.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color;
}
)
//===========================================
//getComputedStyle
//===========================================
const h = document.querySelector("h1");
const compStyles = getComputedStyle(h);
console.log(compStyles.color);
console.log(compStyles.fontSize);
//===========================================
//MANIPULATING CLASSES
//===========================================

const todo = document.querySelector('#todos .todo')
todo.style.color='gray';
todo.style.opacity='0.5';


//===========================================
//Creating Elements
//===========================================
const newH2 = document.createElement('h2');
newH2.innerText = "I AM A NEW H2";
newH2.classList.add('special');
const section = document.querySelector('section');
section.appendChild(newH2);


const newImg =document.createElement('img');
newImg.src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
newImg.style.width = '200px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Google';
newLink.href = 'https://www.google.com';
document.body.appendChild(newLink);

//===========================================
const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = "I AM A NEW LI";
parentUl.appendChild(newLi);    

const firLi = document.querySelector('li.todo');
parentUl.insertBefore(newLi,firLi)

const secUl = document.querySelector('section ul');
ul.querySelector('li.todo').remove();
//===========================================
