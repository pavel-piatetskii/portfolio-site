import { useEffect } from 'react';
import './ImageViewer.scss';


const { clickSomewhere, openNewTab, zoomOnScroll, mouseHold } = require('./helpers')
export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;

  // Set up variables and listeners when component is mounted
  useEffect(() => {
    
    // Assign image element to a variable
    const imageElement = document.getElementsByClassName('image-viewer__image')[0];

    // Add the listenert to zoom image by a mouse wheel
    const wheelHandler = function(e) {zoomOnScroll(e, imageElement)}
    window.addEventListener('wheel', wheelHandler, {passive: false});
    imageElement.addEventListener('mousedown', (e) => mouseHold(e, imageElement));

    // Remove the mousewheel listener when the component is dismounted
    return () => window.removeEventListener('wheel', wheelHandler)
  }, [])

  return (
    <section class="image-viewer" onClick={(e) => clickSomewhere(e, setShowImageViewer)}>
      <img className="image-viewer__image" src={image} alt="project preview" />
      <div className="image-viewer__buttons">
        <img src="/images/newtab.png" className="image-viewer__buttons__new-tab" alt="open in new tab"
             onClick={() => openNewTab(image)}></img>
        <span className="image-viewer__buttons__new-tab__label">Open in tab</span>
        <img src="/images/close.png" className="image-viewer__buttons__close"
             onClick={() => setShowImageViewer(false)} alt="close"></img>
        <span className="image-viewer__buttons__close__label">Close</span>
      </div>
    </section>
  )
}