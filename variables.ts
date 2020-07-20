export {};

var name:string = "John"; // var stores value as type String
var score1:number = 50; // var stores value as type number
var score2:number = 42.50 // var stores value as type number
var sum = score1 + score2 // var computes and stores value as inferred type number
console.log("name"+name) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var str = '1' 
var str2:number = <number> <any> str   // str is now of type number 
console.log(typeof(str2))

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
// num = "12"; error TS2011: Cannot convert 'string' to 'number'.
// console.log(num);

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 