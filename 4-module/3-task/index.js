
function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach((row) => {
  const status = row.querySelector('td[data-available]');
  if (status && status.getAttribute('data-available') === 'true') {
          row.classList.add('available');
        } else if (status && status.getAttribute('data-available') === 'false'){
          row.classList.add('unavailable');
        }else {
          row.setAttribute('hidden', 'true');
      }
    const genderCell = row.querySelector('td:nth-child(3)');
    if(genderCell.textContent === 'm') {
      row.classList.add('male')
    }else if((genderCell.textContent === 'f')){
      row.classList.add('female')
    }
     const ageCell = row.querySelector('td:nth-child(2)');
    if (parseInt(ageCell.textContent) < 18) {
          row.style.textDecoration = 'line-through';
      }
      });
   
}

