/* Variables */
const num: number = 5.321;

/* Interface */
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface Coordinates {
  x: number;
  y: number;
  z?: number; // optional
}

/* Object */
const positionA: Coordinates = {
  x: 1.67,
  y: 8
}

const positionB: Coordinates = {
  x: 20.88,
  y: 2.1,
  z: 10
}

/* Functions */
const add = (a: number, b: number) => a + b;

type SubtractFunc = (x: number, y: number) => number;
const subtract: SubtractFunc = (x: number, y: number) => x - y;

// Object params
const aurora: Person = {
  firstName: 'Aurora',
  lastName: 'Sye',
  age: 44
}

const getFullName = (person: { firstName: string, lastName: string }) => {
  return `${person.firstName} ${person.lastName}`;
}

getFullName(aurora);

/* Unions */
let id: number | string = 5;

let possiblyNum: number | string | SubtractFunc = subtract;

interface Marketer {
  id: number,
  name: string,
  favoriteDesignSoftware?: string  
}

interface SoftwareEngineer {
  id: number,
  name: string,
  favoriteProgrammingLanguage?: string
}

type ChiefMarketingOfficer = Marketer & SoftwareEngineer | Person;

const cmo: ChiefMarketingOfficer = {
  id: 1,
  name: 'Stacey Richards',
  favoriteDesignSoftware: 'Photopea',
  favoriteProgrammingLanguage: 'TypeScript'
}

/* Casting */
const secondNumber = 5;
add("15" as any, secondNumber as number);

/* any */
const consoleLog = (a: any) => {
  console.log(a);
};

consoleLog("Wello Horld"); // > Wello Horld 
consoleLog(42); // > 42
consoleLog(() => "Wello Horld"); // > [Function (anonymous)]
