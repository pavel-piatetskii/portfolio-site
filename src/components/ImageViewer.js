import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image, setShowImageViewer } = props;

  //const heightShift = image.naturalHeight / 2;
  //const widthShift = image.naturalWidth / 2;

  const clickSomewhere = function(e) {
    return (e.target.className === "image-viewer") ? setShowImageViewer(false) : false;
  }


  return (
    <section class="image-viewer" onClick={(e) => clickSomewhere(e)}>
      <img className="image-viewer__image" src={image.src}/>
    </section>
  )
}