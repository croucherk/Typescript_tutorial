console.log("TypeScript Number Properties: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

var month = 0 
if( month<=0 || month >12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}

function employee(id:number,name:string) { 
   this.id = id 
   this.name = name 
} 

var emp = new employee(123,"Smith") 
employee.prototype.email = "smith@abc.com" 

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)

var num1 = 1.23491
console.log(num1.toExponential())
console.log(num1.toFixed(2))
console.log(num1.toLocaleString())
console.log(num1.toPrecision(3))
console.log(num1.toString())
console.log(num1.valueOf())