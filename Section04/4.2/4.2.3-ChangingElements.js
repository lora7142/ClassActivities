// print the outer HTML of the navigation bar
console.log("outer", document.querySelector(".nav-bar").outerHTML);
// print the inner HTML of the navigation bar
console.log("inner", document.querySelector(".nav-bar").innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("#class-schedule-list").textContent);
// select the classList for the first class-week, then add the class "week-1"
document.querySelector(".class-week").classList.add("week-1");
console.log("class list", document.querySelector(".class-week").classList);
// select the img element and add a src attribute
document.querySelector("img").setAttribute("src", "www.dogpic.com/image.jpg");
// change the font color of the h1 element
document.querySelector("h1").style.color = "blue";
