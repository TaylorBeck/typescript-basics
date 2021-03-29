// Result of running `tsc typescript-basics.ts` in console

/* Variables */
var num = 5.321;
/* Object */
var positionA = {
    x: 1.67,
    y: 8
};
var positionB = {
    x: 20.88,
    y: 2.1,
    z: 10
};
/* Functions */
var add = function (a, b) { return a + b; };
var subtract = function (x, y) { return x - y; };
// Object params
var aurora = {
    firstName: 'Aurora',
    lastName: 'Sye',
    age: 44
};
var getFullName = function (person) {
    return person.firstName + " " + person.lastName;
};
getFullName(aurora);
/* Unions */
var id = 5;
var possiblyNum = subtract;
var cmo = {
    id: 1,
    name: 'Stacey Richards',
    favoriteDesignSoftware: 'Photopea',
    favoriteProgrammingLanguage: 'TypeScript'
};
/* Casting */
var secondNumber = 5;
add("15", secondNumber);
/* any */
var consoleLog = function (a) {
    console.log(a);
};
consoleLog("Wello Horld"); // > Wello Horld 
consoleLog(42); // > 42
consoleLog(function () { return "Wello Horld"; }); // > [Function (anonymous)]
