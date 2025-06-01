const zoo = {
  name: "Wild Wonders Zoo",
  location: "Metroville",
  zones: [
    {
      name: "Savannah",
      animals: [
        {
          name: "Leo",
          species: "Lion",
          age: 8,
          diet: "carnivore",
          healthChecks: [
            { date: "2024-01-10", status: "Healthy" },
            { date: "2025-01-10", status: "Needs Dental Check" }
          ],
          feedingTimes: ["08:00", "16:00"]
        },
        {
          name: "Ellie",
          species: "Elephant",
          age: 25,
          diet: "herbivore",
          healthChecks: [{ date: "2025-01-10", status: "Healthy" }],
          feedingTimes: ["09:00", "15:00"]
        }
      ]
    },
    {
      name: "Rainforest",
      animals: [
        {
          name: "Zara",
          species: "Jaguar",
          age: 6,
          diet: "carnivore",
          healthChecks: [{ date: "2024-11-10", status: "Minor Injury" }],
          feedingTimes: ["10:00", "18:00"]
        },
        {
          name: "Kiki",
          species: "Monkey",
          age: 3,
          diet: "omnivore",
          healthChecks: [{ date: "2025-02-05", status: "Healthy" }],
          feedingTimes: ["08:30", "14:30", "19:00"]
        }
      ]
    },
    {
      name: "Arctic",
      animals: [
        {
          name: "Nana",
          species: "Polar Bear",
          age: 10,
          diet: "carnivore",
          healthChecks: [{ date: "2024-12-01", status: "Healthy" }],
          feedingTimes: ["11:00", "17:00"]
        }
      ]
    }
  ],
  zookeepers: [
    {
      name: "Sam",
      assignedZones: ["Savannah", "Arctic"],
      yearsExperience: 5
    },
    {
      name: "Lila",
      assignedZones: ["Rainforest"],
      yearsExperience: 8
    }
  ]
};

// log name of each zone
// zoo.zones.forEach(zone => {
//   console.log(zone.name);
// });

// log each animal's species in every zone
// zoo.zones.forEach(zone => {
//   zone.animals.forEach(animal => {
//     console.log(`Animal name: ${animal.name}, Species: ${animal.species}`);
//   });
// });

// Print out all the animal's feeding times
// zoo.zones.forEach(zone => {
//   zone.animals.forEach(animal => {
//     animal.feedingTimes.forEach(feeding => {
//       console.log(
//         `Animal name: ${animal.name} and their is Feeding Time: ${feeding}`
//       );
//     });
//   });
// });

// filter out zones that have more than 1 animal
// let filteredZones = zoo.zones.filter(zone => zone.animals.length <= 1);
// console.log(filteredZones);

// filter out all zookeepers that have less that 8 years of experience
// let filteredkeepers = zoo.zookeepers.filter(
//   keeper => keeper.yearsExperience < 8
// );
// console.log(filteredkeepers);

// map zookeepers to names and years of experience
// const zooData = zoo.zookeepers.map(keeper => {
//   let newKeeper = {
//     name: keeper.name,
//     years: keeper.yearsExperience
//   };
//   return newKeeper;
// });
// console.log(zooData);

// in each zone filter animals with more than 2 feeding times -returns zone a frequent eaters
// const hungryAnimals = zoo.zones.map(zone => {
//   let newAnimal = {
//     zoneName: zone.name,
//     feedingTimes: zone.animals.filter(animal => animal.feedingTimes.length > 2)
//   };
//   return newAnimal;
// });
// console.log(JSON.stringify(hungryAnimals));

// print out names of animals in the sahara
const animalNames = zoo.zones[0].animals.map(animal => animal.name);
console.log(animalNames);
