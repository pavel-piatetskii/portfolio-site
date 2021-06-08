import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;

  const clickSomewhere = function(e) {
    return (e.target.className === "image-viewer") ? setShowImageViewer(false) : false;
  };
  
  return (
    <section class="image-viewer" onClick={(e) => clickSomewhere(e)}>
      <img className="image-viewer__image" src={image}/>
      <div className="image-viewer__buttons">
        <a className="projects__container__info__link" rel="noreferrer noopener" target="_blank" href={image}>
          <img src="newtab.png" className="image-viewer__buttons__new-tab" ></img>
        </a>
        <span className="image-viewer__buttons__new-tab__label">Open in tab</span>
        <img src="close.png" className="image-viewer__buttons__close" onClick={() => setShowImageViewer(false)}></img>
        <span className="image-viewer__buttons__new-tab__label">Close</span>

      </div>
    </section>
  )
}