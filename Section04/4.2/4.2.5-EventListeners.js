// add an event listener to the dog picture that listens for a "click" and gives an alert
document.getElementById("dog-picture").addEventListener("click", () => {
  alert("Woof!");
});
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const listItems = document.querySelectorAll("#class-schedule-list li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", () => {
    listItems[i].style.backgroundColor = "Yellow";
  });
}

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keydown", e => {
  console.log(e.key);
});
