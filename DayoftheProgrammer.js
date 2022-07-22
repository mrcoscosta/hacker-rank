function dayOfProgrammer(year) {
  // calenadrio gregoriano
  if (year >= 1700 && year <= 2700) {
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }

    if (year === 1918) {
      return `26.09.${year}`;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `12.09.${year}`;
    } else {
      return `13.09.${year}`;
    }
  }
}
