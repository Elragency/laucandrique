import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'À Propos',
      links: [
        {
          text: 'Laucandrique',
          href: getPermalink('/Laucandrique'),
        },
        {
          text: 'Notre Équipe ',
          href: getPermalink('/Laucandrique#notre-equipe'),
        },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/landing/mobile-app'),
        // },

      ],
    },
    {
      text: 'Nos Services',
      links: [
        {
          text: 'Nos Forfaits',
          href: '/landing/nos-forfaits',
        },
        {
          text: 'Nos Réalisations',
          href: '/nos-forfaits#realisations',
        },
        // {
        //   text: 'About us',
        //   href: '/landing/testlauc',
        // },
        // {
        //   text: 'Contact',
        //   href: '#',
        // },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Nous Joindre',
      href: '/landing/nous-joindre',
    },
    {
      text: 'Espace Client',
      href: getPermalink('/espace-client'),
    },


// Ajouter la section blogue quand necessaire (ajouter Blog dans text)
    {
      // text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Urgences', href: getPermalink('/landing/nous-joindre') }
  ],
};

// fin de la section blog
  
export const footerData = {
  links: [
    {
      title: 'Nos Forfaits',
      links: [
        { text: 'Features', href: '/landing/nos-forfaits' },
        { text: 'Security', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: "https://www.instagram.com/laucandrique/" },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/laucandrique' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
