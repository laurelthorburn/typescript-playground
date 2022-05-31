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
const enum Size{ Small = 0, Medium, Large };
// will implicitly assign M and L
const enum Size1 { Small = 's', Medium = 'm', Large ='l'}
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
    id: number,
    name?: string
} = { id: 1 };
employee.name = 'Mosh';