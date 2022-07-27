// -----------------Keyword------------------------------------

// var --> function
// let --> block
// const --> block

// function sayHello() {
//   for (var i = 0; i < 5; i++) {
   // console.log(i);
  // }
  //below statement access in var keyword but not access in let keyword and throw error
  //  console.log(i); 
// }
// sayHello();

//throw error in below code
//in const keyword value not a reassign
// const x = 2;
// x = 3;


// -------------Objects--------------------------------------

// const person = {
//   name: 'sehal',
//   walk() {},
//   talk() {}
// }
//  person.talk();
//  person.name = '';

//  const targetMember = 'name';
//  person[targetMember.value] = 'John';

//------------This keyword---------------------------------

//  const person = {
//   name: "sehal",
//   walk(){
//     console.log(this);
//   }
// };
// person.walk();

// const walk = person.walk.bind(person);
// walk();

//-----------Arrow function--------------------------------

// write code in javascript
// const square = function(number){
//   return number * number;
// }

//write code in Es6
// const add = (a, b) => a + b;

// console.log(add(5,4));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false },
// ];
// write code in javascript
// const activeJobs = jobs.filter(function(job) { return job.isActive; });

//write code in Es6
// const activeJobs = jobs.filter(job => job.isActive);

// const person = {
//   talk(){
//     var self = this;
//     setTimeout(() => {
//       console.log("this",this);
//     },1000);
//   }
// };
// person.talk();

//---------------destructuring------------------------

// const address = {
//   street: '',
//   city: '',
//   country: ''
// };

// Es5 code
// const street = address.street;
// const city = address.city;
// const country = address.country;

// Es6 code
// const { street, city, country } = address;
// const { street: st } = address;

//--------------spread oprator----------------------------

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
//add element in a middle and end
// const combined = [...first, 'a', ...second, 'b']

// const clone = [...first, ...second];
// console.log(clone); 
// const three = { name: "Mosh" };
// const four = { job: "Instuctor" };

// const combined = { ...three, ...four, location: "india" };
// console.log(combined);

//---------Classes and constuctor method------------------

// class Person {

//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const person = new Person('Mosh',33);
// console.log(person.name);
// console.log(person.age);
// person.walk();

//-----------Inheritence or Composition-----------------------

// class Person {

//   constructor(name) {
//     this.name = name;

//   }

//   walk() {
//     console.log("walk");
//   }
// }

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log("teach");
//   }
// }
// const teacher = new Teacher('Mosh', 'MSC');
// teacher.teach();
// console.log(teacher.degree);
// console.log(teacher.name);

// ---------------Array.map()----------------------------

// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

const fname = ['Harsh', 'vishwas', 'Rohit', 'Garg'];
console.log(fname);

const surname = ['shah', 'gohel', 'sharma', 'dabhi'];
console.log(surname);

const age = [14, 20, 32, 24];
console.log(age);

const word = 'ARSHSHEIKH';
console.log(word);

//--------------concat------------------------
const fullname = fname.concat(surname);
// console.log(fullname);
// output :['Harsh', 'vishwas', 'Rohit', 'Garg', 'shah', 'gohel', 'sharma', 'dabhi']

//--------------entries------------------------
const n = fname.entries();

for (let x of n){
    console.log(x);
}

// output : [0, 'Harsh']
//          [1, 'vishwas']
//          [2, 'Rohit']
//         [3, 'Garg']
//-------------copywithin--------------------
// let z = fname.copyWithin(2,0,2);
// console.log(z);
// output : ['Harsh', 'vishwas', 'Harsh', 'vishwas']

//-------------every-------------------------
age.every(checkage)

function checkage(age){
    return age > 18;
}
// console.log(age);
// output : [14, 20, 32, 24]

//---------------includes---------------------
let x = surname.includes("patel");
// console.log(x);
// output : false
let y = fname.includes("Garg");
// console.log(y);
// output : false

//---------------pop--------------------------
const z1 = surname.pop();
// console.log(z1);
// output : dabhi

//-------------push---------------------------
let x1 = fname.push("Henil", "Druv");
// console.log(x1);
// output : 6

//----------------key-------------------------
const keys = fname.keys();

let text = "";
for (let x of keys) {
  text += x + " ";
}
// console.log(text);
// output : 0 1 2 3 4 5 

//--------------fill---------------------------
const fill = fname.fill("Mahek");
// console.log(fill);
// output : ['Mahek', 'Mahek', 'Mahek', 'Mahek', 'Mahek', 'Mahek']

//-------------find--------------------------
const find = age.find(checkAge);
function checkAge(age) {
  return age > 18;
}
// console.log(find);
// output : 20

//-------------findindex-----------------------
const findindex = age.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}
// console.log(findindex);
// output : 1

//---------------filter------------------------
const filter = age.filter(checkAdult);

function checkAdult(age) {
  // return age >= 18;
}
// console.log(filter);
// output : ['20', '32', '24']

//---------------from--------------------------

const from = Array.from(word);
// console.log(from);
// output : ['A', 'R', 'S', 'H', 'S', 'H', 'E', 'I', 'K', 'H']

//-------------forEach-----------------------

const forEach = surname.forEach(myfunction);

function myfunction(element, index, arr){
  arr[index] = 'Hii ' + element;
}
// console.log(forEach);
// output : undefined

//---------------isArray---------------------

let isArray = Array.isArray(surname);
// console.log(isArray);
// output : true

//---------------Join----------------------

let join = fname.join();
// console.log(join);
// output : Harsh,vishwas,Harsh,vishwas,Henil,Druv

//--------------some------------------------

let some = age.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
// console.log(some);
// output : true

//-------------sort------------------------

let sort = fname.sort();
// console.log(sort);
// output :['Druv', 'Harsh', 'Harsh', 'Henil', 'vishwas', 'vishwas']

//------------length--------------------
let length = surname.length;
// console.log(length);
// output : 3

//-----------reduce---------------------
const names = ['mahek', 'vishwas', 'rohit'];

let reduce = names.reduce(myfunction);

function myfunction(total, string) {
  return total - string;
}
// console.log(reduce);
// output : NAN

//-----------reduceright---------------------
let reduceright = names.reduce(myfunction1);

function myfunction1(total, string) {
  return total - string;
}
// console.log(reduceright);
// output : NAN

//------------indexOf-----------------------
let sur = surname.indexOf('dabhi');
// console.log(index);
// output : 3

//----------reverse-----------------------
let reverse = fname.reverse();
// console.log(reverse);
// output :['vishwas', 'Henil', 'Harsh', 'Druv']

//------------prototype---------------
let salary = [20000, 25000, 18000, 21000];
Array.prototype.myFunction = function(){
  for(let i=0; i<this.length;i++){
    if(this[i] > 20000)
    this[i] = 'sr.devloper';
    else
    this[i] = 'jr.devloper';
  }
}
salary.myFunction();
// console.log(salary);
// output : ['jr.devloper', 'sr.devloper', 'jr.devloper', 'sr.devloper']

//-----------toString------------------
let toString = surname.toString();
// console.log(toString);
// output : shah,gohel,sharma

//------------splice-----------------------
let splice = fname.splice(2, 2);
// console.log(splice);
// output : ['Henil', 'Harsh']

//------------Unshift---------------------
let unshift = surname.unshift("Jay", "Rahil");
// console.log(unshift);
// output : ['shah', 'gohel', 'sharma', 'dabhi', 'Jay', 'Rahi']

//----------valueOf-------------------------
const valueof = fname.valueOf();
// console.log(valueof);
//output : ['vishwas', 'vishwas', 'Harsh', 'Druv']

//-------------lastIndexOf-------------------
let lastIndexOf = surname.lastIndexOf("heiii");
// console.log(lastIndexOf);
//output : 5