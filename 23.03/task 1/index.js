function exercise() {
    let number = +prompt("Hello, please enter the number of task (1-3): ");

    switch(number) {
        case 1:
            
            break;

        case 2:

            break;

        case 3:
            
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