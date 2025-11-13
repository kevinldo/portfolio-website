import { useCallback } from 'react';
import type { MouseEvent } from 'react';
import { site } from '../../config/site';
import './IndexNav.css';
import linkedinIcon from '../../assets/socials-icons/InBug-White.png';
import githubIcon from '../../assets/socials-icons/github-mark-white.svg';

const links = [
  { href: '#hero', label: 'Intro' },
  { href: '#about-me', label: 'About Me' },
  { href: '#about-site', label: 'This Site' },
  { href: '#projects', label: 'Projects' },
] as const;

type IndexNavProps = {
  isVisible?: boolean;
};

export default function IndexNav({ isVisible = false }: IndexNavProps) {
  const scrollToHash = useCallback((hash: string) => {
    if (typeof document === 'undefined') return;
    const id = hash.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (typeof window !== 'undefined') {
      const { pathname, search } = window.location;
      window.history.replaceState(null, '', `${pathname}${search}`);
    }
  }, []);

  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
      event.preventDefault();
      scrollToHash(hash);
    },
    [scrollToHash],
  );

  return (
    <nav
      className={`index-nav${isVisible ? ' is-visible' : ''}`}
      aria-label='Primary page navigation'
    >
      <div className='index-nav-inner'>
        <ul className='index-nav-links'>
          {links.map(({ href, label }) => (
            <li key={href} className='index-nav-item'>
              <a
                className='index-nav-link'
                href={href}
                onClick={(event) => handleNavClick(event, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className='index-nav-social'>
          <a
            className='index-nav-icon'
            href={site.social.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
          >
            <img src={githubIcon} alt='' />
          </a>
          <a
            className='index-nav-icon'
            href={site.social.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <img src={linkedinIcon} alt='' />
          </a>
        </div>
      </div>
    </nav>
  );
}
