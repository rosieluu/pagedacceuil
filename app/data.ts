type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Extern.fr',
    description: 'Connect students and companies through short, flexible projects',
    link: '', // Mets un lien si tu en as
    video: '', // Mets une vidéo si tu en as
    id: 'externfr',
  },
  {
    name: 'HomeLens',
    description: 'Turn every house into a perfect shot',
    link: '', // Mets un lien si tu en as
    video: '', // Mets une vidéo si tu en as
    id: 'homelens',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Data Formation',
    title: 'Founder',
    start: '2024',
    end: 'Present',
    link: '',
    id: 'work4',
  },
  {
    company: 'BNP Paribas Arval',
    title: 'Freelance Data Consultant',
    start: '2024',
    end: '2025',
    link: 'https://www.arval.fr/',
    id: 'work1',
  },
  {
    company: 'Mydral',
    title: 'Expert Data Consultant',
    start: '2020',
    end: '2024',
    link: 'https://www.mydral.com/',
    id: 'work2',
  },
  {
    company: 'Maeva.com',
    title: 'Revenue Manager',
    start: '2018',
    end: '2020',
    link: 'https://www.maeva.com/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  }
/*   ,
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  }, */
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/rosieluu',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/luu-bich-hong/',
  },
]

export const EMAIL = 'luu.bichhong@email.com'
