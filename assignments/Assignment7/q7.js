const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("mouseleave", () => {
  coordinates.textContent = "clientX: -, clientY: -";
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxPosition = trackingBox.getBoundingClientRect();
  const dotX = event.clientX - boxPosition.left - trackingBox.clientLeft;
  const dotY = event.clientY - boxPosition.top - trackingBox.clientTop;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${dotX}px`;
  dot.style.top = `${dotY}px`;
  trackingBox.appendChild(dot);

  console.log(`Dot dropped at clientX: ${event.clientX}, clientY: ${event.clientY} (inside box: ${Math.round(dotX)}, ${Math.round(dotY)})`);
});
