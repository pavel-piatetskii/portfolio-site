import './Resume.scss';

export default function Resume(props) {
  return (<section class="resume">
      <h2 className="section-header">Resume</h2>
      <article className="resume__files">

        <div className="resume__files__download">
          <h4 className="resume__files__download__header">Download resume</h4>
          <a className="resume__files__download__link" href="https://drive.google.com/uc?export=download&id=16J5zidLE3OZ2OEXhpuHeMhjC_kdvbLZf">
            <img
              className="resume__files__download__image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Google_Docs_2020_Logo.svg/800px-Google_Docs_2020_Logo.svg.png"
            />
          <p>DOC</p>
          </a>
          <a className="resume__files__download__link" href="https://drive.google.com/uc?export=download&id=1wzj5IiDtR6LjYltDhV4dUZpBH25MyVS_">
            <img
              className="resume__files__download__image"
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
            />
            <p>PDF</p>
          </a>
        </div>
        <div className="resume__files__drive">
        <h4 className="resume__files__download__header">Google drive</h4>
        <iframe className="resume__files__live-pdf" src="https://docs.google.com/viewer?srcid=1wzj5IiDtR6LjYltDhV4dUZpBH25MyVS_&pid=explorer&efh=false&a=v&chrome=fals&embedded=true" ></iframe>
        </div>

      </article>
    </section>)
}