// Registro público de mudanças. Datas em ISO (YYYY-MM-DD ou YYYY-MM).
// Mais recente primeiro. Só fatos públicos e verificáveis.
export interface Entry {
  date: string;
  'pt-br': string;
  en: string;
}

export const changelog: Entry[] = [
  {
    date: '2026-10-10',
    'pt-br': 'Organização squadworks-ai no GitHub; código do site publicado em github.com/squadworks-ai/site.',
    en: 'squadworks-ai organization on GitHub; site source published at github.com/squadworks-ai/site.',
  },
  {
    date: '2026-10-10',
    'pt-br': 'Página de mudanças, data de fundação e dados estruturados da organização publicados no site.',
    en: 'Changelog page, founding date and structured organization data published on the site.',
  },
  {
    date: '2026-10-08',
    'pt-br': 'Site no ar em squadworks.com.br, em português e inglês.',
    en: 'Site live at squadworks.com.br, in Portuguese and English.',
  },
  {
    date: '2026-10-07',
    'pt-br': 'Domínio squadworks.com.br registrado.',
    en: 'Domain squadworks.com.br registered.',
  },
  {
    date: '2026-10',
    'pt-br': 'Squadworks fundada.',
    en: 'Squadworks founded.',
  },
];
