export function yearsSince(date: Date): number {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const hadAnniversary =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());
  if (!hadAnniversary) years -= 1;
  return years;
}
