console.group('Вивести на сторінку в один рядок через кому числа від 10 до 20.');
let myNum = 10;
let result = '';
while (myNum < 21){
    if(myNum === 20){
      result += myNum;
    } else {
        result += `${myNum}, `;
    }
    myNum++;
} 
console.log(result);
console.groupEnd();

console.group('Вивести квадрати чисел від 10 до 20.');
for(let i=10; i<21; i++){
    console.log(`Квадрат числа ${i} = ${i**2}`);
}
console.groupEnd();

console.group('Вивести таблицю множення на 7');
let myNumber = 1;
while (myNumber <=10){
    console.log(`7 * ${myNumber} = ${7 * myNumber}`);
    myNumber++;
}
console.groupEnd();

console.group('Знайти добуток усіх цілих чисел від 15 до 35');
let myResult = 1;
for(let number = 15; number <= 35; number++){
    myResult *= number;
} 
console.log(`Добуток цілих чисел від 15 до 35 - ${myResult}`);
console.groupEnd();

console.group('Знайти середнє арифметичне всіх цілих чисел від 1 до 500');
let value = 1;
let mySumm = 0;
while (value <= 500){
    mySumm += value;
    value++;
} 
console.log(`Середнє арифметичне цілих чисел від 1 до 500 - ${mySumm / 500}`);
console.groupEnd();

console.group('Вивести суму лише парних чисел в діапазоні від 30 до 80');
let p = 0;
for(n = 30; n<=80; n++){
    if(n % 2 === 0){
      p += n;
    }
} 
console.log(`Сума парних чисел в діапазоні від 30 до 80 - ${p}`);
console.groupEnd();
