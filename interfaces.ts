// Simple interface
interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var cashier:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(cashier.firstName);
console.log(cashier.lastName);

////////////////////////////////////////////////////////////////////////////////////////////
// Union type and interfaces
interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 //commandline as string 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 //commandline as a string array 
 options = {program:"test1",commandline:["Hello","World"]}; 
 console.log(options.commandline[0]); 
 console.log(options.commandline[1]);  
 
 //commandline as a function expression 
 options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
 var fn:any = options.commandline; 
 console.log(fn());

 ////////////////////////////////////////////////////////////////////////////////////////////
// Interfaces and arrays
 interface namelist { 
    [index:number]:string 
 } 
 
 // var list2:namelist = ["John",1,"Bran"] *Error. 1 is not type string  
 interface ages { 
    [index:string]:number 
 } 
 
 var agelist:ages; 
 agelist["John"] = 15   // Ok 
 // agelist[2] = "nine"   *Error

 ////////////////////////////////////////////////////////////////////////////////////////////
// Multiple interface inheritance
 interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Offspring extends IParent1, IParent2 { } 
 var Iobj:Offspring = {v1:12, v2:23} 
 console.log("value 1: "+this.v1+" value 2: "+this.v2)