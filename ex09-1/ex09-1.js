
const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')



addButton.addEventListener('click', (event) => {
    const items = document.querySelectorAll('#list li')
    const newItem = document.createElement('li')
    newItem.textContent = 'アイテム' + (list.children.length + 1)
    list.appendChild(newItem)
})


removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastElementChild)
})


//アイテム1, アイテム2, のようにその要素が何番目かに応じて番号を振る　←やり方がわからず答えを見ました。