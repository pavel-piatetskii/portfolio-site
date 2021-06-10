import { useEffect } from 'react';
import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;
  let zoom = 1;
  let imageElement;
  // Click outside an image closes ImageViewer

  const clickSomewhere = function(e) {
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
  const zoomOnScroll = function(e) {
    e.preventDefault();
    zoom += (e.deltaY > 0) ? -0.1 : 0.1;
    imageElement.style.zoom = zoom;
  };

  // Change position of image as a mouse moves
  const mouseMoved = function (e) {
    e.preventDefault()
    const { x, y } = imageElement.getBoundingClientRect();
    imageElement.style.left = `${x + e.movementX}px`;
    imageElement.style.top = `${y + e.movementY}px`;
  }

  // When mouse button is pressed, set up listeners and styling for move
  const mouseHold = function(e) {
    
    // Set up a listener for mouse movement
    window.addEventListener('mousemove', mouseMoved);

    // When mouse button is released, remove movement listener and 
    // disable fixed position for an image
    imageElement.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', mouseMoved);
      imageElement.style.position = "";
    }, {once: true});

    // Get an image current coordinates, set positioning to fixed
    // and apply fetched coordinates to the image (to make it stay centered)
    const { x, y } = imageElement.getBoundingClientRect();
    imageElement.style.position = "fixed";
    imageElement.style.left = `${x}px`;
    imageElement.style.top = `${y}px`;
  }

  // Set up variables and listeners when component is mounted
  useEffect(() => {
    
    // Assign image element to a variable
    imageElement = document.getElementsByClassName('image-viewer__image')[0];

    // Add the listenert to zoom image by a mouse wheel
    window.addEventListener('wheel', zoomOnScroll, {passive: false});
    imageElement.addEventListener('mousedown', mouseHold);

    // Remove the mousewheel listener when the component is dismounted
    return () => window.removeEventListener('wheel', zoomOnScroll)
  }, [])

  return (
    <section class="image-viewer" onClick={(e) => clickSomewhere(e)}>
      <img className="image-viewer__image" src={image} alt="project preview" />
      <div className="image-viewer__buttons">
        <img src="newtab.png" className="image-viewer__buttons__new-tab" alt="open in new tab"
             onClick={() => openNewTab(image)}></img>
        <span className="image-viewer__buttons__new-tab__label">Open in tab</span>
        <img src="close.png" className="image-viewer__buttons__close"
             onClick={() => setShowImageViewer(false)} alt="close"></img>
        <span className="image-viewer__buttons__close__label">Close</span>
      </div>
    </section>
  )
}