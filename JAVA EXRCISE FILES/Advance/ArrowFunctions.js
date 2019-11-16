// let sayHello = (name) => {
//     return `Hi this is ${name}`
// }

// let sayHello = (name) => `Hi this is ${name}`

// console.log(sayHello('Dinesh'))

let newTodos = [{
    title: 'By a Banana',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Do the office work',
    isDone: false,
}, {
    title: 'Have lunch',
    isDone: true,
}, {
    title: 'Have Dinner',
    isDone: true,
}, {
    title: 'Go to bed',
    isDone: true,
}];

let findTitls = newTodos.filter((todos) => todos.isDone === false)
//findTitls.forEach(items => console.log(items.title))
findTitls.forEach(function(items){
    console.log(items.title)
})
