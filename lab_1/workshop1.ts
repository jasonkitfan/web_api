import * as readline from 'readline-sync'

const items: string[] = []
let input: string

do {
  input = String(readline.question('enter command: ')).trim()
  const space: number = input.indexOf(' ')
  const item: string = input.substring(space).trim().toLowerCase()
  const index = items.indexOf(item)
  console.log(item)
  console.log(item.length)


  if (input.indexOf('add ') === 0) {
    if (items.includes("item")) {
      console.log(`${item} already exist: catch by include`)
      continue
    }
    if (items.indexOf(item) >= 0) {
      console.log(`"${item} already exist: catch by index"`)
      continue
    }
    console.log(`adding "${item}"`)
    items.push(item)
  }
  if (input.indexOf('remove ') === 0) {

    if (index >= 0) {
      console.log(`"remove ${item}"`)
      items.splice(index, 1)
    }
    else {
      console.log("item not found")
    }
  }
  if (input.indexOf('list') === 0) {
    for (let i = 0; i < items.length; i++) {
      console.log(`${i}. ${items[i]}`)
    }
  }
} while (input !== 'exit')
