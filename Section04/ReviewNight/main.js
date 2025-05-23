// let menuItems = document.querySelectorAll("nav li");
// let home = menuItems[0];
// home.innerText = "Matt";
// home.computedStyleMap.color = "blue";
// home.classList.add("red-background");
// console.info(menuItems);

// let list = document.querySelector("ul");
// let children = list.children;
// console.info(children);
// // removes the nav bar completely
// list.parentElement.outerHTML = "";
// // adds div h2 with text
// list.parentElement.outerHTML = "<div><h2>Nav Here</h2></div>";

const navItems = [
  { text: "Home", href: "/" },
  { text: "Login", href: "#login" },
  { text: "Register", href: "Register.html" },
  { text: "Contact", href: "Contact.html" },
  { text: "Foobar", href: "Foobar.html", disabled: true }
];

let navHtml = "<nav><ul>";
for (let item of navItems) {
  // if ("disabled" in item && item.disabled === true) {
  //   continue;
  // }
  // if (item.text.startsWith("-")) {
  //   continue;
  // }
  navHtml += `<li><a href="${item.href}">${item.text.toUpperCase()}</a></li>`;
  console.log(item);
}
navHtml += "</ul></nav>";

let mainNav = document.querySelector("#main-nav");
// const navHtml = `<nav>
//   <ul>
//     <li>Home</li>
//     <li>Login</li>
//     <li><a href="Register.html">Register</a></li>
//     <li><a href="Contact.html">Contact</a></li>
//   </ul>
// </nav>`;
mainNav.outerHTML = navHtml;
