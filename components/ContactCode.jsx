import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'music credits',
    link: 'alexraymond.xyz',
    href: 'https://www.alexraymond.xyz/',
  },
  {
    social: 'email',
    link: 'alexraymond@gmail.com',
    href: 'mailto:alexjacobraymond@gmail.com',
  },
  {
    social: 'github',
    link: 'alexjraymond',
    href: 'https://github.com/alexjraymond',
  },
  {
    social: 'linkedin',
    link: 'alexjraymond',
    href: 'https://www.linkedin.com/in/alexjraymond/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
