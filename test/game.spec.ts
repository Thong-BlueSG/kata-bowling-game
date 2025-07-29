import { PinError } from "../src/errors/PinError";
import { Game } from "../src/game";
import { GameInterface } from "../src/game.interface";

describe("Game", () => {
  let game: GameInterface;

  beforeEach(() => {
    game = new Game();
  });

  describe("ValidateInput", () => {
    it("should be failed when pin is negative", () => {
      expect(() => game.roll(-1)).toThrow(PinError);
    });

    it("should be failed when pin is over 10", () => {
      expect(() => game.roll(11)).toThrow(PinError);
    });
  });

  describe("NormalGame", () => {
    it("should return 0 in the start of the game", () => {
      expect(game.score()).toBe(0);
    });

    it("should return a score according to knocked down pins", () => {
      game.roll(1);
      expect(game.score()).toEqual(1);
    });

    it("should return a score according to total knocked down pins", () => {
      game.roll(1);
      game.roll(3);
      expect(game.score()).toEqual(4);
    });

    it("should be failed when knocked down pins in one frame is over 10", () => {
      game.roll(4);
      expect(() => game.roll(8)).toThrow();
    });

    it("should be failed when knocked down pins is more than 10 in 3 rolls", () => {
      game.roll(4);
      game.roll(5);
      expect(() => game.roll(3)).toThrow();
    });

    it.skip("should return a score plus spare bonus", () => {
      game.roll(4);
      game.roll(6);
      game.roll(7);

      expect(game.score()).toBe(24);
    });
  });
});
