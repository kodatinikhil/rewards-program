export const sortTransactionsByDate = (transactions) => {
  if (!Array.isArray(transactions)) return [];

  return [...transactions].sort((a, b) => {
    const dateA = new Date(a.purchaseDate);
    const dateB = new Date(b.purchaseDate);

    return dateA - dateB; // ascending order
  });
};