const galleryItems = [
  { label: "Sunrise", color: "#f4a261" },
  { label: "Forest", color: "#2a9d8f" },
  { label: "Ocean", color: "#457b9d" },
  { label: "Berry", color: "#9d4edd" },
  { label: "Rose", color: "#e76f51" },
  { label: "Night", color: "#264653" }
];

const gallery = document.getElementById("gallery");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

function createImageSource(label, color, width, height) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="100%" height="100%" fill="${color}"/>
    <circle cx="${width * 0.8}" cy="${height * 0.25}" r="${height * 0.12}" fill="rgba(255,255,255,0.5)"/>
    <text x="50%" y="55%" font-family="Arial" font-size="${height * 0.14}" fill="#ffffff" text-anchor="middle">${label}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function openModal(item) {
  modalImage.src = createImageSource(item.label, item.color, 800, 520);
  modalImage.alt = item.label;
  modalCaption.textContent = item.label;
  modalOverlay.classList.add("open");
  console.log(`Opened image: ${item.label}`);
}

function closeModal() {
  modalOverlay.classList.remove("open");
  console.log("Modal closed");
}

galleryItems.forEach((item, index) => {
  const thumbnail = document.createElement("img");
  thumbnail.src = createImageSource(item.label, item.color, 320, 220);
  thumbnail.alt = item.label;
  thumbnail.dataset.index = index;
  gallery.appendChild(thumbnail);
});

gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    openModal(galleryItems[event.target.dataset.index]);
  }
});

modalOverlay.addEventListener("click", closeModal);

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Clicked inside modal: stays open");
});
