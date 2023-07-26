/*
№1 (выполнено в классе)
Создать интерфейс Student со следующими полями:
firstName
lastName
isActive
specialization   (QA или FullStack)
group
missedСlasses (количество пропущенных занятий)
 Создать несколько объектов-студентов 
 
№2
Создать расширенный интерфейс студента с полями
additionalGroup[] 
(массив, содержащий дополнительные группы, необязательное поле)
isRepeat (студент повторяет курс или нет)
Создать несколько объектов



*/


interface Student{
  firstName:string,
  lastName:string,
  isActive:boolean,
  specialization:"QA"|"Fullstack",
  group:string,
  missedClasses:number  
}

let student1:Student={
    firstName: "Natalia",
    lastName: "Groo",
    isActive: true,
    specialization: "QA",
    group: "cohort23",
    missedClasses: 3
} 
let student2:Student={
    firstName: "Oleg",
    lastName: "Blum",
    isActive:false,
    specialization: "Fullstack",
    group: "cohort26",
    missedClasses: 8
}
interface AdvancedInterfaceStudent extends Student{
    additionalGroup?:string[],
    isRepeat:boolean
} 
let student3:AdvancedInterfaceStudent={
    firstName: "Anna",
    lastName: "Braun",
    isActive: true,
    specialization: "QA",
    group: "cohort27",
    missedClasses: 1,
    isRepeat: false,
    additionalGroup:["cohort30","cohort 28"]
}
let student4:AdvancedInterfaceStudent={
    firstName: "Oscar",
    lastName: "Grey",
    isActive: false,
    specialization: "Fullstack",
    group: "cohort27",
    missedClasses: 8,
    isRepeat: true
     
}

// №3
// Создать функцию, которая принимает массив чисел и возвращает их сумму. 

function getSum(arr:number[]):number{
    return arr.reduce((acc,num)=>acc+num,0);
}

/*
еще варианты
let sum =0;
  arr.forEach((num)=>{
    sum += num;
  });

   let sum = 0; 
     for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
     }
     return sum;
*/
//console.log(getSum([3,5,2]));


// №4
// Создать функцию, которая принимает тип платежа (“cash”, “card”, “bank transfer”) и возвращает код 100, 200, 300 соответственно.
 type Payment = "cash"|"card"|"bank transfer";
 type Code = 100|200|300
 function getCode(str:Payment):Code{
    if(str=="cash"){
        return 100;
    }
    if(str=="card"){
        return 200;
    }else{
        return 300;
    }
 }
 /*
 function getCode(str:"cash"|"card"|"bank transfer"):100|200|300 {
    switch(str){
        case "cash": return 100;
        case "card": return 200;
        case "bank transfer": return 300;
    }
    
}
 */

   //console.log(getCode("bank transfer"));
   //console.log(getCode("cash"));
   //console.log(getCode("card"));
 
/*
№5*
Создать тип данных описывающий функцию, которая принимает аргумент-массив чисел и возвращает число. 
Создать переменную этого типа, в которую положить функцию написанную на шаге 3. Вызвать ее.
*/

type FunctionForArray = (arr: number[])=>number;
let func:FunctionForArray = getSum;

console.log(func([12,43,5]));
