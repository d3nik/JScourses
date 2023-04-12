// ex. 1-2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var numbers = [];

for (let i = 0; i < 20; i++) {
    let number = getRandomInt(1, 100);
    numbers[i] = number;
    console.log(`[${i+1}] - ${numbers[i]}`);
}

// ex. 3
console.log("Array: ", numbers);
numbers.sort((a, b) => b - a);
console.log("Sorted array: ", numbers);

// ex. 4 (fill method)
for (let i = 10; i < 20; i++) {
    numbers[i] = 0;
}
console.log(numbers);

// ex. 5
console.log("Found: ", numbers.find((elem) => elem % 7 == 0));

// ex. 6
numbers.splice(0, 3)
console.log(numbers);

// ex. 7 (indexOf method)
let EvenNumbers = 0;
let dublicates = 0;
let dublicate;

for (const number of numbers) {
    if (number == undefined || number == 0 || number == null)console.warn("Item isn`t a number!");
    else if (number % 2 == 0)EvenNumbers++;

    if (number == undefined || number == 0 || number == null);
    else if (dublicate == number) dublicates++;
    dublicate = number;
}
console.log("Count of even numbers in array: ", EvenNumbers);

// ex. 8
if (dublicates > 0) console.log(`Array has dublicates: ${dublicates}.`);
else console.log("Array has not dublicates.");