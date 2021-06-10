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

  const zoomOnScroll = function(e) {
    e.preventDefault();
    zoom += (e.deltaY > 0) ? -0.1 : 0.1;
    imageElement.style.zoom = zoom;
    //console.log(document.getElementsByClassName('image-viewer__image'))
    //console.log(imageElement)
  };

  const mouseMoved = function (e) {
    e.preventDefault()
    console.log(e)
  }

  const mouseHold = function(e) {
    console.log(e);
    imageElement.addEventListener('mousemove', mouseMoved);
    imageElement.addEventListener('mouseup', () => {
      imageElement.removeEventListener('mousemove', mouseMoved);
    }, {once: true})
  }

  useEffect(() => {
    imageElement = document.getElementsByClassName('image-viewer__image')[0];

    window.addEventListener('wheel', zoomOnScroll, {passive: false});
    imageElement.addEventListener('mousedown', mouseHold);

    return () => imageElement.removeEventListener('wheel', zoomOnScroll)
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