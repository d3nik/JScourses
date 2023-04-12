function exercise() {
    let number = +prompt("Hello, please enter the number of task (1-3): ");

    switch(number) {
        case 1:
            let question = +prompt("Enter number from 0 to 9, to display the special character located on this key");
            let symbol = "";

            switch(question) {
                case 1:
                    symbol = "!";
                    break;
                case 2:
                    symbol = "@";
                    break;
                case 3:
                    symbol = "#";
                    break;
                case 4:
                    symbol = "$";
                    break;
                case 5:
                    symbol = "%";
                    break;
                case 6:
                    symbol = "^";
                    break;
                case 7:
                    symbol = "&";
                    break;
                case 8:
                    symbol = "*";
                    break;
                case 9:
                    symbol = "(";
                    break;
                case 0:
                    symbol = ")";
                    break;
            }

            alert(symbol);
            break;

        case 2:
            let year = +prompt("Enter year to check if it is the leap year");

            if (year % 4 === 0 && year !== 0 && year > 0) {
                alert("Leap year");
            } else if (year % 4 !== 0) {
                alert("Isn`t leap year");
            } else {
                alert("Isn`t a year");
            }
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