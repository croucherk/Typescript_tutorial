class Person{ } 
var guy = new Person() 
var isPerson = guy instanceof Person; 
console.log(" guy is an instance of Person " + isPerson);

var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
}

 var invokeperson = function(obj: { firstname:string, lastname :string }) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)
 invokeperson({firstname:"Sachin",lastname:"Tendulkar"})