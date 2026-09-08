export const site = {
  nome: 'Godoy Marquesini Advocacia',
  whatsapp: '5514997789631',
  whatsappVisivel: '(14) 99778-9631',
  horario: 'Seg a sex · 9h às 18h',
  cidade: 'Bauru/SP',
  oab: 'OAB/SP 155.874',
  // PENDENTE da cliente: endereço completo, e-mail e @ do Instagram
  endereco: null,
  email: null,
  instagram: null,
};

// Prefixa qualquer caminho interno com o base do ambiente (/ na Vercel,
// /godoy-marquesini/ no GitHub Pages). Sem isso os links quebram no Pages.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (caminho = '/') => (caminho === '/' ? `${BASE}/` : `${BASE}${caminho}`);

export const zap = (texto) =>
  `https://wa.me/${site.whatsapp}` + (texto ? `?text=${encodeURIComponent(texto)}` : '');

export const menu = [
  { href: u('/areas'), label: 'Áreas de atuação' },
  { href: u('/o-escritorio'), label: 'O escritório' },
  { href: u('/equipe'), label: 'Equipe' },
  { href: u('/blog'), label: 'Artigos' },
  { href: u('/contato'), label: 'Contato' },
];
