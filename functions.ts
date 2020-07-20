// Optional parameter function
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

// Rest parameter function
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)

// Anonymous function
var msg = function() { 
   return "hello world";  
} 
console.log(msg())

// Function constructor
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

// Recursive functions
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));      // outputs 720 

(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()

// Lambda function
var foo1 = (x:number)=>10 + x 
console.log(foo1(100))      //outputs 110 

var foo2 = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo2(100)

// Overloading function
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");