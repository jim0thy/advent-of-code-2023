import { readFileSync } from 'node:fs'

const input = readFileSync('inputs/day2.txt', 'utf8')
const data = input.split('\n').filter(line => line.length > 0)

const sum = data.reduce((acc, line) => {
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

  return acc + Object.values(cubes).reduce((powers, val) => powers * val, 1)
}, 0);

console.log(sum);
