export const money = (amount, currency = 'ETB', minimumFractionDigits = 2) => {
  const formatter = new Intl.NumberFormat('en-ET', {
    style: 'currency',
    currency,
    minimumFractionDigits,
  });

  return formatter.format(amount / 100);
};
