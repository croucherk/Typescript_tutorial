class Root { 
   str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  

var tree = new Leaf(); 
tree.str ="hello" 
console.log(tree.str)