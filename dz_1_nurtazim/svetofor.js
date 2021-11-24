const svetofor = ["Зеленый", "Красный", "Желтый"];

Array.prototype.rand = function () {
    return this[Math.floor(Math.random() * this.length)]
};

collor = svetofor.rand();

console.log("Цвет светофора: ",collor);

switch (collor) {
    case "Зеленый":
        console.log("Можно ехать")
        break;
    case "Желтый":
        console.log("Предупреждение")
        break;
    case "Красный":
        console.log("Нельзя")
        break;
}
