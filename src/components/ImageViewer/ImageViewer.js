import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;

  const clickSomewhere = function(e) {
    return (e.target.className === "image-viewer") ? setShowImageViewer(false) : false;
  };

  const openNewTab = function(url) {
    window.open(url, '_blank').focus()
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