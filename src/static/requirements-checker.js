import { mappedHardware } from './requirements-hardware.js';

const selections = ['gpu', 'cpu', 'ram'].map((part) => ({
  control: document.getElementById(part),
  comparison: document.getElementById(`your-${part}`),
}));
const official = {
  rdr2: ['RDR2 minimum or recommended', 'https://support.rockstargames.com/articles/1LqwiYbHeiSyo3dtcVyS1N/red-dead-redemption-2-pc-system-requirements'],
  gtav: ['GTA V Enhanced recommended', 'https://support.rockstargames.com/articles/lMQXeP2Z1mN3g9oZiBZFR/grand-theft-auto-v-pc-system-requirements'],
};
const labels = { below: 'Below RDR2 minimum reference', rdr2: 'RDR2 minimum reference', gtav: 'GTA V Enhanced recommended reference' };
const referenceLabel = 'Historical reference only (not official GTA 6 specs)';
const tier = document.getElementById('reference-tier');
const detail = document.getElementById('reference-detail');
const hardwareBasis = document.getElementById('hardware-basis');
const hardwareCatalog = document.getElementById('hardware-catalog');
const hardware = new Map();

function basisRow(name, record) {
  const row = document.createElement('li');
  if (!record) {
    row.textContent = `${name} — Unverified. No documented model mapping.`;
    return row;
  }
  const source = document.createElement('a');
  source.href = record.source;
  source.textContent = record.inferred ? 'Manufacturer specifications' : 'Rockstar requirements';
  row.append(`${name} — ${record.inferred ? 'Inferred' : 'Official model'} · ${labels[record.profile]}. ${record.basis} `, source);
  return row;
}

for (const { control } of selections.slice(0, 2)) {
  for (const group of control.querySelectorAll('optgroup[data-reference]')) {
    const profile = group.dataset.reference;
    const [basis, source] = official[profile];
    for (const option of group.querySelectorAll('option')) {
      const record = { profile, basis: `Listed in Rockstar’s ${basis} requirements.`, source, inferred: false };
      hardware.set(option.value, record);
      hardwareCatalog.append(basisRow(option.value, record));
    }
  }
  const group = document.createElement('optgroup');
  group.label = 'Inferred desktop models';
  for (const [name, profile, basis, source] of mappedHardware[control.id]) {
    const option = document.createElement('option');
    option.textContent = name;
    group.append(option);
    const record = { profile, basis, source, inferred: true };
    hardware.set(name, record);
    hardwareCatalog.append(basisRow(name, record));
  }
  control.insertBefore(group, control.lastElementChild);
}

function updateHardware() {
  for (const { control, comparison } of selections) {
    comparison.textContent = control.value ? control.selectedOptions[0].textContent : 'Not selected';
  }

  const [gpu, cpu, ram] = selections.map(({ control }) => control.selectedOptions[0]);
  const gpuRecord = hardware.get(gpu.value);
  const cpuRecord = hardware.get(cpu.value);
  hardwareBasis.replaceChildren();
  if (gpu.value) hardwareBasis.append(basisRow(gpu.value, gpuRecord));
  if (cpu.value) hardwareBasis.append(basisRow(cpu.value, cpuRecord));

  let result = '';
  let explanation = 'Choose your graphics card, processor, and memory to check a reference tier.';

  if (gpu.value && cpu.value && ram.value) {
    const capacity = ram.value === '16-plus' ? 16 : Number(ram.value);
    if (capacity < 8) {
      result = 'Below the RDR2 minimum reference (official RAM threshold)';
      explanation = 'Your selected RAM is below the 8 GB minimum listed for RDR2.';
    } else if (gpuRecord?.profile === 'below' || cpuRecord?.profile === 'below') {
      result = 'Below the RDR2 minimum reference (inferred hardware mapping)';
      explanation = 'A selected component falls below the RDR2 minimum reference. See its comparison below.';
    } else if (gpuRecord?.profile === 'gtav' && cpuRecord?.profile === 'gtav' && ram.hasAttribute('data-dual-channel')) {
      const inferred = gpuRecord.inferred || cpuRecord.inferred;
      result = `Meets the GTA V Enhanced recommended reference (${inferred ? 'inferred hardware mapping' : 'exact official models'})`;
      explanation = 'Your selected GPU, CPU, and dual-channel RAM clear the three-component reference.';
    } else if (gpuRecord && cpuRecord && capacity >= 8) {
      const inferred = gpuRecord.inferred || cpuRecord.inferred || gpuRecord.profile === 'gtav' || cpuRecord.profile === 'gtav';
      result = `Meets the RDR2 minimum reference (${inferred ? 'inferred hardware mapping' : 'exact official models'})`;
      explanation = 'Both parts clear a documented hardware reference, and your RAM meets the RDR2 minimum.';
    } else {
      result = 'Match unverified';
      explanation = 'Choose a listed GPU and CPU and a known RAM capacity to get a reference tier.';
    }
  }

  tier.textContent = result ? `${result} — ${referenceLabel}` : referenceLabel;
  detail.textContent = explanation;
}

for (const { control } of selections) control.addEventListener('change', updateHardware);
updateHardware();
