import './Projects.scss';
import ImageViewer from './ImageViewer/ImageViewer';
import { useState } from 'react';

export default function Projects(props) {

  const { projects, showImageViewer, setShowImageViewer } = props;
  //const [showImageViewer, setShowImageViewer] = useState(false);

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
                onClick={() => setShowImageViewer(image)}
              />
            </div>
            <div class="projects__container__info">
              <a className="text-link" rel="noreferrer noopener" target="_blank" href={link}>
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