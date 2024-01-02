import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'alexraymond.me',
    href: 'https://alexraymond.me',
  },
  {
    social: 'email',
    link: 'alexraymond@gmail.com',
    href: 'mailto:alexraymond@gmail.com',
  },
  {
    social: 'github',
    link: 'itsalexr',
    href: 'https://github.com/itsalexr',
  },
  {
    social: 'linkedin',
    link: 'alexraymond',
    href: 'https://www.linkedin.com/in/alexraymond/',
  },
  {
    social: 'twitter',
    link: 'iamalexr',
    href: 'https://www.twitter.com/iamalexr',
  },
  {
    social: 'instagram',
    link: 'iamalexr',
    href: 'https://www.instagram.com/iamalexr',
  },
  {
    social: 'polywork',
    link: 'alexraymond',
    href: 'https://www.polywork.com/alexraymond',
  },
  {
    social: 'telegram',
    link: 'iamalexr',
    href: 'https://t.me/iamalexr',
  },
  {
    social: 'codepen',
    link: 'alexraymond',
    href: 'https://codepen.io/itsalexr',
  },
  {
    social: 'codesandbox',
    link: 'itsalexr',
    href: 'https://codesandbox.io/u/itsalexr',
  },
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
