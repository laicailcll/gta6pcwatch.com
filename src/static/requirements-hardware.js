const nvidia = 'https://www.nvidia.com/en-us/geforce/graphics-cards/compare/';
const intel12 = 'https://download.intel.com/newsroom/2022/ces2022/intel-ces-2022-press-deck.pdf';
const amd7000 = 'https://www.amd.com/content/dam/amd/en/documents/partner-hub/ryzen/amd-ryzen-7000-series-desktop-processors-quick-reference-guide.pdf';
const amd5000 = 'https://www.amd.com/en/newsroom/press-releases/2022-3-15-amd-launches-the-ultimate-gaming-processor-brings.html';

function aboveGtaGpu(generation, basis) {
  return `${generation} desktop card. ${basis} compared with the RTX 3060 (8 GB) GTA V Enhanced reference.`;
}

function aboveGtaCpu(generation, productClass, anchor) {
  return `${generation} desktop ${productClass}. Newer generation and the same or higher product class than the ${anchor} GTA V Enhanced reference.`;
}

export const mappedHardware = {
  gpu: [
    ['GeForce GTX 750 (1 GB)', 'below', 'This variant has less VRAM than the GTX 770 (2 GB) RDR2 minimum reference.', 'https://www.nvidia.com/en-us/geforce/graphics-cards/geforce-gtx-750/specifications/'],
    ['GeForce GTX 1660 Super (6 GB)', 'rdr2', 'Newer desktop 60-class card with the same VRAM capacity as the GTX 1060 (6 GB) RDR2 recommended reference.', nvidia],
    ['GeForce RTX 2060 (6 GB)', 'rdr2', 'Newer desktop 60-class card with the same VRAM capacity as the GTX 1060 (6 GB) RDR2 recommended reference.', nvidia],
    ['GeForce RTX 3060 (12 GB)', 'gtav', aboveGtaGpu('Ampere', 'Same model family with a wider memory interface and more VRAM'), nvidia],
    ['GeForce RTX 3060 Ti (8 GB)', 'gtav', aboveGtaGpu('Ampere', 'Higher Ti model with equal VRAM'), nvidia],
    ['GeForce RTX 3070 (8 GB)', 'gtav', aboveGtaGpu('Ampere', 'Higher 70-class model with equal VRAM'), nvidia],
    ['GeForce RTX 3080 (10 GB)', 'gtav', aboveGtaGpu('Ampere', 'Higher 80-class model with more VRAM'), nvidia],
    ['GeForce RTX 3080 (12 GB)', 'gtav', aboveGtaGpu('Ampere', 'Higher 80-class model with more VRAM'), nvidia],
    ['GeForce RTX 4060 (8 GB)', 'gtav', aboveGtaGpu('Ada', 'Newer 60-class model with equal VRAM'), nvidia],
    ['GeForce RTX 4060 Ti (8 GB)', 'gtav', aboveGtaGpu('Ada', 'Newer 60-class Ti model with equal VRAM'), nvidia],
    ['GeForce RTX 4060 Ti (16 GB)', 'gtav', aboveGtaGpu('Ada', 'Newer 60-class Ti model with more VRAM'), nvidia],
    ['GeForce RTX 4070 (12 GB)', 'gtav', aboveGtaGpu('Ada', 'Newer 70-class model with more VRAM'), nvidia],
    ['GeForce RTX 4080 (16 GB)', 'gtav', aboveGtaGpu('Ada', 'Newer 80-class model with more VRAM'), nvidia],
    ['GeForce RTX 5060 (8 GB)', 'gtav', aboveGtaGpu('Blackwell', 'Newer 60-class model with equal VRAM'), nvidia],
    ['GeForce RTX 5060 Ti (8 GB)', 'gtav', aboveGtaGpu('Blackwell', 'Newer 60-class Ti model with equal VRAM'), nvidia],
    ['GeForce RTX 5060 Ti (16 GB)', 'gtav', aboveGtaGpu('Blackwell', 'Newer 60-class Ti model with more VRAM'), nvidia],
    ['GeForce RTX 5070 (12 GB)', 'gtav', aboveGtaGpu('Blackwell', 'Newer 70-class model with more VRAM'), nvidia],
    ['GeForce RTX 5080 (16 GB)', 'gtav', aboveGtaGpu('Blackwell', 'Newer 80-class model with more VRAM'), nvidia],
    ['Radeon RX 7700 XT (12 GB)', 'gtav', 'Newer RDNA 3 desktop 700-class card with more VRAM than the RX 6600 XT (8 GB) GTA V Enhanced reference.', 'https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7700-xt.html'],
    ['Radeon RX 7800 XT (16 GB)', 'gtav', 'Newer RDNA 3 desktop 800-class card with more VRAM than the RX 6600 XT (8 GB) GTA V Enhanced reference.', 'https://www.amd.com/en/products/graphics/desktops/radeon/7000-series/amd-radeon-rx-7800-xt.html'],
  ],
  cpu: [
    ['Core i3-2100', 'below', 'Same desktop generation as the Core i5-2500K RDR2 minimum reference, with a lower product class and fewer physical cores.', 'https://www.intel.com/content/www/us/en/products/compare.html?productIds=%2F53491%2C52210%2C53422'],
    ['Core i5-12400F', 'gtav', aboveGtaCpu('12th-gen', 'Core i5', 'Core i5-9600K'), intel12],
    ['Core i5-12600K', 'gtav', aboveGtaCpu('12th-gen', 'Core i5', 'Core i5-9600K'), intel12],
    ['Core i7-12700K', 'gtav', aboveGtaCpu('12th-gen', 'Core i7', 'Core i5-9600K'), intel12],
    ['Core i5-13400F', 'gtav', aboveGtaCpu('13th-gen', 'Core i5', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/230501/intel-core-i513400f-processor-20m-cache-up-to-4-60-ghz/specifications.html'],
    ['Core i5-13600K', 'gtav', aboveGtaCpu('13th-gen', 'Core i5', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/230493/intel-core-i513600k-processor-24m-cache-up-to-5-10-ghz/specifications.html'],
    ['Core i7-13700K', 'gtav', aboveGtaCpu('13th-gen', 'Core i7', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/230500/intel-core-i713700k-processor-30m-cache-up-to-5-40-ghz/specifications.html'],
    ['Core i5-14400F', 'gtav', aboveGtaCpu('14th-gen', 'Core i5', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/236777/intel-core-i5-processor-14400f-20m-cache-up-to-4-70-ghz/specifications.html'],
    ['Core i5-14600K', 'gtav', aboveGtaCpu('14th-gen', 'Core i5', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/236799/intel-core-i5-processor-14600k-24m-cache-up-to-5-30-ghz/specifications.html'],
    ['Core i7-14700K', 'gtav', aboveGtaCpu('14th-gen', 'Core i7', 'Core i5-9600K'), 'https://www.intel.com/content/www/us/en/products/sku/236783/intel-core-i7-processor-14700k-33m-cache-up-to-5-60-ghz/specifications.html'],
    ['Ryzen 5 5600', 'gtav', aboveGtaCpu('Zen 3', 'Ryzen 5', 'Ryzen 5 3600'), amd5000],
    ['Ryzen 7 5700X', 'gtav', aboveGtaCpu('Zen 3', 'Ryzen 7', 'Ryzen 5 3600'), amd5000],
    ['Ryzen 7 5800X3D', 'gtav', aboveGtaCpu('Zen 3', 'Ryzen 7', 'Ryzen 5 3600'), 'https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-7-5800x3d.html'],
    ['Ryzen 5 7600', 'gtav', aboveGtaCpu('Zen 4', 'Ryzen 5', 'Ryzen 5 3600'), amd7000],
    ['Ryzen 7 7700', 'gtav', aboveGtaCpu('Zen 4', 'Ryzen 7', 'Ryzen 5 3600'), amd7000],
    ['Ryzen 7 7800X3D', 'gtav', aboveGtaCpu('Zen 4', 'Ryzen 7', 'Ryzen 5 3600'), amd7000],
    ['Ryzen 5 9600X', 'gtav', aboveGtaCpu('Zen 5', 'Ryzen 5', 'Ryzen 5 3600'), 'https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9600x.html'],
    ['Ryzen 7 9700X', 'gtav', aboveGtaCpu('Zen 5', 'Ryzen 7', 'Ryzen 5 3600'), 'https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html'],
    ['Ryzen 7 9800X3D', 'gtav', aboveGtaCpu('Zen 5', 'Ryzen 7', 'Ryzen 5 3600'), 'https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html'],
  ],
};
