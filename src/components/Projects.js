import './Projects.scss';
import ImageViewer from './ImageViewer';
import { useState } from 'react';

export default function Projects(props) {

  const { projects } = props;
  const [showImageViewer, setShowImageViewer] = useState(false);

  const imageClicked = function(e) {
    //const { naturalHeight, naturalWidth} = e.target.naturalHeight;
    //const shiftHeight = naturalHeight / 2;
    //const shiftWidth = naturalWidth / 2;
    setShowImageViewer(e.target);
  }

  return (
    <section class="projects">
      <h2 class="projects__header">Projects</h2>
      {projects.map((project, index) => {
        const {name, image, description, link} = project;
        return (
          <article class="projects__container" key={index}>
            <div class="projects__container__preview">
              <img
                class="projects__container__preview__image"
                src={image}
                alt={name}
                //onClick={() => setShowImageViewer(image)}
                onClick={(e) => imageClicked(e)}
              />
            </div>
            <div class="projects__container__info">
              <a className="projects__container__info__link" rel="noreferrer noopener" target="_blank" href={link}>
                <h3 class="projects__container__info__name">{name}</h3>
              </a>
              <p class="projects__container__info__description">{description}</p>
            </div>
        </article>
        )}
      )}
      {showImageViewer && <ImageViewer image={showImageViewer} setShowImageViewer={setShowImageViewer}/>}
    </section>
  )
}