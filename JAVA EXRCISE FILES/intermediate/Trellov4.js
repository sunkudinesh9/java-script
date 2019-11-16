let newTodos = [{
    title: 'By a Banana',
    isDone: false,
}, {
    title: 'Go to Gym',
    isDone: false,
}, {
    title: 'Do the office work',
    isDone: true,
}];

//Method 3
let findTodo = function (myTodos, givenTitle) {
    const titleReturned = myTodos.find(function (todos, index) {
        return todos.title.toLowerCase() == givenTitle.toLowerCase();
    })
    return titleReturned;
}

console.log(findTodo(newTodos, 'Do the office work'));

//Method 1
let findTodo = function (myTodo, title) {
    for (let i = 0; i < myTodo.length; i++) {
        if (myTodo[i].title.toLowerCase() == title.toLowerCase()) {
            return myTodo[i];
        }
    }
}
console.log(findTodo(newTodos, 'Do the office work'));

//Method 2
// let findTodo = function (myTodos, givenTitle) {
//     const index = myTodos.findIndex(function (todos, index) {
//         return todos.title.toLowerCase() == givenTitle.toLowerCase();
//     })
//     return myTodos[index];
// }

// console.log(findTodo(newTodos, 'Do the office work'));