var x = 3
var y = -6
var z = 9

// if statement
if (x > 0) {
    console.log("x is positive")
}

// if.. else statement
if (y > 0) {
    console.log("y is positive")
} else if (y == 0) {
    console.log("y is 0")
} else {
    console.log("y is negative")
}

// nested if statement
if (z > 0) {
    if (x + y == z) {
        console.log ("the sum of x and y is z")
    } else if (x - y == z) {
        console.log ("the difference of x and y is z")
    } else {
        console.log(z)
    }
}

// switch statement
switch(z) {
    case 1: {
        console.log(z + " is the zero-th power of 3")
        break
    } 
    case 3: {
        console.log(z + " is the first power of 3")
        break
    }
    case 9: {
        console.log(z + " is the second power of 3")
        break
    }
    case 27: {
        console.log(z + " is the third power of 3")
        break
    }
}