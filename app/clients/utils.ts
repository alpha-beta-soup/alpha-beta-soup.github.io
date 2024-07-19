export type Client = {
    name: string;
    when: DateRange;
    where: string;
    url: string;
    image?: string;
    component?: React.ReactElement
}

export class DateRange {
  startDate: Date;
  endDate: Date  | null;
  locale: string;

  constructor(startDate: string | Date, endDate?: string | Date, locale: string = 'en-NZ') {
    this.startDate = new Date(startDate);
    this.endDate = endDate ? new Date(endDate) : null;
    this.locale = locale;
  }

  contains(date: string | Date): boolean {
    const targetDate = new Date(date);
    if (this.endDate) {
      return targetDate >= this.startDate && targetDate <= this.endDate;
    }
    return targetDate >= this.startDate;
  }

  toString(): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const startStr = this.startDate.toLocaleString(this.locale, options);
    const endStr = this.endDate ? this.endDate.toLocaleString(this.locale, options) : 'Present';
    return `${startStr} – ${endStr}`;
  }
} 