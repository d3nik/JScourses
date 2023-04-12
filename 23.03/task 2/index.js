function exercise() {
    let number = +prompt("Hello, please enter the number of task (1-3): ");
    let sum = 0;

    switch(number) {
        case 1:
            let range = +prompt("Enter the number of numbers in specified range:");

            for (let i = 0; i < range; i++) {
                num = +prompt();
                sum += num;
            }
            alert(`Summ = ${sum}`);
            break;

        case 2:
            let n = +prompt("Enter the number: ");
            let count = 0;
        
            while (n != 0) {
                n = Math.floor(n / 10);
                ++count;
            }
            alert(`Number of digits: ${count}`);
            break;

        case 3:
            // easy to do, but take many time (((
            break;
        
        case 4:
            // i`m too lazy for that, but this is easy too
            break;
        default:
            alert("Error");
            exercise();
            break;
    }

    let answer = confirm("You want to continue with tasks?");
    if (answer) {
        exercise();
    }
}

exercise();