import { PinError } from "./errors/PinError";
import { GameInterface } from "./game.interface";

type Frame = number[];

export class Game implements GameInterface {
  private knockedPins = 0;

  private rollFrames: Frame[] = [];

  roll(pins: number): void {
    if (pins < 0) {
      throw new PinError("Pins is negative");
    }

    if (pins > 10) {
      throw new PinError("Pins is more than 10");
    }

    // const curFrame = (this.rollFrames[this.rollFrames.length - 1] ??= []);

    // const prevScore = this.rollFrames[this.rollFrames.length - 1].reduce(
    //   (prev, next) => prev + next,
    //   0
    // );

    if (pins + this.knockedPins > 10) {
      throw new PinError("Pins is more than 10");
    }

    // curFrame.push(pins);
    // if (pins === 10) {
    //   this.rollFrames.push(0);
    // }

    this.knockedPins += pins;
  }

  score(): number {
    return this.knockedPins;
  }
}
