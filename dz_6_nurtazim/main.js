
let num = 0

function getValue(e){
    e.target.classList.toggle("active")
    num = num + 1
    document.getElementById("min").innerHTML = num

}
function getValuemin(e){
     e.target.classList.toggle("active")
    num = num - 1
    document.getElementById("min").innerHTML = num
}

// let num = 0
//
// const getValue = (e) => {
//     e.target.classList.toggle("active")
//     num = num + 1
//     document.getElementById("min").innerHTML=num
// }
//
// const getValuemin = (e) => {
//     e.target.classList.toggle("active")
//     num = num - 1
//     document.getElementById("min").innerHTML=num
// }
