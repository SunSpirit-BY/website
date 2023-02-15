//Домашка по теме "циклы"
//Задание 1 Вывести числа от 1 до 5 в консоль, используя все виды циклов(fow, while, do)
let jopa=1;
do{console.log(jopa);
    jopa++;
}
while(jopa<6)

for(let x=1;x<6;x++){
    console.log(x)
}

let y=1;
while(y<6){
    console.log(y);
y++;
}
//Задание №2 Верно ли, что последний вывод в консоль будет 0?
let x1=8;
while(x1){
    console.log(x1);
    x1--;
}// Неверно, т.к. переменная x1 станет 0, что вернёт false.

//Задание №3   переписать данный код на while
for(let num = 0;num < 3;num++){
        console.log(`Число:${num}`);
}
//Решение
let num1=0;
while(num1 < 3){
    console.log(`Число:${num1}`);
    num1++
}
//Задание №4 Прекратить работу цикла, когда size=1
for(let num2 = 0; num2 < 2;num2++){
    for (let size = 0;size < 3;size++){
        console.log(size);
    }
}
//Решение с использованием метки firstFor и cтоп-крана break
firstFor:for(let num2 = 0; num2 < 2;num2++){
    for (let size = 0;size < 3;size++){
        console.log(size);
        if (size=1) {break firstFor}
    }
}