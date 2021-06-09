import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;


  // Click outside an image closes ImageViewer

  const clickSomewhere = function(e) {
    return (e.target.className === "image-viewer") ? setShowImageViewer(false) : false;
  };


  // Function to open an image source in a new tab.
  // This way was chosen because wrapping icon by a-tag breaks CSS

  const openNewTab = function(url) {
    window.open(url, '_blank').focus();
  }
  
  return (
    <section class="image-viewer" onClick={(e) => clickSomewhere(e)}>
      <img className="image-viewer__image" src={image} alt="project preview"/>
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