import laptopOpen from "@/assets/photos/laptop-open.jpg";
import ramModule from "@/assets/photos/ram-module.jpg";
import hddOpen from "@/assets/photos/hdd-open.jpg";
import ssdIntel from "@/assets/photos/ssd-intel.jpg";
import miniPc from "@/assets/photos/mini-pc.jpg";
import workstation from "@/assets/photos/workstation.jpg";
import motherboard from "@/assets/photos/motherboard.jpg";
import networkRack from "@/assets/photos/network-rack.jpg";

const shop = (name) => `${import.meta.env.BASE_URL}images/${name}.webp`;

export const shopPhotos = {
  laptopStacks: shop("laptop-stacks-dell-lenovo"),
  oldMonitors: shop("old-monitors-on-floor"),
  scrapBoard: shop("motherboard-psu-cables-scrap"),
  optiplexCpus: shop("dell-optiplex-cpus-and-monitors"),
  optiplexShelf: shop("dell-optiplex-cpus-on-shelf"),
  monitorsTable: shop("monitors-and-keyboards-on-table"),
  notWorkingCpus: shop("non-working-cpus-apc-ups-and-psu"),
  cabinetCables: shop("cables-and-peripherals-in-cabinet"),
  laptopRows: shop("laptops-in-rows-asus-thinkpad"),
  laptopBoxes: shop("laptops-packed-in-cardboard-boxes"),
  adapters: shop("laptop-adapters-closeup"),
  laptopsStorage: shop("laptops-and-monitors-in-storage-room"),
  laptopsInRows: shop("laptops-stacked-in-rows"),
  laptopsCorner: shop("laptops-piled-in-corner-with-boxes"),
  laptopsCornerView: shop("laptops-in-rows-corner-view"),
  laptopsByWall: shop("laptops-stacked-by-wall"),
  laptopsOnShelf: shop("laptops-side-ports-on-shelf"),
  desktopTable: shop("desktop-cpus-and-monitors-on-table"),
  adaptersHeap: shop("laptop-adapters-heap"),
};

export const galleryPhotos = [
  { name: "laptop-stacks-dell-lenovo", category: "laptops", alt: "Stacks of used Dell and Lenovo laptops" },
  { name: "laptops-stacked-in-rows", category: "laptops", alt: "Used laptops stacked in rows along a wall" },
  { name: "laptops-in-rows-asus-thinkpad", category: "laptops", alt: "Rows of laptops including Asus and ThinkPad models" },
  { name: "laptops-in-rows-corner-view", category: "laptops", alt: "Laptops stacked in rows in a corner of the storeroom" },
  { name: "laptops-piled-in-corner-with-boxes", category: "laptops", alt: "A storeroom corner packed with laptops and cardboard boxes" },
  { name: "laptops-stacked-by-wall", category: "laptops", alt: "A wall of laptops waiting to be tested and sorted" },
  { name: "laptops-and-monitors-in-storage-room", category: "laptops", alt: "Laptops and monitors in our storage room" },
  { name: "laptops-side-ports-on-shelf", category: "laptops", alt: "Laptops lined up on a shelf, side ports showing" },
  { name: "laptops-packed-in-cardboard-boxes", category: "laptops", alt: "Boxes packed with used laptops ready for pickup" },
  { name: "dell-optiplex-cpus-and-monitors", category: "desktops", alt: "Dell Optiplex desktops and monitors stacked together" },
  { name: "dell-optiplex-cpus-on-shelf", category: "desktops", alt: "Dell Optiplex desktops on a shelf" },
  { name: "desktop-cpus-and-monitors-on-table", category: "desktops", alt: "Desktop CPUs and monitors stacked on a table" },
  { name: "non-working-cpus-apc-ups-and-psu", category: "desktops", alt: "Dead desktop CPUs, UPS units and power supplies tagged not working" },
  { name: "monitors-and-keyboards-on-table", category: "desktops", alt: "Old monitors and keyboards stacked on a table" },
  { name: "old-monitors-on-floor", category: "desktops", alt: "Old monitors laid out on the floor for sorting" },
  { name: "motherboard-psu-cables-scrap", category: "parts", alt: "A motherboard, power supplies and cables collected for recycling" },
  { name: "cables-and-peripherals-in-cabinet", category: "parts", alt: "A cabinet of tangled cables and peripherals" },
  { name: "laptop-adapters-closeup", category: "parts", alt: "Close-up of a pile of laptop chargers" },
  { name: "laptop-adapters-heap", category: "parts", alt: "A heap of laptop chargers and adapters" },
].map((photo) => ({ ...photo, src: shop(photo.name) }));

export const galleryCategories = [
  { key: "all", label: "All" },
  { key: "laptops", label: "Laptops" },
  { key: "desktops", label: "Desktops and monitors" },
  { key: "parts", label: "Parts and cables" },
];

export const photos = {
  laptopOpen,
  ramModule,
  hddOpen,
  ssdIntel,
  miniPc,
  workstation,
  motherboard,
  networkRack,
};

export const photoCredits = [
  {
    title: "Intel NUC mini PC",
    creator: "ozfir",
    license: "CC BY 2.0",
    href: "https://www.flickr.com/photos/194647935@N05/51814734475",
  },
  {
    title: "HP Z820 Workstation",
    creator: "trekkyandy",
    license: "CC BY-SA 2.0",
    href: "https://www.flickr.com/photos/87054972@N00/46331883691",
  },
  {
    title: "Intel X25-M Solid-State Drive",
    creator: "Intel Free Press",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/w/index.php?curid=22729357",
  },
];
