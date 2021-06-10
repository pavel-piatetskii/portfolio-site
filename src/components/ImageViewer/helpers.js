// Click outside an image closes ImageViewer
const clickSomewhere = function(e, setShowImageViewer) {
  if (e.target.className === "image-viewer") {
    setShowImageViewer(false);
  }
  return false;
};


// Function to open an image source in a new tab.
// This way was chosen because wrapping icon by a-tag breaks CSS
const openNewTab = function(url) {
  window.open(url, '_blank').focus();
};

// Change zoom variable and set in to the image style
const zoomOnScroll = function(e, imageElement) {
  e.preventDefault();
  const oldZoom = Number(imageElement.style.zoom) || 1;
  const newZoom = oldZoom + ((e.deltaY > 0) ? -0.1 : 0.1);
  imageElement.style.zoom = (newZoom > 0.1) ? newZoom : 0.2
  console.log(imageElement.style.zoom)
};

// Change position of image as a mouse moves
const mouseMoved = function (e, imageElement) {
  e.preventDefault()
  const { x, y } = imageElement.getBoundingClientRect();
  imageElement.style.left = `${x + e.movementX}px`;
  imageElement.style.top = `${y + e.movementY}px`;
}

// When mouse button is pressed, set up listeners and styling for move
const mouseHold = function(e, imageElement) {
  
  // Set up a listener for mouse movement
  window.addEventListener('mousemove', (e) => mouseMoved(e, imageElement));

  // When mouse button is released, remove movement listener and 
  // disable fixed position for an image
  imageElement.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', (e) => mouseMoved(e, imageElement));
    imageElement.style.position = "";
  }, {once: true});

  // Get an image current coordinates, set positioning to fixed
  // and apply fetched coordinates to the image (to make it stay centered)
  const { x, y } = imageElement.getBoundingClientRect();
  imageElement.style.position = "fixed";
  imageElement.style.left = `${x}px`;
  imageElement.style.top = `${y}px`;
};

module.exports = {
  clickSomewhere,
  openNewTab,
  zoomOnScroll,
  mouseHold,
}