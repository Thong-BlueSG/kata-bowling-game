# Kata: the Bowling Game
Inspired from [Uncle Bob](http://www.butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)

# Instructions
Prepare a class `Game` that contains 2 methods:
1. `roll(number): void` is called each time the player rolls a ball. The argument is the number of pins knocked down.
2. `score(): number` returns the total score for that game.

Those methods are covered [in the interface `GameInterface`](/src/game.interface.ts)

## Bowling Rules
The game consists of 10 frames.\
In each frame the player has two rolls to knock down 10 pins.\
The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

### Spares
A spare is when the player knocks down all 10 pins in two rolls.\
The bonus for that frame is the number of pins knocked down by the next roll.

### Strikes
A strike is when the player knocks down all 10 pins on his first roll.\
The frame is then completed with a single roll.\
The bonus for that frame is the value of the next two rolls.

### End of game
In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.\
However no more than three balls can be rolled in tenth frame.

# Installation

```bash
npm install
```

# Usage

## Run Tests
```bash
npm test
```

### Watching tests
```bash
npm run test:watch
```
