export function dateByYear(year: number, month: number, day: number): Date {
  const now = new Date()
  return new Date(
    now.setFullYear(year, month, day)
  )
}

export function displayDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",

  }
  return date.toLocaleDateString("en-us", options)
}

export function diffMonths(date1: Date, date2: Date): number {
  const diff = date2.getTime() - date1.getTime()
  const diffDate = new Date(diff)
  return diffDate.getMonth()
}
