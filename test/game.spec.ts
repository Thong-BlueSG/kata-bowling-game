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

    it("should be failed when knocked down pins is over 10 in 2 rolls", () => {
      game.roll(4);
      expect(() => game.roll(8)).toThrow();
    });

    it.skip("should be failed when knocked down pins 3rd time when no bonus", () => {
      game.roll(4);
      game.roll(5);
      expect(() => game.roll(3)).toThrow();
    });

    it("should not be failed when knocked down pins 3rd time when Spares", () => {
      game.roll(5);
      game.roll(5);
      expect(() => game.roll(3)).not.toThrow();
    });

    it.skip("should not be failed when knocked down pins 2rd time when Strike", () => {
      game.roll(10);
      expect(() => game.roll(2)).not.toThrow();
    });
  });
});
