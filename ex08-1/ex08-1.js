const link = document.getElementsByTagName('a')
console.log(link)
console.log(link[0].textContent)

const todo = document.getElementById('todo')
console.log(todo.children)
console.log(todo.children[0].textContent)

const listItem = document.querySelectorAll('.list li')
console.log(listItem[4])
console.log(listItem[4].textContent)
