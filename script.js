var c;
// Word & key-words
// Chacha = Word has no meanin in JS
// For = keword has some meanings in js 
// Variable & Constant 
// Program mai kuch data store krna hoo 
var a = 12; // Can be change
const b=12; // Can't be change
//Hoisting-Var & funcions are hoisted which mean their decleration moved on top o code example of var c
// & Also accesing var before decleration
console.log(c);
c=14;
//Not defined & Undefined 
// Not defined- Have no eisting     --Undefined -- Existing hai lekin koi  value assign nhi ki  
//----------------------------------------------------------------------------------
//Types in JS   -primitive & refrence
// primitives
// refrence = [] {} ()
// aisi oi bhi valur jiskko copy karne par real copy nhi hota , balki us main value ka refrence
//  pass hoo jata  hai, use hum refrence value kehtay hain, aur jiska copy karne par real copy ho jaaye
//  wo value primitive type value hoti hai
var x = [12,13];
var y = x;
y.pop(1);
console.log(x);
console.log(y);
//--------------------------------------------------------------------------------------------------------
//Conditionals
// jb bhi baat agar magar pr aay gi
if(10<9){
console.log("Less")
}
else{
console.log("Greater")
}
//---Here is another example
if(11>12){
console.log("False")
}
else if(12>13) {
console.log("False")
}
else if (13>14){
console.log("False")
}
else{
console.log("Last")
}
//loops
// For 
for(i=1;i<=10;i++){
    console.log(i);
}
// While 
var z = 12;
while(z<20){
    z++;
    console.log(z);
}
// functions
/*
1- jb code bahad mai chalana hoo 
2- jb code reuse krna hoo
3- jb code diffrent data k sath chalana hoo 
*/
// Example 1
function Hello(){
    console.log("Hey Hello Hello Hey")
}
Hello();
// Eaxmple 2
function Chaibanao(){
console.log("Gas On Kro");
console.log("Pani Garam Kro");
console.log("Milk,Tea bag, Sugar Dalo");
console.log("Chai Cup mai Dalo");
}
Chaibanao();
//Example 3:
function ABCD(a,b,c){ // Parameters
 console.log(a,b,c)   
}
ABCD(12,14,16)//aurguments
//--------------------------------------------------------
//Arrays-To store multiple Value in signle variable 
var arr=[10,20,30,40,50];  
console.log(arr);
//Push- add number at last
var arr1=[10,20,30,40,50];
arr1.push(60);
console.log(arr1);
//POP  -remove last value
var arr2=[10,20,30,40,50];
arr2.pop();
console.log(arr2)
//UnShift   - add value at start
var arr3=[10,20,30,40,50];
arr3.unshift(0);
console.log(arr3);
// Shift    - Remove first value from array
var arr4=[10,20,30,40,50];
arr4.shift();
console.log(arr4)
// Splice 
var arr5=[10,20,30,40,50,60];
arr5.splice(2,2);
console.log(arr5);
// -----------------------------------------------------------------------
// Advance topics 
// JS-Two Versions ES6(New) & ES5(Old)
//ES5 - Var         ES6 - Const & Let
/*
Three diffrence btw Var & Let,Const
1:Var OLD JS    --  Let & Const New JS
2:function scoped -- Braces Scoped   
3: Adds in window  -- does not adds in window 
// JS main kuch cheezain nahi hain jo hum use krta hain wo humain window sy milti hian 
*/


