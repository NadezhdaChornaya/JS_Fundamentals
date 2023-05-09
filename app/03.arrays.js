// console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.



// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Display them in the console.

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Display them in the console.

// Task 04
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.
// let sum = 0;
// [1,25,75,90,4,6].forEach(el => {
//   if (el > 50) {
//     sum += el;
//   }
// });
// console.log(sum)

// Task 05
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.
// const b = ['a','b','c',]
// console.log(...b)
// Task 06
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Display it in the console.






// Task 07
// RU: Создать массив [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 100_001, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

const a = [3, 0, -1, 12, -2, -4, 100_001, 0, 7, 2];
console.log(a.sort((a,b)=>a-b));

// Task 08
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and display it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

const arr = ["Jazz", "Blues"]
arr.push("Rock-n-Roll")
arr.splice(arr.length-2, 1, "Classics")
const [firstEl, ...arr1] = arr;
arr.unshift("Rap", "Reggae")
console.log(arr)
// Task 09
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.


const bla = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
const r = bla.split('r').length-1;
console.log(r)
// Task 10. Aleh Hupalo
// RU: Создать строку содержащую буквы и цифры.
//     Получить максимальное число, состоящее из цифр, существующих в созданной строке.
//     Тестовые данные:
//     - 'sd231gt04' -> 43210
//     - '00HT00jtr' -> 0
// EN: Create a string containing letters and digits.
//     Get the maximum number consisting of digits existing in the created string.
//     Test data:
//     - 'sd231gt04' -> 43210
//     - '00HT00jtr' -> 0

const yyyy='sd231gt04';
const nnnn = +yyyy.split('')
  .filter(el => !Number.isNaN(+el))
  .sort((a,b) => b-a)
  .join('')

console.log(nnnn);
// Task 11. (Maksym Koval1 <Maksym_Koval1@epam.com>)
// RU: Есть строка, представляющая rgb цвет, например 'rgb(255, 255, 78)'.
//     Необходимо извлечь из строки номера цветов и вывести их в консоль через разделитель "-".
// EN: There is a string representing the rgb color, for example 'rgb(255, 255, 78)'.
//     It is necessary to extract the numbers of colors from the string and output 
//     them to the console through the "-" separator.

const rgb = 'rgb(255, 255, 78)';
const ooo = rgb.slice(4, rgb.length-1).split(', ').join('-')
console.log(ooo);


// Task 12
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

const arr12 = [1,2,3,4,5,6,7,8,9]
//по умолчанию смотрит от 0 до 1
const randomIndex=Math.floor((Math.random() * arr12.length));
console.log(arr12[randomIndex])

// Task 13
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

const arr13 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

arr13.forEach(nestad => console.log(nestad.join(' ')))

// Task 14
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// const arr14 = arr13.flat(1)


const arr14 = arr13.reduce((acc, el) => {
  return [...acc, ...el]
}, [])

console.log(arr14)

// Task 15
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// slice


// Task 16
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and display it in the console.


const arr16 = [1,2,3,1,5,6,10]
el = 1
const index1 = arr16.findIndex(elArr => elArr ===el)
const index2 = arr16.findIndex((elArr, index) => elArr ===el && index > index1)

console.log(arr16.indexOf(el, 2))

// Task 17
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// const arr17 = [1,2,3,1,5,6,10]
//
// const eee = new Set(arr17);
//
// arr17.reduce((acc,el) => {
//   if (acc.includes((el))) {
//     return;
//   }
//   return [...acc, ...el]
// }, [])


// Task 18
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// Task 18
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// const arr18 = [10,10, 1,2,3,1,5,6,10]
//
// for (let el of arr18) {
//   const gg = arr18.filter((item, index) => item === el )
//
//   if (gg.length > 1) {
//     arr18.forEach((item, index, arr) => {
//       if(item ===el) {
//         arr18[index] = '*'
//       }
//     })
//     break;
//   }
// }
//
// console.log(arr18)

// Task 19
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

const arr19 = [10,10, 1,2,3,1,5,6,10]

arr19.map(el => `0b${el.toString(2)}`)
arr19.map(el => `0o${el.toString(8)}`)
arr19.map(el => `0x${el.toString(16)}`)

console.log(`0b${10..toString(2)}`)

// Task 20
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

const arr20 ='a big brown fox jumps over the lazy dog'
console.log(arr20.split(' ').filter(el => el.length <= 3));

// Task 21
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

const arr21 = [10,'10', 1,2,3,'1',5,6,10]

console.log(arr21.every(el => typeof el === 'string'));

// Task 22
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

const arr22 = [1,3,5,10,23,56,100,231]
const value = 10
function binarySearch(arr, value) {
  let leftIndex = 0;
  let rightIndex = arr22.length-1;
  let middleIndex;

  if(value < arr22[leftIndex] || value > arr[rightIndex]) {
    return -1;
  }

  while(leftIndex<= rightIndex) {
    middleIndex = Math.floor((leftIndex+rightIndex)/2)

    if(value===arr22[middleIndex]) {
      return middleIndex
    } else if (value < arr22[middleIndex]) {
      rightIndex= middleIndex-1
    } else if (value > arr22[middleIndex]) {
      leftIndex = middleIndex+1;
    }
  }

  return -1
}

console.log(binarySearch(arr22, value))




// const array = [1, 2, 3, [4, [5, 6]]];
// array.flat(); //immutable, [1, 2, 3, 4, [5,6]]
// array.flat(2); //[1, 2, 3, 4, 5, 6]
// array.flat(-2); //[1, 2, 3, 4, [5,6]]
// array.flat(Infinity); //не зная вложенности извлечь все
// //analog
// array.reduce((acc, el) => {
//   return [...acc, ...el]}, [])
// //map+flat
// const arr0 = [1, 2, [3], [4, 5], 6, []];
// arr0.flatMap(num => num);//[1, 2, 3, 4, 5, 6]

// const array = [1, 2, 3, 4];
// const [bla1, bla2, bla3, bla4, bla5] = array; //1 2 3 4 undefined
// const [bla1, , bla3] = array; //bla3=3
// const [bla1, ...rest] = array; //[2, 3, 4]
// const [bla1, bla2] = []; //undefined
// const [max, min] = '90'; //max=9; min=0;

// const unicArr = new Set(); //or new Set(['Hello', 'Piter'])
// unicArr.add('Hello').add('Piter')
// unicArr.size //2
// unicArr.has('Hello') //true
// unicArr.keys(); //{'Hello', 'Piter'} не как в arr [0,1,2]
// unicArr.values(); //{'Hello', 'Piter'}
// unicArr.delete('Piter');
// unicArr.clear() //delete all
// //WeakSet - только НЕ примитивная коллекция, состоит из obj
// new WeakSet([1, 2]); //error
// const weak = new WeakSet([{}, {}]);
// weak.size; //undefined нет такого метода
// weak.has({}); //false - new link
// weak.delete({});
// //если заменим obj={}, то сборщик мусора сам удалит из WeakSet

//
// const realArray = [1,2,3,4,5,6];
// realArray.forEach((value, index, array) => {
//   //value - копия елемента, немутабельный
//   array.push('new') //не добавит, длина array фиксирована
//   array.splice(2,1).push('new') //добьавит на освободивш.место
//   realArray[index] = 'someNewValue'; //для изменения в реальном массиве
// })//ничего не вернет
// realArray.map((value, index, array) => {})
// //новый массив той же длины,для трансформации
// realArray.filter((value, index, array) => {})
// //новый массив,для удаления.фильтрации
// realArray.every((value, index, array) => {
//   value.length === 1 //true, тк проверяет отдельно каждый елемент
//   1.length //undefined
// })//true/false
// realArray.reduce((start, next, index, array) => {
//   //без acc
//   start = 1; next = 2;
//   //с acc
//   start = acc
// }) //мутирует массив
// realArray.reduceRight() //начинает с последнего елемента

//
// let task = {};
// task.action = 'Create';
// task.getInfo = function () {return true;}
//
// let task1 = {
//   action: 'Create',
//   getInfo: function () {return true;},
//   respond: ['Anna', 'Boris'],
//   arr: [
//     {action: 'Create', isDone: true},
//     {action: 'Delete', isDone: false}
//   ]
// }
// let fff = 'action';
// task1.getInfo();
// task['getInfo'];
// task1[fff];
// task1.respond[1]; //'Boris'
// task.someValue; //undefined
// task1.arr[1].action // 'Delete'
// task1.users[1].name // Error: cannot read property of undefined
// task1.users?.[1].name //undefined   with optional chaining ?.
// task.someMethod() // Error: someMethod is not a function
// task.someMethod  // undefined
// task.someMethod?.() //undefined
//
// const o1 = null;
// const o2 = undefined;
// const o3 = {name: 'Anna'};
// const o4 = {o: null}
// {...task, ...o1, ...o2, ...o3, ...o4}
// // {action: 'Create', getInfo: function () {return true;},name: 'Anna', o: null}
// //null and undefined will be ignored
//
// delete task.action;
// delete task1['getInfo'];
//
// //Вычисляемые свойства
// const key = 'person';
// const getKey = () => 'age';
// const task2 = {
//   [key]: 'Vasa',
//   [getKey()]: 18
// }
// task2.person; //'Vasa'
//
// //При создании через литерал объекта создается {} и!! prototype Object
// typeof task.toString //toString(без вызова) есть в prototype - return function
//
// //операторы условия
// const obj = {
//   isDone: true,
//   hours: 0
// }
// obj.hours || 'empty'; // 'empty'
// obj.hours ?? 'empty'; // 0  ??(ES2020) ignore only null/undefined
//
// const newObj = obj;
// newObj.isDone //true newObj - new reference to the same obj
//
// //THIS scope
// const objThis = {
//   isDone: true,
//   hours: 16,
//   getObject: function () {
//     console.log(this);
//   },
//   updateHours: function (value) {
//     let fn = function () {
//       console.log(this);
//     };
//     fn(); // return window object//undefined in 'use strict'
//   }
// }
// objThis.getObject() //return Object objThis
// objThis.updateHours(8) // window object//undefined in 'use strict'
// objThis.hours // 8

//PROPERTY TUNING
// Object.defineProperty()
// //create obj property, by default readonly и неисчисляемый
// let task = {};
// Object.defineProperty(task, 'action', {value: 'doIt'});
// //readonly
// task.action = 'new';
// task.action// 'doIt' or with 'use strict' return Error:
// // Error: cannot assign readonly property 'action of object
// Object.defineProperty(task, 'action', {
//   value: 'doIt',
//   writable: true //разрешит перезаписывать значение
// });
// //неисчисляемый
// for (let field in task) {
//   console.log(field) //return nothing, потому что неисчисляемый
// }
// Object.defineProperty(task, 'action', {
//   value: 'doIt',
//   enumerable: true //сделает свойство исчисляемым
// });
// // !!if call defineProperty again for same property get Error
// Object.defineProperty(task, 'action', {
//   value: 'doIt',
//   configurable: true //даст возм.пересоздать свойство через defineProperty
// });
//
// Object.defineProperties()
// let task = {};
// Object.defineProperty(task, {
//   'action': {value: 'doIt'},
//   'priority': {value: 'High'}
// });
// Object.getOwnPropertyDescriptor()
// let descriptor = Object.getOwnPropertyDescriptor(
//   task, 'action'
// )
//{value: 'doIt', writable: false, enumerable: false, configurable: false}
//ES2017
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyDescriptors(task)//return all descriptors for all properties
//{action: {all descriptors}, priority: {all descriptors} }

//OBJECT TUNING
// Object.isExtensible() //check can I add dynamically sms
// let task = {
//   id: 1
// };
// Object.isExtensible(task); //true
//
// Object.preventExtensions(task); //not allow add new properties
// task.id = 2;
// task.action = 'Create';
// console.log(task); //{id: 2} without action property
// //with 'use strict' we'll get Error: cannot add action property
//
// Object.isFrozen() //frozen -нет возм.выполнять любые действия с объектом
// Object.isFrozen(task); //false

// Object.freeze(task); //!!not deep freeze, not freeze nested obj
// Object.isFrozen(task); //true
// task.id = 2; //'use strict' Error: cannot assign readonly property
// let task2 ={
//   prop: {
//     action: 'Create'
//   }
// }
// Object.freeze(task2);
// task2.prop.action = 'Delete' //'Delete'(not freeze nested obj)
//
//
//
// Object.seal()
//
//
// Object.isSealed()

// if (task.action) {} //true
// task.hasOwnProperty('action')// true
// //only own property, not in prototype
// 'action' in task; //true
//
// if (task.toString) {} //true
// task.hasOwnProperty('toString')// false
// 'toString' in task; //true, couse search in prototype






