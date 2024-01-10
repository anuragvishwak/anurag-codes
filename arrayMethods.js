
// //ARRAY METHODS 
// //FINDING THE LENGTH OF THE ARRAY
// let arr = ['anurag','parth','tanuj','kartik'];
// document.getElementById('findingLength').innerHTML = arr.length;

// //USING TOSTRING() METHOD
// let arr = ['anurag','parth','tanuj','kartik'];
// document.getElementById('returningString').innerHTML = arr.toString(); 
// //[so basically, this method returns the array elements with sperated comma]
  
// //USING AT() METHOD
// let arr = ['anurag', 'parth', 'tanuj', 'kartik']
// let elements = arr.at(3);
// document.getElementById('findingSingleElement').innerHTML = elements;
// //[finding specfic elements from array]

// //PERFORMING SIMPLE ARRAY JOINTING OPERATIONS 
// let arr1 = ["Hello", "World"];
// let arr2 = ["How","Are","You?"]; 
// let jointing = arr1+arr2;
// document.getElementById('jointArray').innerHTML=jointing;


// 10 january 2024
// // // //PERFORMING PUSH AND POP OPERATIONS 
// let country = ['india', 'america', 'australia', 'russia']
// document.getElementById('arrayPopping').innerHTML = country; 
// country.pop();
// document.getElementById('afterPopping').innerHTML = country; 
// //PERFORMED PUSH OPERATIONS
// country.push('china');
// document.getElementById('anotherPopping').innerHTML = country; 

// //PERFORMING SHIFTING OEPRATION
// let cars = ['bmw','volvo', 'mercedes', 'audi']
// cars.shift()
// //SHIFT REMOVES AN ELEMENT FROM AN ARRAY.
// document.getElementById('shiftingElements').innerHTML = cars;
// cars.unshift('honda')
// document.getElementById('anotherElement').innerHTML = cars;

// //CONCATENATE TWO ARRAYS 
// let cars = ['bmw','volvo', 'mercedes', 'audi']
// let arr = ['anurag', 'parth', 'tanuj', 'kartik']
// const finalData = arr.concat(cars);
// document.getElementById('concatenating').innerHTML = finalData;

// // COMBINING MULTIPLE ARRAY
// let cars = ['bmw','volvo', 'mercedes', 'audi']
// let arr = ['anurag', 'parth', 'tanuj', 'kartik']
// let arr2 = ["How","Are","You?"]
// const finalData = arr.concat(cars,arr2);
// document.getElementById('concatenating').innerHTML = finalData;

// // PERFORMING THE CONCAT OF SINGLE ELEMENT IN THE ARRAY
// let cars = ['bmw','volvo', 'mercedes', 'audi']
// document.getElementById('beforeConcat').innerHTML = cars;
// let concatenate = cars.concat('maclaren');
// document.getElementById('afterConcat').innerHTML = concatenate;

// //PERFORMING THE COPYWITHIN METHOD
// const fruits = ["Banana", "Cherry", "Apple", "Mango"];
// document.getElementById("beforeCpy").innerHTML = fruits;
// document.getElementById("afterCpy").innerHTML = fruits.copyWithin(2,0);

// //USING FLAT FUNCTION 
// let newarry = [['anurag', 'kartik', 'tanuj'],['apple', 'mango', 'banana'],['bmw','volvo', 'mercedes', 'audi']];
// let myarry = newarry.flat();
// document.getElementById('FlattingArry').innerHTML = myarry;

// //SPLICE METHOD
// let fruits = ["Banana", "Cherry", "Apple", "Mango"]
// fruits.splice(3,0, 'lemon','kiwi')
// document.getElementById('insertion').innerHTML = fruits;

// //SPLICE METHOD (deleting different elements)
// let fruits = ["Banana", "Cherry", "Apple", "Mango"]
// fruits.splice(2,2, 'lemon','kiwi')
// document.getElementById('deletingElements').innerHTML = fruits;

// //SLICING THE ELEMENTS FROM AN ARRAY 
// let fruits = ["Banana", "Cherry", "Apple", "Mango"]
// let slicing = fruits.slice(1);
// document.getElementById('slicing').innerHTML = slicing;

// //{ARRAY SEARCH}
// //USING THE INDEXOF() METHOD 
// const fruits = ["Coconut", "Cherry", "Apple", "Mango"];
// let position = fruits.indexOf("Cherry");
// document.getElementById("findingIndex").innerHTML = "Apple is found in position " + position;

// //PERFORMING LASTINDEXOF() METHOD
// const fruits = ["Coconut", "Cherry", "Apple", 'Cherry', "Mango"];
// let position = fruits.lastIndexOf("Cherry");
// document.getElementById("findingIndex").innerHTML = "Apple is found in position " + position;
// //[so the difference between indexof and lastindexof is that lastindexof returns the index value of last element which is redudant in the array]

// //PERFORMING INCLUDE() METHOD
// const fruits = ["banana, Coconut", "Cherry", "Apple", 'Cherry', "Mango", "Pineapple"];
// document.getElementById("checkingElements").innerHTML = fruits.includes('Cherry');
// //[so it bascially returns the boolean value true/false that is the declared element is present or not.]

// //PERFORMING FINDING FUNCTION
// let multipleNumbers = [12,32,54,43,21,34];
// let first = multipleNumbers.find(findingElement);
// document.getElementById('findingLargest').innerHTML = first;
// //now we will create an function returns an condition value > 23
// function findingElement(value)
// {
//  return value > 53;
// }

// //PERFORMING FINDLAST() METHOD
// let temprature = [12,32,54,43,21,34];
// let evalutatingTemp =   temprature.findLast(x =>x > 32);
// document.getElementById('findingLastElement').innerHTML = evalutatingTemp;
// //now we will finding the index of the the element.
// let findingLastIndex =   temprature.findLastIndex(x =>x > 32);
// document.getElementById('findLastIndex').innerHTML = findingLastIndex;

//{ARRAY SORT}
//ARRAY SORT
// let fruits = ["Banana, Coconut", "Apple", "Mango", "Pineapple"];
// fruits.sort();
// document.getElementById('sortingArray').innerHTML = fruits;

// //REVERSING A STRING
// let fruits = ["Banana, Coconut", "Apple", "Mango", "Pineapple"];
// document.getElementById('beforeReverseArray').innerHTML = fruits;
// fruits.reverse();
// document.getElementById('reverseArray').innerHTML = fruits;

//PERFORMING TOSORT() FUNCTION
// let fruits = ["Banana, Coconut", "Apple", "Mango", "Pineapple"];
// let sorted = fruits.toSorted();
// document.getElementById('beforeSorted').innerHTML = fruits;
// document.getElementById('afterSorted').innerHTML = sorted;
// //[the output of the both sort() and tosort()are but in tosort() it basically returns a new string]

// //PERFORMING TOREVERSED() METHOD
// let fruits = ["Banana, Coconut", "Apple", "Mango", "Pineapple"];
// document.getElementById('beforeReverseArray').innerHTML = fruits;
// fruits.toReversed();
// document.getElementById('reverseArray').innerHTML = fruits;
// //[the output of the both reverse() and toreverse()are but in toreverse() it basically returns a new string]

//PERFORMING SORTED AND UNSORTED ARRAY 
// let numeric = [12,32,54,43,21,34];
// //[here we are creating an function to sort the array]
// document.getElementById('unsortedArray').innerHTML = numeric;
// function sortingArray(){
//     let sort  = numeric.sort();
// document.getElementById('comparingFunction').innerHTML = sort;
// }
// function unsortArray(){
// document.getElementById('UnsortFunction').innerHTML = numeric;
// }

// //USING THE FOREACH() METHOD 
// const numbers = [45, 4, 9, 16, 25];
// let txt = "hello";
// numbers.forEach(myFunction);
// document.getElementById("hello").innerHTML = txt;

// function myFunction(value) {
//   txt += value + "<br>"; 
// }

// //PERFORMING MAP() METHOD   
// const numbers = [2, 4, 6, 8, 10, 12,14];
// const number2  = numbers.flatMap(evaluateFunction)
// document.getElementById('mapIteration').innerHTML = number2;
// function evaluateFunction(value){
// return value*2;
// }
// //[so basically, the map method iterates]


// //PERFORMING FLATMAP() METHOD
// const numbers = [2, 4, 6, 8, 10, 12,14];
// const number2  = numbers.flatMap(evaluateFunction)
// document.getElementById('mapIteration').innerHTML = number2;
// function evaluateFunction(value){
// return value*2;
// }
// //[so the difference between the map() and flatMap() is, the flatMap() creates an new array after mapping]

//PERFORMING THE FILTER METHOD
const numbers = [2, 4, 6, 8, 10, 12,14];
let over6 = numbers.filter(Filtering);
document.getElementById('filteringElement').innerHTML = over6;

function Filtering(){
    
}
