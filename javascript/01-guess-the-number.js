/* eslint-disable no-console */

// 1: Guess The Number

// Write a program that will generate a number between 1 and 100. Your program will ask the user to guess the generated number.

// When the user types a guess, the program should tell them if they won (the guess matched the computer's number), if their guess was higher than the number the computer generated, OR if the guess was lower than the number the computer generated. Terminate the program if the user types "exit".


(() => {
  const answer = Math.floor(Math.random() * 100 + 1)
  
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Guess a number between 1 and 100: '
  })

  rl.prompt()

  rl.on('line', (line) => {
    if (['exit', 'quit'].indexOf(line.trim()) !== -1) rl.close()

    const guess = parseInt(line.trim())
    const valid = !isNaN(guess) && 1 <= guess && guess <= 100

    const msg = (!valid && 'Invalid input...')
      || (guess === answer && 'You win!')
      || (guess < answer && 'Too low!')
      || (guess > answer && 'Too high!')

    console.log(msg)
    msg === 'You win!' ? rl.close() : rl.prompt()
  }).on('close', () => {
    console.log('Thanks for playing!')
    process.exit(0)
  })
})()
  