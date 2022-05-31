let sales: number = 123_456_890;
let course: string = 'TypeScript';
let is_published: boolean = true;

// type any
let level;
level = 1;
level = "HEY";

// ANY TYPE LOSES beneft of TS

function render(document: any) {
    console.log(document)
};

//arrays

let numbers: number[] = [1, 2, 3];

//tuples - fixed length aray where is element has a particular type. used with pair of values.

let user: [number, string] = [1, 'Mosh'];

// recd's keeping tuples to only 2 values, thinks it's confsing when mores

//enums
//PascalCase
const enum Size { Small = 0, Medium, Large };
// will implicitly assign M and L
const enum Size1 { Small = 's', Medium = 'm', Large = 'l' }
// bc using string have to explicity write out M and L

//define using const = compiler generates more optimized code

//functions
//write out what return should be after oaramater ():number

// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022)
//         return income * 1.2;
// return income * 1.3;
// }

// calculateTax(10_000, 2022)

function calculateTax(income: number, taxYear = 2022): number {
    if ((taxYear) < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2022)

//Objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { id: 1, name: 'Mosh', retire: (date: Date) => console.log(date) };
//readonly prtects id, keeps us from overwriting it

// Exercises•

//For each of these values, what type will the TypeScript compiler infer? 
let a = 100; //number
let b = 'Coffee'; //string
let c = [true, false, false]; //array of booleans (boolean[])
 let d = {age:number}; //object a which is a number ({age: 31})
 let e = [3]; //array of number (number[])
 let f; //any
 let g = []; //array of any (any[])

//  •What are the compilation errors in each of the following code snippets?

let song: {
    title:string,
    releaseYear:number
} = { title:'My song'}; //missing releaseYear

let prices = [100, 200, 300];
prices[0] = '$100'; //pushing a string to a number

functionmyFunc(a:number, b:number):number { }
//you have an empty function with unused parameters and no return, fctn never used either