function nice(name){
console.log("Hey " + name + " you are nice")
console.log("Hey " + name + " you are good")
console.log("Hey " + name + " your tshirt is nice")
console.log("Hey " + name + " your course is good too")
}


//console.log("Hey D you are nice!")
//console.log("Hey D you are good!")
//console.log("Hey D your tshirt is nice!")
//console.log("Hey D your course is good too!")
//nice("Rohan")
//nice("Shivam")
function sum(a, b, c =3)
{
 // console.log(a + b)
 console.log(a, b, c)
 return a + b + c
}
result1 = sum(3)
result2 = sum(45, 87)
result3 = sum(90, 24, 1)
console.log("The sum of these numbers is: " , result1)
console.log("The sum of these numbers is: " , result2)
console.log("The sum of these numbers is: " , result3) 

const func1 = (X)=>{
    console.log("I am an arrow function" , X)
}
func1(34);
func1(66);
func1(84);