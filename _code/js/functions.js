/* x = first_wall;
 y = second_wall;
 z = height;
let wallsWidth = 2*x + 2*y;
let wallsSurf = wallWidth * height;
let ceilingSurf = x * y;
let painting = wallsSurf + ceilingSurf;
*/

function paintingSurface(wall1, wall2, height) {
    var x = wall1;
    var y = wall2;
    var z = height;
    var wallsWidth = 2*x + 2*y;
    var wallsSurf = wallsWidth * height;    
    var ceilingSurf = x * y;
    var paintingSurf = wallsSurf + ceilingSurf;

    console.log(paintingSurf)
}

paintingSurface(6, 5, 2.5);
paintingSurface(3, 4, 2.5);

/*
function greeting() {
    console.log('Hello World');
}
greeting();

function greeting(name) {
    console.log('Hello ' + name);
}
greeting('Marta');

*/