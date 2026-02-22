//import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getPermalink, getAsset } from '../utils/permalinks';

export const headerLinksEn = [
  {
    text: 'Egaki-sho',
    links: [
        {
          text: '0. 序：絵書の鼓動',
          href: '/egaki-sho@@@top',
        },
        {
          text: '1. 絵書とは',
          href: '/egaki-sho@@@concept',
        },
        {
          text: '2. 深淵：世界と構造',
          href: '/egaki-sho@@@abyss'
        },
        {
          text: '3. 軌跡：記録と伴走',
          href: '/egaki-sho@@@record',
        },
        {
          text: '4. 旅路：本編',
          href: '/egaki-sho@@@chapters',
        },
        {
          text: '5. 結：招待とCTA',
          href: '/egaki-sho@@@invitation',
        },
    ],
  },
  {
      text: 'ZINE',
      links: [
        {
          text: '絵書作ろうよ！',
          href: '/zine/egaki-sho-create@@@top',
        },
        {
          text: '絵書作ろうよ！- キャラクターメイキング編 -',
          href: '/zine/egaki-sho-create@@@chapter-list',
        },        
        {
          text: 'another-series',
          href: '/zine/another-series@@@top',
        },
        {
          text: 'another-series - chapter1',
          href: '/zine/another-series@@@chapter-list',
        },        
      ]
  },
];

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
