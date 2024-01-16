//questions 7
let arry =  [1,2,3,4,5,6]
let calculate = arry.filter(filtering)
function filtering (value){
    return value > 0
}
document.getElementById('filtering').innerHTML = calculate;


//question 8
let array =  [1,2,3,4,5,6]
let evaluate = array.reduce(reducing)
function reducing (total,value){
    return total + value;
}
document.getElementById('reducingValue').innerHTML = evaluate;

  