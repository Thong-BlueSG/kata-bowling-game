import { PinError } from "./errors/PinError";
import { GameInterface } from "./game.interface";

export class Game implements GameInterface {
  knockedPins = 0;

  roll(pins: number): void {
    if (pins < 0) {
      throw new PinError("Pins is negative");
    }

    if (pins > 10) {
      throw new PinError("Pins is negative");
    }

    this.knockedPins += pins;
  }

  score(): number {
    return this.knockedPins;
  }
}
