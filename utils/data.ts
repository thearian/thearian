export function dateByYear(year: number, month: number, day: number): Date {
  const now = new Date()
  return new Date(
    now.setFullYear(year, month, day)
  )
}
