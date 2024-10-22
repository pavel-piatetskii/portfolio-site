import './Projects.scss';
import ImageViewer from './ImageViewer/ImageViewer';

// Component with a list of projects
export default function Projects(props) {

  const { projects, showImageViewer, setShowImageViewer } = props;

  return (
    <section className="flex-col justify-start items-center w-full">
      <h2 className="my-8 border-white border-b-2 pb-1 text-lg">Projects</h2>
      {projects.map((project, index) => {
        const {name, image, description, techstack, link} = project;
        const isLast = index === projects.length - 1;
        return (
          <article 
            className={`w-[60%] max-w-[1000px] py-6 ${!isLast && "border-b-white border-b-2"}`}
            key={index}>
            <div className="projects__container__preview">
              <img
                className="projects__container__preview__image"
                src={image}
                alt={name}
                onClick={() => setShowImageViewer(image)}
              />
            </div>
            <div className="projects__container__info">
              <a className="text-link" rel="noreferrer noopener" target="_blank" href={link}>
                <h3 className="font-['Montserrat'] mb-3">{name}</h3>
              </a>
              <p className="projects__container__info__description">{description}</p>
              <p className="projects__container__info__description mt-2"><strong><u>Tech stack:</u></strong> {techstack}</p>
            </div>
        </article>
        )}
      )}
      {showImageViewer && <ImageViewer image={showImageViewer} setShowImageViewer={setShowImageViewer}/>}
    </section>
  )
}