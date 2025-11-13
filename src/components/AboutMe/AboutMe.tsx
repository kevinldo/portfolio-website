import './AboutMe.css';
import photo from '../../assets/about-me/about-me-cat-1.png';

export default function AboutMe() {
  const traits = [
    'Lorem & Ipsum First Secondary',
    'Lorem Ipsumiumo',
    'Loremii Ipsumist',
    '123 Lorem Ipsum Enthusiest',
  ];

  return (
    <section id='about-me' className='aboutme'>
      <div className='aboutme-canvas'>
        <h2>About Me</h2>
        <div className='aboutme-photo-wrapper'>
          <img src={photo} alt='About me' className='aboutme-photo' />
        </div>
        <ul className='aboutme-traits'>
          {traits.map((trait) => (
            <li key={trait} className='aboutme-trait-card'>
              {trait}
            </li>
          ))}
        </ul>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Epsom has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960's with
          the release of Letraset sheets containing Lorem Epsom passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
}
