
const mass_1 = [1];
const mass_2 = [1];


const random = Math.floor(Math.random() * 10) + 1;
const random2 = Math.floor(Math.random() * 300) + 1;

for (i = Math.floor(Math.random() * random) + 1; i <= Math.floor(Math.random() * random2) + 1; i++) mass_1.push(i);
for (i = Math.floor(Math.random() * random) + 1; i <= Math.floor(Math.random() * random2) + 1; i++) mass_2.push(i);


console.log(mass_1);
console.log(mass_2);

if (mass_1.length>mass_2.length){
    console.log("первый массив длинее");
}
else if (mass_1.length<mass_2.length){
    console.log("второй массив длинее ");
}
else {
    console.log("Массивы равны");
}