export function formatDate(date: string) {
  const splitted = date.split('/');
  return `${splitted[2]}-${splitted[1]}-${splitted[0]}`;
}
