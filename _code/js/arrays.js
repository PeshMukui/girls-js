let array = ["orange", 34, true, "mandolin", 45 [67, 56, "red"]];
let friends = ["Michał", "Marta", "Mikolaj", "John", "Natalia", "Ania"];

console.log(friends[0]); // Listing the first element

console.log(friends.length); //Length of an array

friends.push('Kasia'); //Adding a new element
console.log(friends);

friends[2] = "Tomek"; //Replacing the third element
console.log(friends);

let work_friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];  //Combining arrays
let party_friends = ["Asia", "Kamil", "Bartek", "Ola", "Weronika", "Czarek"];
let all_friends = work_friends.concat(party_friends);
console.log(all_friends);

friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];  //Slicing arrays
let part = friends.slice(1, 4);
console.log(part);

//array.splice(from which element, how many elements to remove, what to put there in change)  //Remove or replace a portion of an array
 friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];
friends.splice(2,1);
console.log(friends);

 friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];
friends.splice(2, 0, "Patrycja");
console.log(friends);

 friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"];  //searching for an element

if (friends.indexOf('Marta') !== -1) {
    console.log('Marta can be found in this array!');
} else {
    console.log('Marta cannot be found in this array!');
}

 friends = ["Michał", "Marta", "Tomek", "John", "Natalia", "Ania","Kasia"]; //Looping through an array
for (let i = 0; i < friends.length; i += 1) {
    console.log(friends[i]);
}
friends = ["Paulina", "Ozgun", "Patience"];
for(let i = 0; i < friends.length; i+=1) {
    console.log("Hi " + friends[i] +"! We are happy to welcome you to girls.js!");
}


//find and list all the vowels from the sentence:

let vowels = ['A', 'E', 'I', 'O', 'U','Ó', 'Y', 'Ą', 'Ę']
let sentence = 'Nad rzeczką opodal krzaczka, mieszkała kaczka-dziwaczka, lecz zamiast trzymać się rzeczki, robiła piesze wycieczki.'
let sentenceUpperCase = sentence.toUpperCase()
console.log(sentence)
console.log(sentenceUpperCase)

let vowelCount = 0;

for (let i=0 ; i <= vowels.length; i++){
    const indexOfVowels = sentenceUpperCase.indexOf(vowels[i]);
    if(indexOfVowels !== -1) {
        const vowel = sentenceUpperCase[indexOfVowels];
        console.log(vowel);
    }
    
}