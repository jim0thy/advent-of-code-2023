import { readFileSync } from 'node:fs'
import { join as joinPath } from 'node:path'

let sum = 0
const data = readFileSync('inputs/day1.txt', 'utf8')
const lines: string[] = data.split('\n')

lines.filter(line => line.length > 0).forEach((line: string) => {
  const digits = line.match(/\d/g) ?? []
  sum += parseInt(`${digits[0]}${digits[digits.length - 1]}`)
})

console.log(sum)

