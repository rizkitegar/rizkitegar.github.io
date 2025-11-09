const monthMap: Record<string, number> = {
  jan: 0, january: 0, janari: 0, janvier: 0, januari: 0,
  des: 11, desember: 11, dec: 11, december: 11,
  okt: 9, oktober: 9, oct: 9, october: 9,
  feb: 1, february: 1, februari: 1,
  mar: 2, march: 2, maret: 2,
  apr: 3, april: 3,
  may: 4, mei: 4,
  jun: 5, june: 5, juni: 5,
  jul: 6, july: 6, juli: 6,
  aug: 7, august: 7, agustus: 7,
  sep: 8, september: 8,
  nov: 10, november: 10,
};

function parseDate(str: string): Date | null {
  const [monthRaw, yearRaw] = str.trim().split(/\s+/);
  if (!monthRaw || !yearRaw) return null;
  const month = monthMap[monthRaw.toLowerCase()];
  const year = parseInt(yearRaw, 10);
  if (isNaN(month) || isNaN(year)) return null;
  return new Date(year, month, 1);
}

/** Returns a human-readable duration string, e.g. "1 yr 2 mos". */
export function getDurationLength(duration: string): string {
  const [startStr, endStr] = duration.split(/—|-/).map((s) => s.trim());
  const start = parseDate(startStr);

  let end: Date;
  if (!endStr || /present/i.test(endStr)) {
    end = new Date(2026, 1, 1); // Feb 2026
  } else {
    const parsedEnd = parseDate(endStr);
    if (!parsedEnd) return '';
    end = parsedEnd;
  }

  if (!start || !end) return '';

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }

  if (years <= 0 && months <= 0) return 'Less than 1 mo';

  let result = '';
  if (years > 0) result += `${years} yr${years > 1 ? 's' : ''} `;
  if (months > 0) result += `${months} mo${months > 1 ? 's' : ''}`;
  return result.trim();
}
