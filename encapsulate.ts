class Encapsulate { 
   str:string = "hello" 
   private str2:string = "world" 
}
 
var encap = new Encapsulate() 
console.log(encap.str)     //accessible 
//console.log(encap.str2)   *compilation Error as str2 is private