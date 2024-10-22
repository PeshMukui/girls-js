//IF ... ELSE
let x = 34;

if (x < 100) {
     console.log('The number is lower than 100');
} else {
     console.log('The number is higher than 100');
}


if (x < 10) {
     console.log('The number is lower than 10');
} else {
     console.log('The number is higher than 10');
}

//SWITCH CASES
let weather = 'sun';

switch (weather) {
    case 'sun': 
        console.log('It is sunny!');
        break;
    case 'rain':
        console.log('It is rainy!');
        break;
    case 'wind':
        console.log('It is windy!');
        break;
    default:
        console.log("How's the weather today?");
}


console.log("How's " + "the weather today?");
console.log('How"s the weather today?');

//To change CSS through js
const element = document.getElementById("my-id")  //Refering to html document with ID.
element.style.color = "red";
console.log(element.style)

