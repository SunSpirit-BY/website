function calcFactorial(numOne){
    if(numOne===1){
        return numOne;
    }else{
        return numOne*calcFactorial(numOne-1);
    }
}
console.log(calcFactorial(100));

function square(x){
    return Math.sin(x);
}
function integral(f,a,b,n){
    let S=0;
    let step=(b-a)/n;
    for(let i = a; i <= b; i = i + step)
    {S=S+f(i)*step}
    return S;
}
console.log (integral(square,0,1,100000))    


function zakonOma(r){
    return (r);
}
function R(v,i){
    if(v*i===0){
        console.log(`Недопустимое значение`);
    }
    else{return v/i}
}
console.log (R(10,4));    
//обьекы
//Проверка существования свойства
let userInfo = {
    name: 'Ваня',
    age: 30,
    address:{
        city: 'Minsk',
        street: 'Pervomayskaya',
    }
}
//Если юзер инфо эйдж существует, то консоль лог работает.
if(userInfo.age){
    console.log(userInfo.age);
}
//Проверка  помощью опциональной цепочки и оператора ?
console.log(userInfo?.address?.street);
// Проверка с помощью оператора in
if('street'in userInfo){
    console.log(userInfo.name);
}




let userInfo1 = {
    name: "Вася",
    age: 30
}
let user = userInfo1;
user.age = 45; 
console.log(userInfo1.age);

let userInfo2 = {
    name: "Вася",
    age: 30,
}
for (const key in userInfo2) {
    const value = userInfo2[key];
    console.log(value);
}


let arrowOne= ['Иван', 'Никита', 'Дмитрий',];
let arrowTwo=arrowOne.slice(0,2);
console.log(arrowTwo);
