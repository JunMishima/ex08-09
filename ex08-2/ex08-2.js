const body = document.body
const newItem = document.createElement('h1')
newItem.textContent = 'DOM'
console.log(newItem)
body.appendChild(newItem)

const newP = document.createElement('p')
newP.textContent = 'JavaScriptからHTMLを扱うための仕組み'
console.log(newP)
body.appendChild(newP)

const newH = document.createElement('h2')
newH.textContent = '印象に残っているトピック'
console.log(newH)
body.appendChild(newH)

const newU = document.createElement('ul')
newU.textContent = ''
console.log(newU)
body.appendChild(newU)

const newL0 = document.createElement('li')
newL0.textContent = 'documentオブジェクト'
console.log(newL0)
body.appendChild(newL0)

const newL1 = document.createElement('li')
newL1.textContent = 'getElementById'
console.log(newL1)
body.appendChild(newL1)

const newL2 = document.createElement('li')
newL2.textContent = 'イベントリスナ'
console.log(newL2)
body.appendChild(newL2)




// ul要素の中にliを入れる方法がわかリませんでした。