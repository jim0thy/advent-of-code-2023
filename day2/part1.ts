import { readFileSync } from 'node:fs'

const input = readFileSync('inputs/day2.txt', 'utf8')
// const input = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\n" +
//   "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\n" +
//   "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\n" +
//   "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\n" +
//   "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"

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
