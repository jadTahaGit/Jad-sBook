const yearsSelect = document.getElementById('years');
const monthsSelect = document.getElementById('months');
const daysSelect = document.getElementById('days');

let year = new Date();
year = year.getFullYear();

for (let i = year; i > 1990; i--) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  yearsSelect.append(option);
}

for (let i = 1; i < 13; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  monthsSelect.append(option);
}

const updateNumberOfDays = () => {
  daysSelect.textContent = '';
  const month = monthsSelect.value;
  const year = yearsSelect.value;
  days = daysInMonth(month, year);
  for (i = 1; i <= days; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    daysSelect.append(option);
  }
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

updateNumberOfDays();
yearsSelect.addEventListener('change', updateNumberOfDays);
monthsSelect.addEventListener('change', updateNumberOfDays);
