export const site = {
  nome: 'Godoy Marquesini Advocacia',
  whatsapp: '5514997789631',
  whatsappVisivel: '(14) 99778-9631',
  horario: 'Seg a sex · 9h às 11h30 e 13h30 às 17h',
  horarioCurto: 'Seg a sex · 9h às 17h',
  observacaoHorario: 'Atendimento com hora marcada',
  cidade: 'Bauru/SP',
  oab: 'OAB/SP 155.874',
  fundacao: 2016,
  anosDeAdvocacia: 28,
  estados: 18,
  endereco: 'Rua Paes Leme, 8-22, Sala 4',
  cep: '17013-180',
  // PENDENTE: a cliente quer um e-mail corporativo no domínio novo.
  // Enquanto não existe, usamos o pessoal que ela informou.
  email: 'vivianecolacino@hotmail.com',
  redes: [
    { nome: 'Instagram', url: 'https://www.instagram.com/vivianecolacino/' },
    { nome: 'Facebook', url: 'https://www.facebook.com/godoymarquesini/' },
    { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/viviane-colacino-de-godoy-marquesini-401450122/' },
    { nome: 'YouTube', url: 'https://www.youtube.com/channel/UCLEDl43PhzF9mncR0ab9bRw/videos' },
  ],
};

export const enderecoCompleto = `${site.endereco} · ${site.cidade} · CEP ${site.cep}`;

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
