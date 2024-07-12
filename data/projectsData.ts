interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'KitHub.store',
    description: `An e-commerce site that focuses on leveraging free tutorial kits.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Task-based life coaching web app',
    description: `Imagine never `,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Recursive Trails: A thru-hiking / travel blog.',
    description: `A travel / thru-hiking blog`,
    imgSrc: '/static/images/recursive-trails.jpeg',
    href: '/blog/my-hiking-blog',
  },
]

export default projectsData
