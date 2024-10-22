import './Contacts.scss';
import contactsData from 'data/contacts'

export default function Contacts(props) {

  return (<section className="contacts">
    <h2 className="my-8 border-white border-b-2 pb-1 text-lg">Contacts</h2>
    {contactsData.map((contact, i) => {
      const { image, name, value, link, newtab } = contact;
      const isLast = i === contactsData.length - 1;
      return (
        <article
          className={`items-center py-6 w-full max-w-[1000px] ${!isLast && "border-b-2 border-white"}`}
          key={name}
        >
          <img className="contacts__container__image" src={image} alt={name}/>
          <div className="contacts__container__name-value-wrapper">
            <span className="contacts__container__name">{name}:</span>
            <a className="text-link" rel={newtab && "noreferrer noopener"} target={newtab && "_blank"} href={link}>
              <span className="contacts__container__value">{value}</span>
            </a>
          </div>
        </article>
      )
    }
    )}
  </section>)
}