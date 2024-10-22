import './Resume.scss';
import docDownload from 'data/images/doc_download.png';
import pdfDownload from 'data/images/pdf_download.png';

export default function Resume(props) {
  return (<section className="resume">
    {/* <h2 className="my-8 border-white border-b-2 pb-1 text-lg">Resume</h2> */}
      <div className="gap-16 my-4">
      <a 
        className="flex size-16 border-2 border-white rounded-full justify-center items-center" 
        href="https://drive.google.com/uc?export=download&id=16J5zidLE3OZ2OEXhpuHeMhjC_kdvbLZf">
            <img
              className="h-10"
              src={docDownload}
              alt="doc"
            />
          </a>
          <a 
            className="flex size-16 border-2 border-white rounded-full justify-center items-center" 
            href="https://drive.google.com/uc?export=download&id=1wzj5IiDtR6LjYltDhV4dUZpBH25MyVS_">
            <img
              className="h-10"
              src={pdfDownload}
              alt="pdf"
            />
          </a>
      </div>
    <article className="justify-around w-[60%] max-w-[1000px] h-full">


      {false && <div className="resume__files__download">
        <h4 className="resume__files__download__header">Download resume</h4>

        <div className="">
          <a className="flex size-16 border-2 border-white rounded-full justify-center items-center" href="https://drive.google.com/uc?export=download&id=16J5zidLE3OZ2OEXhpuHeMhjC_kdvbLZf">
            <img
              className="h-10"
              src={docDownload}
              alt="doc"
            />
          {/* <p className="resume__files__download__label">DOC</p> */}
          </a>
        </div>

        <div className="resume__files__download__button">
          <a className="resume__files__download__link" href="https://drive.google.com/uc?export=download&id=1wzj5IiDtR6LjYltDhV4dUZpBH25MyVS_">
            <img
              className="resume__files__download__image"
              src={pdfDownload}
              alt="pdf"
            />
          <p className="resume__files__download__label">PDF</p>
          </a>
        </div>

      </div>}
 
      <div className="size-full justify-center">
        <iframe
          // className="resume__files__live-pdf"
          className="h-[90%] aspect-[1/1.294]"
          src="https://docs.google.com/viewer?srcid=1wzj5IiDtR6LjYltDhV4dUZpBH25MyVS_&pid=explorer&efh=false&a=v&chrome=fals&embedded=true"
          title="Live PDF file from Google drive"
        ></iframe>
      </div>

    </article>
  </section>)
}