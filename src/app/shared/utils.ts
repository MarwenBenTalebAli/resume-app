export function formatDateForInput(date: string): string {
  if (!date) {
    return '';
  }

  const [day, month, year] = date.split('/');

  return `${year}-${month}-${day}`;
}

export function formatDateForStorage(date: string): string {
  if (!date) {
    return '';
  }

  const [year, month, day] = date.split('-');

  if (!year || !month || !day) {
    return '';
  }

  return `${day}/${month}/${year}`;
}
