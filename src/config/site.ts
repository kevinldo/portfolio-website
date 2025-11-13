export const site = {
  firstName: 'Kevin',
  lastName: 'D',
  email: 'you@example.com',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
} as const;

export type SiteConfig = typeof site;
