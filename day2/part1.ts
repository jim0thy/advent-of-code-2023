import { readFileSync } from 'node:fs'

const input = readFileSync('inputs/day2.txt', 'utf8')
const data = input.split('\n').filter(line => line.length > 0)

const MAX_CUBES = {
  red: 12,
  green: 13,
  blue: 14
}

let sum = 0;

data.forEach((line: string) => {
  const game = line.split(': ')
  const gameNumber = game[0].split(' ')[1]
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

  if (cubes.red <= MAX_CUBES.red && cubes.green <= MAX_CUBES.green && cubes.blue <= MAX_CUBES.blue) {
    console.log(cubes)
    sum += parseInt(gameNumber)
  }
});

console.log(sum);
