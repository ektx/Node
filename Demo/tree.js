const fs = require('fs')

let total = 0
let data = []

let levelFun = (count, level) => {
  if (level > 5) return

  let arr = []
  let childSize = ~~(Math.random() * 20)


  for (let i = 0; i < count; i++) {
    total += 1
    let data = {
      key: `level${level}-${i}-${total}`,
      label: `level${level}-${i}-${total}`,
    }

    if (childSize > 0) {
      data.children = levelFun(childSize, level + 1)
    }

    arr.push(data)
  }

  return arr
}

data = levelFun(1, 0)

console.log(data)
console.log(total)

fs.writeFile('tree.json', JSON.stringify({
  list: data,
  total
}, '', '  '), (err) => {
  console.log(err)
})