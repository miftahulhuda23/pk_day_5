const itWord = [
    'javascript',
    'crud',
    'react native',
    'camelCase',
    'variable',
    'nodejs',
    'express',
];

let longITwords = itWord.filter(word => word.length > 6);
console.log('long IT words are : ', longITwords);

let array1 = [1, 4, 9, 16];
const newArray = array1.map((x) => {
    return x * 2

})
console.log(newArray)

//find
let number = [5, 12, 8, 130, 44]
let numberFound = number.find((number) => number > 10)
console.log(numberFound)

//forEach
let numberSword = ['none', 'two', 'three']
let texts = ""

numberSword.forEach((number) => {
    texts += number + ","
})
console.log('text is :', numberSword)

let stringZealBatam = 'Zeal Batam Indonesia';
let resultChartAt = stringZealBatam.charAt(0)
console.log('result chartAt ;', resultChartAt)

let resultChartAt2 = stringZealBatam.charAt(1)
console.log('result chartAt :', resultChartAt2)

let resultChartAt3 = stringZealBatam.charAt(8)
console.log('result chartAt :', resultChartAt3)

let resultlength = stringZealBatam.length
console.log(resultlength)

let resultToUppercase = stringZealBatam.toUpperCase()
console.log(resultToUppercase)

let resultToLowercase = stringZealBatam.toLowerCase()
console.log(resultToLowercase)

let resultSplit = stringZealBatam.split(' ')
console.log(resultSplit)
resultSplit = stringZealBatam.split(' ', 2)
console.log(resultSplit)

let resultReplace =stringZealBatam.replace('Batam', 'KepulauanRiau')
console.log(resultReplace)

let resultSubstr = stringZealBatam.substr(0,6)
console.log(resultSubstr)
resultSubstr = stringZealBatam.substr(0,3)
console.log(resultSubstr)

//array Methods

let zealBatamArray = ['Zeal', 'Batam', 'Indonesia'];
let resultArrayLength = zealBatamArray.length;
console.log(`resultArrayLength is ${resultArrayLength}`)

let resultArrayIndexOf = zealBatamArray.indexOf('Batam');
console.log(resultArrayIndexOf)

resultArrayIndexOf = zealBatamArray.indexOf('Indonesia')
console.log(resultArrayIndexOf)

zealBatamArray.push('web')
console.log(zealBatamArray)

zealBatamArray.pop()
console.log(zealBatamArray)

let resultArrayJoin = zealBatamArray.join('--')
console.log(resultArrayJoin)

let resultArraySlice = zealBatamArray.slice(1)
console.log(resultArraySlice)
resultArraySlice = zealBatamArray.slice(1,2)
console.log(resultArraySlice)

zealBatamArray.sort()
console.log(zealBatamArray)

zealBatamArray.reverse()
console.log(zealBatamArray)

//Math Methods
let resultMathRandom = Math.random()
console.log(resultMathRandom)

let resultMathCeil = Math.ceil(2.5)
console.log(resultMathCeil)

let resultMathFloor = Math.floor(1.9)
console.log(resultMathFloor)

let resultMathFloorRound = Math.round(2.4)
console.log(resultMathFloorRound)
resultMathFloorRound = Math.round(2.5)
console.log(resultMathFloorRound)

// object
let object1 = {fname : 'Jhon'};
let object2 = {lname : 'Doe'};
let object3 = {age : 30};

let object4 = { ...object1, ...object2, ...object3 }
console.log(object4)

let object5 = { object1, object2, object3 }
console.log(object5)

let resultObjectKeys = Object.keys(object5)
console.log(resultObjectKeys)

//TimingMethods
// function firtsFunction() {
//     let count = 0;
//     setInterval(() => {
//         count++
//         alert('this is setInterval & alredy show in ${count} time'
//         ), 3000}
//     )
// }

// firtsFunction()

// function secound() {
//         setTimeout(() => {
//             alert('this is set time out')
//         },3000) 
// }

// secound()

fetch('https://jsonplaceholder.typicode.com/posts', {
    mode: 'cors',
    headers: {
        'content-type': 'application/json',
    },
})
    .then((data) => {
        console.log(data.json())
    })
    .catch((Error) => {
        console.log(Error)
    })