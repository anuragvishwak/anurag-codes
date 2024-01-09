//8th january 2024
//ALL STRING OPERATIONS
// let string = 'anurag vishwakarma'
// document.getElementById('finding').innerHTML = string.length;

//9th january 2024 (PERFORMING STRING METHODS)
//EXTRACTING A CHARACTER FROM A STRING
// let string = 'anurag vishwakarma'
// document.getElementById('gettingCharacter').innerHTML = string.charAt(8);
//[the extraction of a single character from a string can be done by ".at" or this can be also done by simple giving [whichevent index value you want]]

//SLICING ELEMENTS 
// let string = 'anurag vishwakarma from SAL college of engineering'
// let divide = string.slice(6,18)
// document.getElementById('slicingString').innerHTML = divide;

//FINDING SUBSTRING
// let string = 'anurag vishwakarma from SAL college of engineering'
// let extract = string.substring(6,27);
// document.getElementById('findingSubstring').innerHTML = extract;

// CONVERTING FROM UPPERCASE TO LOWER CASE
// function convertingUppercase(){
//   let string = document.getElementById('converting').innerHTML;
//   document.getElementById('converting').innerHTML = string.toUpperCase();
// }

//CONVERTING UPPERCASE TO LOWERCASE
// function convertingLowercase() {
// let txt = document.getElementById("convertingLower").innerHTML;
// document.getElementById('convertingLower').innerHTML = txt.toLowerCase(); 
// }

//JOINTING THE STRING
// let txt1 = 'anurag'
// let txt2 = 'vishwakarma'
// let text3 = txt1.concat('',txt2);
// document.getElementById('jointing').innerHTML = text3;
 //[CONCATENATE FUNCTION CAN ALSO BE USED BY + OPEERATOR]

//  //USING THE TRIM FUNCTION
//  let txt1 = '       hello world        ';
//  let txt2 = txt1.trim();
//  document.getElementById('triming').innerHTML =  'txt1 length' + txt1.length + "<br>txt2 length" + txt2.length;

// //USING THE TRIMEND FUNCTION 
//  let string1 = '          ANURAG VISHWAKARMA        ';
//  let string2 = string1.trimEnd();
//  document.getElementById('trimEnd').innerHTML = 'string1 length = ' + string1.length + '<br>string2 length = ' 
//  + string2.length;

//USING THE PADSTART STRING METHOD
// let str1 = "internet";
// paddingthestring = str1.padStart(13,'hello');
// document.getElementById('insertingElement').innerHTML = paddingthestring;
//[basically, this method uses the index value to add any element]

//USING THE PADEND STRING METHOD 
// let str1 = 'hello';
// let str2 = str1.padEnd(10,'world');
// document.getElementById('padEnd').innerHTML = str2;
//[here the element is padded after the string ends.]

//USING THE STRING REPEAT METHOD
// let string1 = 'REPEATING THE STRING'
// string2 = string1.repeat(5);
// document.getElementById('repeatingString').innerHTML=string2;

//REPLACING THE STRING 
// function Replacing(){
//     let string = document.getElementById('replacing').innerHTML;
//     document.getElementById('replacing').innerHTML = string.replace('world','Anurag');
// }
//[The replace function is case sensitive so if the text is uppercase then it will not work.]


//USING AN REGULAR EXPRESSON /g TO REPLACE ALL THE REDUDANT STRINGS 
// function RegularExpression(){
//     let string1 = document.getElementById('RegularExpression').innerHTML;
//     document.getElementById('RegularExpression').innerHTML = string1.replace(/anurag/g,"internet");
// }
//['/g' is regular expression used to select all redudant values]

//REPLACING THE STRING USING replaceAll() method 
// let text = 'I love cars, cars are awesome';
// text = text.replaceAll('cars','bikes');
// document.getElementById('rePlacing').innerHTML = text;

// //SPLIT METHOD 
// let declaringtext = "anuragvishwakarma";
// let seperate = declaringtext.split('v');
// document.getElementById("splitting").innerHTML = seperate[1]; 
// //[when using the split method it basically divides the text into an array, so byy index value we can print.]

//FINDING THE INDEX VALUE OF THE WORD
// let text = "hello how are you"
// let findingIndex = text.indexOf('are');
// document.getElementById('extracting').innerHTML = text;
// document.getElementById('extractingIndex').innerHTML = findingIndex;
// //[it will find the index address of the give text 'are']

//{STRING TEMPLATES}
//USING MULTILINE FUNCTION
// let declaringtxt = `hello
// Iam 
// internet`;
// document.getElementById('multiline').innerHTML = declaringtxt;


//VARIABLES IN STRING
// let variable = 67;
// let operation = `WELCOME ${variable}`;
// document.getElementById('variableString').innerHTML = operation;

//USING EXPRESSIONS IN STRINGS 
// let a = 5;
// let b = 8;
// let operation = `your Cal ${a+b}`;
// document.getElementById('addingExpression').innerHTML = operation;

//{STRING NUMBERS}
//USING NAN FUNCTION
// let num1 = NaN;
// let num2 = 34;
// let sum = num1 + num2;
// document.getElementById('performingNAN').innerHTML = sum;

//USING INFINITY
// let x = 2/0;
// document.getElementById('infinity').innerHTML= x;

//NUMBER AS A STRING
// let a = '5'
// let b = '45'
// let c = a+b;
// document.getElementById('numberAsString').innerHTML = c;
//[when subtracting two variables, the JS will try to convert the string into integer(numbers)]

// NUMBERS AS OBJECT
// let x = 2002;
// let z = 5050;
// let y = new Number(2002);
// document.getElementById('numberObj').innerHTML = typeof x + '<br>' + typeof y + '<br>' + typeof z;

// // {BIG INT}
// let x = BigInt("99999999999999999999")
// document.getElementById('bigInt').innerHTML = typeof x;
// //[big int is used to handle larger digits number, because in javascript 15 digit numbers are accurate.]

// // MULTIPLICATION OF BIGINT NUMBERS 
// let a = 123456789876564567n;
// let b = 876789876788787855n;
// let c = a + b;
// document.getElementById('declaringBigInt').innerHTML = c;
// // [In JavaScript, the n at the end of a number signifies that it's a BigInt.]

//  //NUMBER METHODS 
//  //PERFORMING TOSTRING() METHOD
//  let x = 123;
//  document.getElementById('numberMethod').innerHTML = x + '<br>' + (123).toString()
//   + "<br>" + (100+23).toString();
//   //[so using toString() it basically converts the number into string or consider number as a string]

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