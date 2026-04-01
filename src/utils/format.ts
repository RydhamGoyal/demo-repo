export function formatMoney(value: number, currency: string = 'USD'): string {
  const safeValue = typeof value === 'number' ? value : 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(safeValue);
}

export function toTitleCase(input: string): string {
  if (!input) return '';
  return input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
