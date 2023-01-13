//1
// function number (a, b) {
//     if (a < b) {
//         console.log("Минимальное число ", a)
//     } else if (b < a) {
//         console.log("Минимальное число ", b)
//     } else if (b === a) {
//         console.log("Число ", a + "и" + b + "равны")
//     } else {
//         console.log("Error")
//     }
// }
// number(42, 31)

//2
// var str = (u = prompt('Введите текст')) => {
//     return u.length
// }
// console.log(str())


//3
var calc1 = Number(prompt('Введите первое число'))
var calc2 = prompt('Введите математическое выражение')
var calc3 = Number(prompt('Введите второе число'))
var res = ''

function calc (calc1, calc2, calc3, res) {
    switch (calc2) {
        case '+':
            alert(res = calc1 + calc3)
            break
        case '-':
            alert(res = calc1 - calc3)
            break
        case '*':
            alert(res = calc1 * calc3)
            break
        case '/':
            if (calc3 === 0) {
                alert('Нельзя делить на 0')
                break
            }
            alert(res = calc1 / calc3)
            break
        default:
            alert('ERRROR')
            break
    }
}
calc(calc1, calc2, calc3, res)