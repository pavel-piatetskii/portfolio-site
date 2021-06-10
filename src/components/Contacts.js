import './Contacts.scss';
import contactsData from 'data/contacts'

export default function Contacts(props) {

  return (<section class="contacts">
    <h2 className="contacts__header">Contacts</h2>
    {contactsData.map(contact => {
      const { image, name, value, link, newtab } = contact;
      return (
        <article className="contacts__container">
          <img className="contacts__container__image" src={image} />
          <span className="contacts__container__name">{name}:</span>
          <a className="text-link" rel={newtab && "noreferrer noopener"} target={newtab && "_blank"} href={link}>
            <span className="contacts__container__value">{value}</span>
          </a>
        </article>
      )}
    )}
  </section>)
}