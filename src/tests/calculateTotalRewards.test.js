import { calculateTotalRewards } from "../utils/calculateTotalRewards";

const mockData = [
  {
    transactionId: 1,
    customerId: 1,
    customerName: "John",
    amount: 120,
  },
  {
    transactionId: 2,
    customerId: 1,
    customerName: "John",
    amount: 75,
  },
  {
    transactionId: 3,
    customerId: 2,
    customerName: "Jane",
    amount: 100,
  },
];

describe("calculateTotalRewards", () => {
  test("groups by customer and sums points", () => {
    const result = calculateTotalRewards(mockData);

    expect(result.length).toBe(2);

    const john = result.find((c) => c.customerName === "John");
    const jane = result.find((c) => c.customerName === "Jane");

    expect(john.rewardPoints).toBeGreaterThan(0);
    expect(jane.rewardPoints).toBeGreaterThan(0);
  });

  test("handles empty input", () => {
    expect(calculateTotalRewards([])).toEqual([]);
  });

  test("handles invalid input", () => {
    expect(calculateTotalRewards(null)).toEqual([]);
  });
});