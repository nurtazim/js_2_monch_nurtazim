


const pir=[]
let i =0
for (let i = 0; i <7; i++) {
    pir.push("*")
    console.log(`${pir.join("")}`)
}



for (let i = 1; i <= 100; i++) {
    let f = i % 3 === 0;
    let b = i % 5 === 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}


function createChessBoard(value) {
    var board = "";
    for (var i = 1; i < value * value; i += 1) {
        if ((i % (value + 1)) === 0) {
            board += "\n";
        } else if (i % 2 !== 0) {
            board += "|";
        } else {
            board += " ";

        }
    }
    return board;
}

console.log(createChessBoard(8));