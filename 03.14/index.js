function exercise() {
    let number = +prompt("Hello, please enter the number of exercise (1-5): ");

    switch(number) {
        case 1:
            let birthYear = +prompt("Enter your year of birth:");
            const year = 2023;

            alert(`Your age is ${year-birthYear} or ${year-birthYear-1}?`);
            break;

        case 2:
            let radius = +prompt("Enter the radius for circle:");
            let area = radius * 2 * Math.PI;
        
            alert(`Area of circle with radius ${radius} is ${area}`); 
            break;

        case 3:
            let distance = +prompt("Enter the distance in km between two cities:");
            let time = +prompt("And the amount of time in minutes you have to reach your destination:");

            alert(`${distance/(time/60)} km/h (or more) - the speed you need to arrive on time`);
            break;

        case 4:
            let userDollars = +prompt("Enter the required amount of dollars to convert");
            const euroRate = 0.946; // in dollars


            alert(`${userDollars.toFixed(2)}$ - ${(userDollars*euroRate).toFixed(2)}€`);
            break;

        case 5:
            let capacity = +prompt("Enter the capacity of a flash drive in GB:");
            const fileSize = 820; // in MB
            let filesAmount = (capacity*1024)/fileSize;

            alert(`${Math.floor(filesAmount)} files of size 820 MB can be saved on the flash drive`);
            break;

        default:
            alert("Error");
            exercise();
            break;
    }

    let answer = confirm("You want to continue with exercises?");
    if (answer) {
        exercise();
    }
}

exercise();