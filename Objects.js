// objects operations 
// let variable = [
//     {name:"anurag", EnrollmentNo:211260131516, class:"8thsem"},
//     {name2:'kenil', EnrollmentNo:648468465644, class:"8thsem"}
// ]

// document.getElementById('callingobj').innerHTML = variable[0].EnrollmentNo + variable[0].name;

// //NESTED OBJECTS
// let obj = {
//     name: "John",
//     age: 30,
//     cars:{
//          car1:'mercedes',
//          car2:'bmw'
//     }
//  }
//  document.getElementById('nestedOne').innerHTML = obj.cars.car1; 

//CALLING THE METHOD
// const obj = {
//     name: "John",
//     age: 30, 
//     surname: 'Christian',
//     fullname: function()
//     {
//      return this.name + "" + this.surname;
//     }
//  };
//  document.getElementById('gettingMethod').innerHTML =  obj.fullname();

// //PERFORMING THE 
//  const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   // Display data from the object:
//   document.getElementById("demo").innerHTML = person.fullName();

//
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
// };
//   // Display data from the object:
//   document.getElementById("displayingObject").innerHTML = person;
// //[so basically, this program basically defines the type]

// //{OBJECT MAP METHODS}
// let fruits = new Map([
//     ['Apple', 100],
//     ['Banana', 200],
//     ['orange', 400]         
// ])  
// document.getElementById('mappingElements').innerHTML = fruits.get('Banana');

//{JAVASCRIPT FUNCTIONS}
//FUNCTION CALLING
// function internet()
// {
//     return('hello Internet');
// }
// document.getElementById('callingFunction').innerHTML = internet();

// //PERFORMING APPLY()
// let functions = {
//     name: function(){
//         return this.name;   
//     }
// }
// let function1 = {
//     name:'anurag',
//     age:10
// }
// document.getElementById('callingApply').innerHTML = functions.name.apply(function1);

