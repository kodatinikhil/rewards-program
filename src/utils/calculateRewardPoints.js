export const calculateRewardPoints = (amount) => {
  if (typeof amount !== "number" || amount <= 0) return 0;

  const flooredAmount = Math.floor(amount);

  let points = 0;

  if (flooredAmount > 100) {
    points += (flooredAmount - 100) * 2; // above 100
    points += 50; // 50–100 band
  } else if (flooredAmount > 50) {
    points += flooredAmount - 50;
  }

  return points;
};