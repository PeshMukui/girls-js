//to extract random letters from our letters variable and create a string consisting of 6 characters

// function getRandomColor() {
//     console.log('Lets draw a color!')
// }

// getRandomColor();

/*
//Displaying randomly generated letters for the colors
function getRandomColor() {    
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {   //to extract random characters from letters 6 times
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];
        console.log(randomLetter);
    }
}
getRandomColor();
*/

//to add the random letters to the color variable in order to obtain a color.
function getRandomColor() {    
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var randomLetter = letters[randomNumber];

        color += randomLetter;  //appending a new letter to the existing color value:
    }

    return color;         //to return it so that we can use it in the future.

}
getRandomColor();

const title = document.getElementById('magic');    //To find an element with a specific id on the page.
console.log(title.style.color)


function changeColor(title) {
    title.style.color = getRandomColor();
}

// function changeColor(text) {
//     text.style.color = getRandomColor();
// }
setInterval(function() { 
    changeColor(title); 
    console.log(title.style)


}, 2000);
