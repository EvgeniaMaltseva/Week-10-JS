/*function showMessage() {
    console.log ("Я учу JavaScript!");
}
showMessage();*/

/*const showMessage = function() {
    console.log ("Я учу JavaScript!");
};
showMessage();*/

let showMessage = () => console.log ("Я учу JavaScript!");
showMessage();


function spotYear(year) {
    if (year % 4 === 0) {
    if (year % 100 === 0) {
    if (year % 400 === 0) {

console.log("Год является високосным (366 дней)");
        }
    }
    } else {
    
console.log("Год не високосный (у него 365 дней).");
    }
    }

spotYear(2023);