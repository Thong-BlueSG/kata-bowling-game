import { PinError } from "./errors/PinError";
import { GameInterface } from "./game.interface";

type Frame = number[];

export class Game implements GameInterface {
  private frames: Frame[] = [];

  roll(pins: number): void {
    if (pins < 0) {
      throw new PinError("Pins is negative");
    }

    if (pins > 10) {
      throw new PinError("Pins is more than 10");
    }

    const currFrame = this.getCurrFrame();

    if (currFrame.length === 2 && this.totalPins(currFrame) !== 10) {
      throw new PinError("Roll more than 2 when no bonus");
    }

    if (currFrame.length < 2 && this.totalPins(currFrame) + pins > 10) {
      throw new PinError("Total score is more than 10");
    }

    // if (this.scores.length < 2 && this.score() + pins < 10) {
    //   throw new PinError("Total score is more than 10");
    // }

    currFrame.push(pins);
  }

  score(): number {
    return this.frames.flat().reduce((prev, next) => prev + next, 0);
  }

  private totalPins(frame: Frame): number {
    return frame.reduce((prev, next) => prev + next, 0);
  }

  private getCurrFrame(): Frame {
    if (this.frames.length == 0) {
      this.frames.push([]);
      return this.frames[0];
    }

    return this.frames[this.frames.length - 1];
  }
}
