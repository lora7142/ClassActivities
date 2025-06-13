// axios
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => {
//     console.log("got response", response.data);

//     document.getElementById("output").innerText = response.data.title;
//   })
//   .catch(err => console.error("error", err));

// axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
//   const firstFive = response.data.slice(0, 5);
//   console.log(firstFive);
//   // firstFive.map(
//   //   post => (document.getElementById("output2").innerText = post.title)
//   // );
//   // firstFive.forEach(post => console.log(post.title));
// });

// get the list of user display names
// axios.get("https://jsonplaceholder.typicode.com/users/").then(response => {
//   // grab response data and put in variable
//   const user = response.data.map(user => user.name);
//   // select the unordered list element from HTML using id
//   const list = document.getElementById("usernames");
//   // user for each to take each name in the list to create a list item element
//   user.forEach(name => {
//     const li = document.createElement("li");
//     // append each name to the list
//     li.textContent = name;
//     list.appendChild(li);
//   });
// });

// get photos of robots
// grab button
// document.getElementById("getRobot").addEventListener("click", () => {
//   console.log("getting robots");
//   const robotName = `robot-${Math.random() * 1000}`;
//   const imageURL = `https://robohash.org/${robotName}?set=set4`;

//   axios.get(imageURL, { responseType: "blob" }).then(response => {
//     const blob = response.data;
//     const imageObjectURL = URL.createObjectURL(blob);
//     const image = document.createElement("img");
//     const container = document.getElementById("robot");

//     image.src = imageObjectURL;
//     image.width = 400;

//     container.innerHTML = "";
//     container.append(image);

//     console.log(blob);
//   });
// });

axios.get("https://pokeapi.co/api/v2/pokemon/type").then(response => {
  console.log("Getting Pokemon!");
  console.log(response.data.results);
  const pokemon = response.data.results;

  // let charizard = pokemon.filter(x => x.name === "charizard");
  // console.log(charizard);
});
