import { u } from './site.js';

// PENDENTE da cliente: mini-currículo de cada advogado + nome completo e OAB da Dra. Anna Carolina.
// Enquanto não vier, `bio` fica null e o card mostra só nome, papel e área.
export const equipe = [
  {
    nome: 'Dra. Viviane C. de Godoy Marquesini',
    nomeCompleto: 'Viviane Colacino de Godoy Marquesini',
    papel: 'Sócia fundadora · responsável técnica',
    oab: 'OAB/SP 155.874',
    area: 'Direito do Trabalho',
    foto: u('/fotos/equipe/viviane.jpg'),
    pos: '72% 22%',
    bio: null,
  },
  {
    nome: 'Dr. Rafael César Ramos',
    papel: 'Advogado',
    oab: 'OAB/SP 509.158',
    area: 'Direito do Trabalho',
    foto: u('/fotos/equipe/rafael.jpg'),
    pos: '50% 18%',
    bio: null,
  },
  {
    nome: 'Dra. Anna Carolina',
    papel: 'Advogada',
    oab: null,
    area: 'Trabalhista e Previdenciário',
    foto: u('/fotos/equipe/ana-carolina.jpg'),
    pos: '70% 20%',
    bio: null,
  },
  {
    nome: 'Dr. Eduardo Mangilli Pachelli',
    papel: 'Advogado',
    oab: 'OAB/SP 375.996',
    area: 'Direito Cível',
    foto: u('/fotos/equipe/eduardo.jpg'),
    pos: '50% 12%',
    bio: null,
  },
];
