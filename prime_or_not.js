// Problem 1 : Check whether a number is Prime or not

let num = 7;
let isPrime = true;

if (num === 0) {
    console.log("1 is neither prime nor composite number.");
}

else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 1) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} is a prime number`);
    }
    else {
        console.log(`${num} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}

