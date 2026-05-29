import { calculateRewardPoints } from "../utils/calculateRewardPoints";

describe("calculateRewardPoints", () => {
  test("returns 0 for <= 50", () => {
    expect(calculateRewardPoints(40)).toBe(0);
  });

  test("50–100 range", () => {
    expect(calculateRewardPoints(75)).toBe(25);
  });

  test("exact 100", () => {
    expect(calculateRewardPoints(100)).toBe(50);
  });

  test("above 100", () => {
    expect(calculateRewardPoints(120)).toBe(90);
  });

  test("decimal handling", () => {
    expect(calculateRewardPoints(100.4)).toBe(50);
  });

  test("invalid input", () => {
    expect(calculateRewardPoints(null)).toBe(0);
  });
});