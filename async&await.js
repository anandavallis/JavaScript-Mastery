async function fetchTodo() {
try {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
return data;
} catch (error) {
console.error('Error fetching data:', error);
}
}

fetchTodo().then(result => console.log(result));
