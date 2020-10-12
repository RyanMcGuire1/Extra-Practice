console.log("Working");

function giveMeSomething(a) {
    return "something" + " " + a
}

console.log(giveMeSomething("is better than nothing"));

function remainder(x, y) {
    return x % y
}

console.log("4 dived by 2 leaves a remainder of " + remainder(4, 2));

function howManySeconds(hours) {
    return hours * 3600
}

console.log('2 hours has ' + howManySeconds(2) + ' seconds in it');

function calcAge(age) {
    return age * 365
}

console.log('44 years is ' + calcAge(44) + ' days laong!');