const selections = ['gpu', 'cpu', 'ram'].map((part) => ({
  control: document.getElementById(part),
  comparison: document.getElementById(`your-${part}`),
}));
const summary = document.getElementById('selected-hardware');

function updateHardware() {
  const selected = [];
  for (const { control, comparison } of selections) {
    comparison.textContent = control.value || 'Not selected';
    if (control.value) selected.push(control.value);
  }
  summary.textContent = selected.length ? `Selected hardware — ${selected.join(' · ')}.` : '';
}

for (const { control } of selections) {
  control.addEventListener('change', updateHardware);
}
updateHardware();
