const selections = ['gpu', 'cpu', 'ram'].map((part) => ({
  control: document.getElementById(part),
  comparison: document.getElementById(`your-${part}`),
}));
const tier = document.getElementById('reference-tier');
const detail = document.getElementById('reference-detail');
const referenceLabel = 'Historical reference only (not official GTA 6 specs)';

function updateHardware() {
  for (const { control, comparison } of selections) {
    comparison.textContent = control.value ? control.selectedOptions[0].textContent : 'Not selected';
  }

  const [gpu, cpu, ram] = selections.map(({ control }) => control.selectedOptions[0]);
  let result = '';
  let explanation = 'Choose your graphics card, processor, and memory to check a reference tier.';

  if (gpu.value && cpu.value && ram.value) {
    const gpuProfile = gpu.parentElement.dataset.reference;
    const cpuProfile = cpu.parentElement.dataset.reference;
    if (Number(ram.value) < 8) {
      result = 'Below the RDR2 minimum reference';
      explanation = 'Your selected RAM is below the 8 GB minimum listed for RDR2.';
    } else if (gpuProfile === 'gtav' && cpuProfile === 'gtav' && ram.hasAttribute('data-dual-channel')) {
      result = 'Meets the GTA V Enhanced recommended reference';
      explanation = 'Your GPU and CPU match the listed options, and your RAM meets the dual-channel recommendation.';
    } else if (gpuProfile === 'rdr2' && cpuProfile === 'rdr2' && (Number(ram.value) >= 8 || ram.value === '16-plus')) {
      result = 'Meets the RDR2 minimum reference';
      explanation = 'Your GPU and CPU are listed for RDR2, and your RAM meets its minimum.';
    } else {
      result = 'Match unverified';
      explanation = 'These selections don’t establish a match with either reference profile. Check the exact models and memory configuration.';
    }
  }

  tier.textContent = result ? `${result} — ${referenceLabel}` : referenceLabel;
  detail.textContent = explanation;
}

for (const { control } of selections) {
  control.addEventListener('change', updateHardware);
}
updateHardware();
