const a = 5;
const b = 2;
const myName = "bonni";
console.log(a,b)
console.log("hello"+myName);

let c = 6;
var d = 7;
console.log(c,d)

const amIFat = true;
console.log(amIFat);

const daysOfWeek = ["mon", "tue", "wed", "thu","fri","sat"]
console.log(daysOfWeek);
console.log(daysOfWeek[5]);
daysOfWeek.push("sun");
console.log(daysOfWeek);

//

const player={
    name:"Nico",
    points:10,
    fat:true
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName="lili";
console.log(player);

player.points=15;
console.log(player);
player.points=player.points+a;
console.log(player);

//

function Hello(){
    console.log("Hello!");
};
Hello();

function sayHello(nameOfPerson,age){
    console.log("Hello my name is "+nameOfPerson+" and I'm "+age+" years old.");
};
sayHello("nico",23);
sayHello("dal", 18);
sayHello("flynn", 34);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
};
plus(60,8);

function divide(firstNumber, secondNumber){
    console.log(firstNumber/secondNumber);
};
divide(98,20);