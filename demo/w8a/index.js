const simpleArray = [5, 3, 4, 5, 6]
/*
const objLiteral = { a: 5, b: 6 }
console.log(objLiteral.a)
console.log(objLiteral['a'])
console.log(simpleArray)
console.log(simpleArray[0])
*/

// Access elements
let sum = 0
for (let index = 0; index < simpleArray.length; index++) {
  sum = sum + simpleArray[index]
}
console.log(sum)

sum = 0
for (const item of simpleArray) {
  sum = sum + item
}
console.log(sum)

// Change elements
for (let index = 0; index < simpleArray.length; index++) {
  simpleArray[index] = simpleArray[index] + 2
}
console.log('for loop ', simpleArray)

for (let item of simpleArray) {
  item = item + 2 
}
console.log('for of ', simpleArray)

// Create new array
const newArray = []
for (let index = 0; index < simpleArray.length; index++) {
  newArray.push(simpleArray[index] + 2)
}
console.log('for', newArray)

const newArray2 = []
for (const item of simpleArray) {
  newArray2.push(item + 2)
}
console.log('for of', newArray)

// Create new array using map
function addTwo(value) {
  return (value + 2)
}

const newArray3 = newArray.map(addTwo)
console.log('map', newArray3)

// Create another new array using map
const newArray4 = newArray.map((value) => value + 2)
console.log('map 2', newArray4)

// Select elements from array
const filteredArray = []
for (let index = 0; index < simpleArray.length; index++) {
  if (simpleArray[index] % 2 === 0) {
    filteredArray.push(simpleArray[index])
  }
}
console.log('for', filteredArray)

const filteredArray2 = []
for (const item of simpleArray) {
  if (item % 2 === 0) {
    filteredArray2.push(item)
  }
}
console.log('for of', filteredArray)

function testElem(value) {
  return value % 2 === 0
}
const filteredArray3 = simpleArray.filter(testElem)
console.log(filteredArray3)

const filteredArray4 = simpleArray.filter((value) => value % 2 === 0)
console.log(filteredArray4)

// Sorting array
const todoList1 = [
  { completed: true, priority: 1, content: 'Complete demo' },
  { completed: true, priority: 2, content: 'Complete demo 2' },
  { completed: true, priority: 1, content: 'Complete demo 2' },
  { completed: true, priority: 2, content: 'Complete demo 2' },
  { completed: false, priority: 3, content: 'Complete demo 3' }
]
console.log(todoList1)
function printToDoList(todoList) {
  const elements = todoList.map((value) => {
    return `<p ${value.completed ? 'class="done"' : ''} priority="${value.priority}">
${value.content}
</p>`
  })
  console.log(elements)
  return elements
}
printToDoList(todoList1)

const filteredToDoList = todoList1.filter((value) => value.copmleted)
printToDoList(filteredToDoList)

const sortedToDoList = todoList1.sort((a, b) => a.priority - b.priority)

printToDoList(todoList1)
printToDoList(sortedToDoList)