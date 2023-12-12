import { readFileSync } from 'node:fs'

let sum = 0
const data = readFileSync('inputs/day1.txt', 'utf8')
const lines: string[] = data.split('\n')
const numbers: Record<string, string> = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

lines.filter(line => line.length > 0).forEach((line: string) => {
  const digits = []
  let str = ""
  for (let char of line) {
    if (parseInt(char)) {
      digits.push(char)
    } else {
      str += char
      for (let num of Object.keys(numbers)) {
        if (str.endsWith(num)) {
          digits.push(numbers[num])
        }
      }
    }
  }

  sum += parseInt(`${digits[0]}${digits[digits.length - 1]}`)
})
console.log(sum)
