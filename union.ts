// Union literal
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

function disp(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
disp("mark") 
console.log("Printing names array....") 
disp(["Mark","Tom","Mary","John"])

// Union type and arrays
var arr2:number[]|string[]; 
var i:number; 
arr2 = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr2.length;i++) { 
   console.log(arr2[i]) 
}  

arr2 = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr2.length;i++) { 
   console.log(arr2[i]) 
} 