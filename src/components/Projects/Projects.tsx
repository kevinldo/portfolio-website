import './Projects.css';
import firstPhoto from '../../assets/projects/projects-cat-1.png';
import secondPhoto from '../../assets/projects/projects-cat-2.png';

export default function Projects() {
  const projects = [
    {
      name: 'Lorem & Ipsum First Secondary',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: firstPhoto,
    },
    {
      name: 'Lorem Ipsumiumo',
      description:
        'It has survived not only five centuries, but also the leap into electronic typesetting.',
      image: secondPhoto,
    },
  ];

  return (
    <section id='projects' className='projects'>
      <div className='projects-canvas'>
        <h2>Projects</h2>
        <ul className='projects-list'>
          {projects.map(({ name, description, image }) => (
            <li key={name} className='projects-card'>
              <img src={image} alt={name} className='projects-photo' />
              <h3 className='projects-title'>{name}</h3>
              <p className='projects-description'>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
