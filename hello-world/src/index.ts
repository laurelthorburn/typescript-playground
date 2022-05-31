// let sales: number = 123_456_890;
// let course: string = 'TypeScript';
// let is_published: boolean = true;

// // type any
// let level;
// level = 1;
// level = "HEY";

// // ANY TYPE LOSES beneft of TS

// function render(document: any) {
//     console.log(document)
// };

// //arrays

// let numbers: number[] = [1, 2, 3];

// //tuples - fixed length aray where is element has a particular type. used with pair of values.

// let user: [number, string] = [1, 'Mosh'];

// // recd's keeping tuples to only 2 values, thinks it's confsing when mores

// //enums
// //PascalCase
// const enum Size { Small = 0, Medium, Large };
// // will implicitly assign M and L
// const enum Size1 { Small = 's', Medium = 'm', Large = 'l' }
// // bc using string have to explicity write out M and L

// //define using const = compiler generates more optimized code

// //functions
// //write out what return should be after oaramater ():number

// // function calculateTax(income: number, taxYear?: number): number {
// //     if ((taxYear || 2022) < 2022)
// //         return income * 1.2;
// // return income * 1.3;
// // }

// // calculateTax(10_000, 2022)

// function calculateTax(income: number, taxYear = 2022): number {
//     if ((taxYear) < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000, 2022)

// //Objects
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = { id: 1, name: 'Mosh', retire: (date: Date) => console.log(date) };
// //readonly prtects id, keeps us from overwriting it

// // Exercises•

// //For each of these values, what type will the TypeScript compiler infer? 
// let a = 100; //number
// let b = 'Coffee'; //string
// let c = [true, false, false]; //array of booleans (boolean[])
//  let d = {age:number}; //object a which is a number ({age: 31})
//  let e = [3]; //array of number (number[])
//  let f; //any
//  let g = []; //array of any (any[])

// //  •What are the compilation errors in each of the following code snippets?

// let song: {
//     title:string,
//     releaseYear:number
// } = { title:'My song'}; //missing releaseYear

// let prices = [100, 200, 300];
// prices[0] = '$100'; //pushing a string to a number

// functionmyFunc(a:number, b:number):number { }
// //you have an empty function with unused parameters and no return, fctn never used either

// //Alisas
// //can reuse code in mutiple places with a type alisas
// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// //Union Types
// //give a variable or function paramter more than one type

// function kgToLbs(weight: number | string):number {
//     //technique called narrowing
//     if (typeof weight === 'number') {
//         return weight * 2.2
//     } else {
//         return parseInt(weight) * 2.2
//     }
// }

// kgToLbs(10);
// kgToLbs('10 lbs')

// //Intersection (&)

// let weight: number & string //both number and string at the same time - impossible loool

// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// Literal Types

// let quantity: number; // number can be anything
// let quantity: 50 | 100; //now can ONLY be 50 

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// // Nullable Types
// function greet(name:string | null | undefined) {
//     if (name) //if name is truthy
//         console.log(name.toUpperCase());
//     else
//         console.log("hola!")
// };

// greet(null);

// //Optional Chaining

// type Customer = {
//     birthday: Date
// };

// function getCutomer(id: number): Customer | null {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCutomer(0);
// //Optional property access operator
//     console.log(customer?.birthday)

//     //Optional element access operator
// // let log: any = (message: string) => console.log(message);
// let log: any = null;

// log?.('a')

// //Nullish Coaelscing Operator
// // what are falsey values in JS?? undefined, null, '', false, and 0
// //what if 0 is valid???
// let speed: number | null;
// let ride = {
//     // speed: speed !== null ? speed : 30;
//     speed: speed ?? 30;
// }

// // Type Assertions
// let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = <HTMLInputElement> document.getElementById('phone');

// phone.value

// //The Unknown type
// function render(document: unknown) {
// //type narrowing
// //typeof can only be used on string, boolean, or operator else use instanceof
// if (typeof document === 'string') {
//     document.toUpperCase();
// }
// };

// //the never type
// // values that never occur - not used very often
// // this exp we're saying this function never returns

// function processEvents(): never{
//     while (true){
//         //read a msg from a queue
//     }
// }

// processEvents();
// console.log('Hello World');

// function reject(message: string): never {
//     throw new Error(message)
// }

// reject('...');
// console.log('Blah')

// Section 2 Exercises

//Given the data below, define a type alias for representing users.

type Users = {
    name: string,
    age: number,
    occupation?: string
};

let users = [
    {
    name:'John Smith',
    age:30,
    occupation:'Software engineer'
},
{
    name:'Kate Müller',
    age:28
}
];

//•Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these 

type Bird = {
    fly: () => void;
}
type Fish = {
    swim: () => void;
}

type Pet = Bird | Fish;

//•Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' ;

//•Simplify the following code snippets:
// let user = getUser();
// console.log(user && user.address?user.address.street: undefined);
let user = getUser();
console.log(user?.address?.street);


// let x = foo !== null && foo !== undefined ? foo:bar();

let x = foo ?? bar();


//•What is the problem in this piece of code?
// let value: unknown = 'a'; 
// console.log(value.toUpperCase());

//value is set to unknown so you are calling a method that assumes it will be passed a string, what happens if it isn't? We need to use type narrowing to cartch the various types.. like  typeof === 'string' thennn you can use those string methods

let value: unknown = 'a'; 
if (typeof value === 'string')
    console.log(value.toUpperCase());

