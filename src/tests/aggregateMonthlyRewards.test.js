import { aggregateMonthlyRewards } from "../utils/aggregateMonthlyRewards";

const mockData = [
  {
    transactionId: 1,
    customerId: 1,
    customerName: "John",
    purchaseDate: "2024-01-10",
    amount: 120,
  },
  {
    transactionId: 2,
    customerId: 1,
    customerName: "John",
    purchaseDate: "2024-01-15",
    amount: 75,
  },
];

describe("aggregateMonthlyRewards", () => {
  test("groups by customer and month", () => {
    const result = aggregateMonthlyRewards(mockData);

    expect(result.length).toBe(1);
    expect(result[0].rewardPoints).toBeGreaterThan(0);
  });

  test("returns empty array for invalid input", () => {
    expect(aggregateMonthlyRewards(null)).toEqual([]);
  });
});