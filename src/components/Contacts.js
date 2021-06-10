import './Contacts.scss';

export default function Contacts(props) {

  const contactsData = [
    {
      name: 'E-Mail',
      image: '',
      value: '',
    },
    {
      name: 'Phone',
      image: '',
      value: '',
    },
    {
      name: 'GitHub',
      image: '',
      value: '',
    },
    {
      name: 'LinkedIn',
      image: '',
      value: '',
    },
  ];

  return (<section class="contacts">
    <h2 className="contacts__header">Contacts</h2>
    {contactsData.map(el => (
      <article className="contacts__container">
        <span className="contacts__container__name">{el.name}</span>
        
      </article>
    ))}
  </section>)
}