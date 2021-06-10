import './Contacts.scss';

export default function Contacts(props) {

  const contactsData = [
    {
      name: 'E-Mail',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png',
      value: 'pavel.piatetskii@gmail.com',
      link: '#',
    },
    {
      name: 'Phone',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phone_Shiny_Icon.svg/1024px-Phone_Shiny_Icon.svg.png',
      value: '604-363-17-23',
      link: '#',
    },
    {
      name: 'GitHub',
      image: 'github-logo.png',
      value: 'https://github.com/pavel-piatetskii',
      link: '#',
    },
    {
      name: 'LinkedIn',
      image: 'linkedin-logo.png',
      value: 'https://www.linkedin.com/in/pavel-piatetskii-1887241a0/',
      link: '',
    },
  ];

  return (<section class="contacts">
    <h2 className="contacts__header">Contacts</h2>
    {contactsData.map(contact => (
      <article className="contacts__container">
        <img className="contacts__container__image" src={contact.image} />
        <span className="contacts__container__name">{contact.name}:</span>
        <span className="contacts__container__value">{contact.value}</span>
      </article>
    ))}
  </section>)
}