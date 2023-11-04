const element = document.getElementsByClassName('copyright-text')[0];

const startYear = 2023;
const currentYear = new Date().getFullYear();
const isYearDifferent = startYear < currentYear;
const textAppend = isYearDifferent? `${startYear}-${currentYear}` : currentYear;
element.innerHTML =  `&copy; ${textAppend}`