// //первое дз
// function mass(mass_1, mass_2) {
//     if (mass_1.length > mass_2.length) {
//         console.log("первый массив длинее");
//     } else if (mass_1.length < mass_2.length) {
//         console.log("второй массив длинее ");
//     } else {
//         console.log("Массивы равны");
//     }
// }
//
// mass([1, 2, 2], [11, 1, 1, 11,])
//
//
// user = [
//     {username: "Jack", age: 33},
//     {username: "John", age: 79},
//     {username: "Kamil", age: 49},
//     {username: "Marat", age: 89},
//     {username: "Miki", age: 29},
//     {username: "Mirhat", age: 19},
//     {username: "Devid", age: 15},
//     {username: "Chika", age: 66},
//     {username: "Kitai", age: 18},
//     {username: "Adidas", age: 22}
// ]
//
// for (let i = 0; i < user.length; i++) {
//     console.log(`Username:  ${user[i].username}\n Age:  ${user[i].age}`)
// }
// //
// // const name =prompt("Напишите свое имя");
// // // console .log( "Привет ",name,"!" );
//
// const svetofor = ["Зеленый", "Красный", "Желтый"];
//
// Array.prototype.rand = function () {
//     return this[Math.floor(Math.random() * this.length)]
// };
//
// collor = svetofor.rand();
//
// console.log("Цвет светофора: ", collor);
//
// switch (collor) {
//     case "Зеленый":
//         console.log("Можно ехать")
//         break;
//     case "Желтый":
//         console.log("Предупреждение")
//         break;
//     case "Красный":
//         console.log("Нельзя")
//         break
// }

//второе дз


// const pir = []
// let i = 0
// for (let i = 0; i < 7; i++) {
//     pir.push("*")
//     console.log(`${pir.join("")}`)
// }
//
//
// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 === 0;
//     let b = i % 5 === 0;
//     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// }

// let board = "";
// function createChessBoard(value) {
//     for (let i = 1; i < value * value; i += 1) {
//         if ((i % (value + 1)) === 0) {
//             board += "\n";
//         } else if (i % 2 !== 0) {
//             board += "|";
//         } else {
//             board += "_";
//         }
//     }
//     return board;
// }
//
// console.log(createChessBoard(8));
//


//ДЗ 3

// function random_array() {
//     const mass_1 = [];
//     const length = Math.floor(Math.random() * 300) + 1;
//
//     let count = Math.floor(Math.random() * 10) + 1;
//     while (mass_1.length < length) {
//         mass_1.push(count++)
//
//     }
//     return mass_1
// }
//
// const mass_2 = random_array();
// const mass_1 = random_array();
//
//
// console.log(mass_1);
// console.log(mass_2);
//
//
//
// function twoMass(mass_1 , mass_2){
//
//     if (mass_1.length>mass_2.length){
//     console.log("первый массив длинее");
// }
//     else if (mass_1.length<mass_2.length){
//     console.log("второй массив длинее ");
// }
//     else {
//     console.log("Массивы равны");
// }
// }
// twoMass(mass_1,mass_2)


// function countChar(text) {
//     console.log(text.length)
// }
//
// countChar("FNFDJNJSN")

//
// let num = 0

// function getValue(e){
//     e.target.classList.toggle("active")
//     num = num + 1
//     document.getElementById("min").innerHTML = num
//
// }
// function getValuemin(e){
//      e.target.classList.toggle("active")
//     num = num - 1
//     document.getElementById("min").innerHTML = num
// }

let num = 0

const getValue = (e) => {
    e.target.classList.toggle("active")
    num = num + 1
    document.getElementById("min").innerHTML=num
}

const getValuemin = (e) => {
    e.target.classList.toggle("active")
    num = num - 1
    document.getElementById("min").innerHTML=num
}
