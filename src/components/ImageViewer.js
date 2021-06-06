import './ImageViewer.scss';

export default function ImageViewer(props) {

  const { image } = props;

  return (
    <section class="image-viewer">
      <img className="image-viewer__image" src={image}/>
    </section>
  )
}