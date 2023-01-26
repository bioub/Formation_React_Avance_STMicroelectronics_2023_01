import { memoize } from 'lodash-es';

let todos = new Array(2_000_000).fill({}).map(() => ({ id: Math.random(), title: 'ABC', completed: Math.random() > 0.5 }));

function todosCompletedSelector(todos) {
  return todos.filter((t) => t.completed);
}

const todosCompletedSelectorMemo = memoize(todosCompletedSelector);

console.time('Todos completed');
console.log('Todos completed : ' + todosCompletedSelectorMemo(todos).length);
console.timeEnd('Todos completed');

console.time('Todos completed');
console.log('Todos completed : ' + todosCompletedSelectorMemo(todos).length);
console.timeEnd('Todos completed');

// changement muable (ne permet la memoisation)
// todos.push({ id: Math.random(), title: 'ABC', completed: true })

// changement immuable (permet la memoisation)
todos = [...todos, { id: Math.random(), title: 'ABC', completed: true }]

console.time('Todos completed');
console.log('Todos completed : ' + todosCompletedSelectorMemo(todos).length);
console.timeEnd('Todos completed');


function createHandleDeleteCallback() {
  return () => {
    // traitement sur todo todos...
  };
}