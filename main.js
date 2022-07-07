/*
    Task 1:

    Напишите результат сравнения рядом с выражением в виде комментария.
    Необходимо выполнить это задание без использования console.log()
    Данные для сравнения:

    в обычном сравнении Java Script преобразует строку в число

    "42" == 42 //true
    "0" == 0   //true
    "0" == false   // true 
    "true" == true   //false   

    explanation: 

The == comparison operator is defined in ECMA 5 as:
If Type(x) is Number and Type(y) is String,
return the result of the comparison x == ToNumber(y).
If Type(x) is String and Type(y) is Number,
return the result of the comparison ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
So, "true" == true is evaluated as:
"true" == ToNumber(true)
"true" == 1
ToNumber("true") == 1  
NaN == 1
===> false


    true == (1 == "1")   //true 

    В строгом сравнении результат сравнения будет false
    "42" === 42 //false
    "0" === 0    //false
    "0" === false   //false
    "true" === true    //false
    true === (1 === "1") //false
*/

/* 
    Task 2:

    Переменная a = 'foo' , а переменная b = 'bar'
    Чему будет равен результат выражения: a+ +b 
    
    ps: два плюса - это не опечатка

*/

let a = 'foo';
let b = 'bar';
console.log(a+ +b);//fooNaN 

/*
    Task 3:

    Напишите результат сравнения следующих выражений :

    "ананас" > "яблоко" // false
    undefined == null  //true при обычном сравнении
    undefined === null // false при строгом сравнении

    Необходимо выполнить это задание без использования console.log()

*/


/*
    Task 4:

    Создайте свою конструкцию УСЛОВИЕ
    Минимальное количество условий в одной конструкции: 5

*/
let salary = 150000;
if (salary > 150000) {
    console.log('Бери айтишную ипотеку');
} else if (salary = 150000) {
    console.log('Поднажми чуть-чуть');
} else if (salary < 150000) {
    console.log('А че вообще происходит? Давай работай!');
} else if (salary = 25000) { 
    console.log('Пора увольняться из Пятерочки');
} else {
    console.log('С такой зарплатой только застрелиться');
}

/*
    Task 5:

    Созданную вами конструкцию из задания номер 4, запишите с помощью тернарного оператора

*/
let mySalary = 150000;
if (mySalary > 150000) {
    result = 'Бери айтишную ипотеку'
} else {
    result = 'Поднажми чуть-чуть'
} // тут с условиями и result все понятно, перечисяем все в тернарном операторе

mySalary > 150000 ? result = 'Бери айтишную ипотеку':
mySalary = 150000 ? result = 'Поднажми чуть-чуть':
mySalary < 150000 ? result = 'А че вообще происходит? Давай работай!':
mySalary = 25000 ? result = 'Пора увольняться из Пятерочки':
result = 'С такой зарплатой только застрелиться';
console.log (result);

/*
    Task 6:
    Загадайте 5 чисел от 1 до 100, 
    а затем запросите у пользователя одно число в этом диапазоне.
    При КАЖДОМ совпадении числа выводите сообщение в МОДАЛЬНОМ окне: 
    "Вы угадали число". Если пользователь не угадал, то выводите сообщение:
    "Вы не угадали. Попробуйте ещё раз!"

    В задании необходимо использовать конструкцию switch/case.
*/
// допустим это 15, 35, 7, 11 и 99

let number = prompt("Угадайте 5 чисел в диапазоне от 1 до 100");
switch(number) {
    case '15' :
        alert('Вы угадали число');
        break;
    case '35' :
        alert('Вы угадали число');
        break;
    case '7' :
        alert('Вы угадали число');
        break;
    case '11':
        alert('Вы угадали число');
        break;
    case '99':
        alert('Вы угадали число');
        break;
    default :
        alert('Вы не угадали. Попробуйте еще раз'); 
}

