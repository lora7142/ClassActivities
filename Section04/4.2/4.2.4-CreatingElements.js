// create a new unordered list (ul) element
const newUl = document.createElement("ul");
// remove the paragraph element in the nav-bar
const navBar = document.querySelector(".nav-bar");
const navP = navBar.querySelector("p");
if (navP) navBar.removeChild(navP);
// add your new ul element to the nav-bar
navBar.appendChild(newUl);
console.log("NavBar", document.querySelector(".nav-bar"));
// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li");
li1.textContent = "Home";
const li2 = document.createElement("li");
li2.textContent = "Contact";
console.log("twoNewListItems", document.querySelectorAll("li"));
// add the li elements to the ul in the nav-bar
newUl.appendChild(li1);
newUl.appendChild(li2);
console.log(">>>>>>", document.querySelector(".nav-bar"));
