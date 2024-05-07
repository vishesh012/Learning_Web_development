console.log("Executing");

/* Crearting a Faulty Calculator 
+ --> -
* --> +
- --> /
/ --> *

It performs wrong operation 10% of the time
*/

function faultyCalculator() {
    // +, -, *, /
    let num1 = prompt("Enter the first number: ");
    let num2 = prompt("Enter the second number: ");
    let operation = prompt("Enter the operation: ");
    let result;

    if (Math.random() < 0.1) {
        console.log(Math.random());
        console.log("Faulty operation")
        switch (operation) {
            case '+':
                result = num1 - num2;
                console.log("The result is: ", result);
                break;
            case '-':
                result = num1 / num2;
                console.log("The result is: ", result);
                break;
            case '*':
                result = num1 + num2;
                console.log("The result is: ", result);
                break;
            case '/':
                result = num1 * num2;
                console.log("The result is: ", result);
                break;

        }
    }
    else if (Math.random() >= 0.1) {
        console.log(Math.random());
        console.log("Correct operation")
        switch (operation) {
            case '+':
                result = num1 + num2;
                console.log("The result is: ", result);
                break;
            case '-':
                result = num1 - num2;
                console.log("The result is: ", result);
                break;
            case '*':
                result = num1 * num2;
                console.log("The result is: ", result);
                break;
            case '/':
                result = num1 / num2;
                console.log("The result is: ", result);
                break;

        }
    }
    else {
        console.log("Invalid operation");
        console.log("Please enter a valid operation: +, -, *, /");
    }
}

faultyCalculator();