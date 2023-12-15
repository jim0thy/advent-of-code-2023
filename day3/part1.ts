import { readFileSync } from 'node:fs'

let sum = 0
const data = readFileSync('inputs/day3.txt', 'utf8')
const lines: string[][] = data.split('\n').map((line) => line.split('')).filter(line => line.length > 0)

const isNumber = (n: string): boolean => !Number.isNaN(parseInt(n))
const isAFullStop = (n: string): boolean => n === '.'
const isASymbol = (n: string): boolean => !isNumber(n) && !isAFullStop(n)

const findEntireNumber = (line: string[], index: number): number[] => {
  let number = ''
  let i = index
  while (isNumber(line[i])) {
    number += line[i]
    i++
  }
  return [number.length, parseInt(number)]
}

const findBoundingChars = (j: number, length: number, i: number, line: string[]) => {
  const start = j === 0 ? 0 : j - 1
  const end = j === 0 ? length + 1 : j + length + 1
  const top = lines[i - 1]?.slice(start, end) ?? []
  const bottom = lines[i + 1]?.slice(start, end) ?? []
  const left = line[start] ?? '.'
  const right = line[j + length] ?? '.'
  return { top, bottom, left, right }
}

for (const [i, line] of lines.entries()) {
  for (let j = 0; j < line.length; j++) {
    if (isNumber(line[j])) {
      const [length, num] = findEntireNumber(line, j)
      const { top, bottom, left, right } = findBoundingChars(j, length, i, line)
      if (
        top.some(c => isASymbol(c)) ||
        bottom.some(c => isASymbol(c)) ||
        isASymbol(left) ||
        isASymbol(right)
      ) {
        sum += num
      }
      j += length
    }
  }
}

console.log(sum)
