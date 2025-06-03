const school = {
  name: "Greenwood High",
  location: {
    city: "Springfield",
    state: "MO",
    zip: 65804,
    address: {
      street: "123 Elm St",
      building: "Main",
      room: 101
    }
  },
  mascot: "Gators",
  departments: [
    {
      name: "Science",
      teachers: [
        {
          name: "Mr. Newton",
          subject: "Physics",
          yearsTeaching: 12,
          schedule: {
            monday: "9am-11am",
            wednesday: "9am-11am"
          }
        },
        {
          name: "Dr. Curie",
          subject: "Chemistry",
          yearsTeaching: 9,
          schedule: {
            tuesday: "10am-12pm",
            thursday: "10am-12pm"
          }
        }
      ]
    },
    {
      name: "Arts",
      teachers: [
        {
          name: "Ms. Frida",
          subject: "Painting",
          yearsTeaching: 7,
          awards: ["Best Local Artist", "Creative Visionary"]
        },
        {
          name: "Mr. Mozart",
          subject: "Music",
          yearsTeaching: 15,
          instruments: ["Piano", "Violin"]
        }
      ]
    }
  ],
  students: [
    {
      name: "Lily",
      age: 14,
      classes: ["Biology", "Algebra", "Painting"],
      grades: {
        Biology: "A",
        Algebra: "B+",
        Painting: "A-"
      },
      guardian: {
        name: "Mrs. Thompson",
        contact: {
          phone: "555-1234",
          email: "thompson.lily@example.com"
        }
      }
    },
    {
      name: "Marcus",
      age: 15,
      classes: ["Chemistry", "Geometry", "Music"],
      grades: {
        Chemistry: "B",
        Geometry: "A",
        Music: "A+"
      },
      guardian: {
        name: "Mr. Lee",
        contact: {
          phone: "555-5678",
          email: "lee.marcus@example.com"
        }
      }
    }
  ]
};

// console.log(school.mascot); //mascot
// console.log(school.location.state); //state of school
// console.log(school.location.address.street); //street
// console.log(school.departments[1].teachers[1].instruments[1]); //2nd instrument MOzart plays

// school.foundedYear = 1965;
// console.log(school.foundedYear); //add new prop to school founded year of 1965
// console.log(school);

// school.students[0].grades.English = "B"; //reassign Lily's English grade to an B
// for in loop to print all of Lily's grades
// let grades = school.students[0].grades;
// for (let grade in grades) {
//   console.log(`${grade}: ${grades[grade]}`);
// }
// console.log(school.departments[1].teachers[0].awards[0]); //first award that Ms. Frida received

// console.log(school.departments[0].teachers[0].schedule.monday); //print what time mr. newton teaches on Monday

//marcus picks up PE and History class add to Marcus and use for of loop to loop over classes MArcus is taking
school.students[1].classes[3] = "PE";
school.students[1].classes[4] = "History";
let classes = school.students[1].classes;
for (let x of classes) {
  let obj = {};
  obj[x] = "";
  console.log(obj);
}

// OR

// school.students[1].classes[3] = "PE";
// school.students[1].classes[4] = "History";
// let classes = school.students[1].classes;
// for (let x of classes) {
//   console.log(x);
// }

//make variable called student
// let student = {
//   name: "David",
//   age: 15,
//   classes: ["Chemistry", "Geometry", "Music"],
//   grades: {
//     Chemistry: "F",
//     Geometry: "F",
//     Music: "F"
//   },
//   guardian: {
//     name: "Mr. Reyes",
//     contact: {
//       phone: "555-5678",
//       email: "reyes@example.com"
//     }
//   }
// };

//add student to student array
// school.students[2] = student;
// console.log(school.students[2]);

//use for of loop to print all students names and ages
// for (let x of school.students) {
//   console.log(x.name);
//   console.log(x.age);
// }

//write a function called isTeenager takes an age and returns true if age is between 13 and 19
// function isTeenager(age) {
//   if (age >= 13 && age <= 19) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }
// isTeenager(school.students[1].age);

//create a function called printAllStudentNames that logs all students' names in an array
// let stus = school.students;
// function printAllStudents() {
//   for (let x of stus) {
//     console.log(x.name);
//   }
// }
// printAllStudents();
