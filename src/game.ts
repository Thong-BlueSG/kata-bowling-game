import { PinError } from "./errors/PinError";
import { GameInterface } from "./game.interface";

type Frame = number[];

export class Game implements GameInterface {
  private scores: number[] = [];

  roll(pins: number): void {
    if (pins < 0) {
      throw new PinError("Pins is negative");
    }

    if (pins > 10) {
      throw new PinError("Pins is more than 10");
    }

    if (this.scores.length === 2) {
      throw new PinError("Roll more than 2 when no bonus");
    }

    if (this.score() + pins > 10) {
      throw new PinError("Total score is more than 10");
    }

    this.scores.push(pins);
  }

  score(): number {
    return this.scores.reduce((prev, next) => prev + next, 0);
  }
}
