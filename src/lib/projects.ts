export interface Project {
  title: string;
  tags: string[];
  link: string;
  type?: 'video' | 'site' | 'idv';
  image: string;
}

const identidadeVisualProjects: Project[] = [
  {
    title: 'Campestre',
    tags: ['ID Visual', 'Mockup’s', 'Patterns', 'Tipografias', 'Paleta de Cores'],
    link: 'https://www.behance.net/gallery/218858619/Campestre-Identidade-Visual',
    image: '/assets/images/idv_1.webp',
   
  },
  {
    title: 'O Ponto dos Salgados',
    tags: ['ID Visual', 'Íconografia', 'Mockup’s', 'Patterns', 'Paleta de Cores'],
    link: 'https://www.behance.net/gallery/220918315/O-Ponto-dos-Salgados-Identidade-Visual',
    image: '/assets/images/idv_2.webp',
  },
  {
    title: 'Seven Street',
    tags: ['ID Visual', 'Mockup’s', 'Patterns', 'Paleta de Cores'],
    link: 'https://www.behance.net/gallery/203584375/Seven-Street-Identidade-VIsual',
    image: '/assets/images/idv_4.webp',
    
  },
  {
    title: 'Oceano Azul',
    tags: ['ID Visual', 'Mockup’s', 'Patterns', 'Papelaria', 'Paleta de Cores'],
    link: 'https://www.behance.net/gallery/218862029/Oceano-Azul-Redesign',
    image: '/assets/images/idv_3.webp',
   
  },
  {
    title: 'Wendell Souza - Arquitetura e Interiores',
    tags: ['ID Visual', 'Mockup’s', 'Patterns', 'Papelaria', 'Paleta de Cores'],
    link: 'https://www.behance.net/gallery/193071619/Wendell-Souza-Identidade-Visual',
    image: '/assets/images/idv_5.webp',
  },
]

const criacaoDeSiteProjects: Project[] = [
  {
    title: 'Site Portfólio - Kauã Lúcio',
    tags: ['Desenvolvimento Web', 'UI/UX', 'Copy'],
    link: 'https://kaualucio.com.br/',
    image: '/assets/images/site5.webp',
  },
  {
    title: 'Vitality Fitness',
    tags: ['Desenvolvimento Web', 'UI/UX', 'Copy'],
    link: 'https://vitality-fitness-phi.vercel.app/',
    image: '/assets/images/site2.webp',
  },
  {
    title: 'Cardápio Online',
    tags: ['Desenvolvimento Web', 'UI/UX', 'Copy'],
    link: 'https://menu-online-gamma.vercel.app/',
    image: '/assets/images/site1.webp',
  },
  {
    title: 'Site para Advogados',
    tags: ['Desenvolvimento Web', 'UI/UX', 'Copy'],
    link: 'https://lawyer-website-six.vercel.app/',
    image: '/assets/images/site3.webp',
  },
  {
    title: 'Site para Clínicas Médicas',
    tags: ['Desenvolvimento Web', 'UI/UX', 'Copy'],
    link: 'https://multi-page-clinical-site.vercel.app/',
    image: '/assets/images/site4.webp',
  },
]

const edicaoDeVideosProjects: Project[] = [
  {
    title: 'O Ponto dos Salgados - Deus é Conosco',
    tags: ['Video', 'Edição de Video'],
    link: 'https://www.youtube.com/embed/AsdITNWmNR0?si=mWaPfAY6vYnjPa3w',
    type: 'video',
    image: '',
  },
  {
    title: 'Short - Asterisco',
    tags: ['Video', 'Short', 'Edição de Video'],
    link: 'https://www.youtube.com/embed/2HOX_1qZzdE?si=2tlY_da2UiSQf5fE',
    type: 'video',
    image: '',
  },
]

export { identidadeVisualProjects, criacaoDeSiteProjects, edicaoDeVideosProjects }