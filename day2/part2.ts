import { readFileSync } from 'node:fs'

const input = readFileSync('inputs/day2.txt', 'utf8')
const data = input.split('\n').filter(line => line.length > 0)

let sum = 0;

data.forEach((line: string) => {
  const game = line.split(': ')
  const gameData = game[1].split('; ')
  const cubes = {
    red: 0,
    green: 0,
    blue: 0
  }

  gameData.forEach((game: string) => {
    const colors = game.split(', ')
    colors.forEach((color: string) => {
      const [count, colorName] = color.split(' ')
      cubes[colorName] = Math.max(parseInt(count), cubes[colorName])
    })
  })

  const powers = Object.values(cubes).reduce((acc, val) => acc * val, 1)
  sum += powers
});

console.log(sum);
