import { getPermalink, getAsset } from './utils/permalinks';

export const headerDataEn = {
  links: [
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
          text: '絵書作ろうよ！ZINEラインナップ ',
          href: '/zine/egaki-sho-create@@@zine-cards',
        },        
        {
          text: 'another-series',
          href: '/zine/another-series@@@top',
        },
        {
          text: 'another-series - chapter1',
          href: '/zine/another-series@@@chapter-list',
        },  
      ],
    },
    {
      text: 'Garden 307',
      href: '/garden-307',
    },
    {
      text: 'Events',
      href: '/events',
    },    
    {
      text: 'Log',
      href: '/log',
    },
    {
      text: 'About',
      links: [
        {
          text: 'このサイトについて',
          href: '/about@@@about-site',
        },
        {
          text: '自己紹介',
          href: '/about@@@profile',
        },        
        {
          text: 'お問い合わせ',
          href: '/about@@@contact',
        }, 
      ],
    }, 
  ],
  //actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '活動基盤',
      links: [
        { text: 'GitHub', href: 'https://github.com/pochomlab' },
        { text: 'J-PlatPat', href: 'https://www.j-platpat.inpit.go.jp/' },
        { text: '文化庁', href: 'https://www.bunka.go.jp/' },
      ],
    },
    {
      title: '頒布',
      links: [
        { text: 'Booth', href: 'https://pochomlab.booth.pm/' },
        { text: 'Kindle (KDP)', href: 'https://www.amazon.co.jp/' },
      ],
    },
    {
      title: '作品',
      links: [
        { text: '絵書', href: '/egaki-sho' },
        { text: '絵書創ろうよ！ZINE', href: '/zine' },
      ],
    },
    {
      title: 'Lab',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/pochomlab' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} PochomLab · たましいの灯。
  `,
};
