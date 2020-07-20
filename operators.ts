var x:number = 4 
var y = -x; 
console.log("value of x: ",x);   //outputs 4 
console.log("value of y: ",y);   //outputs -4

var msg:string = "hello"+"world" 
console.log(msg)

var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

var num = 12 
console.log(typeof num);   //output: number

var a = 2
var b = 2
var c = 3
// 2 = 00000010
// 3 = 00000011
console.log(a > 1 && b > 1)
console.log(a > 1 || b > 2)
console.log(!(a < 1))
console.log((a & b) == 2)
console.log((a | c) == 3)
console.log((a ^ b) != 2)
console.log(~b)
console.log(b << 1) // 00000100
console.log(b >> 1) // 00000001
