import { u } from './site.js';

// Os três banners e as três frases vieram da própria cliente.
// A ordem foi escolhida pela força da imagem: ela deixou a critério nosso.
export const banners = [
  {
    img: u('/fotos/banner/banner-a.jpg'),
    alt: 'Dra. Viviane Colacino de Godoy Marquesini sentada à mesa do escritório, com o notebook aberto',
    frase: 'Defender direitos exige conhecimento. Saber como fazê-lo exige experiência.',
    // o rosto dela começa em 7% da altura da foto: enquadramento alto para
    // não cortar a cabeça. Ver a conta em CLIENTE.md (revisão 1 da cliente).
    foco: '34% 22%',
    // só o primeiro banner leva o texto de apoio; nos outros a frase é a protagonista
    lead: 'Uma advocacia que une conhecimento jurídico, atuação estratégica e atendimento personalizado para defender os interesses de trabalhadores e empresas em todo o Brasil.',
  },
  {
    img: u('/fotos/banner/banner-c.jpg'),
    alt: 'Advogada assinando documentos sobre a mesa do escritório',
    frase: 'Cada processo tem um número. Para nós, cada número tem uma história.',
    foco: '35% 50%',
  },
  {
    img: u('/fotos/banner/banner-b.jpg'),
    alt: 'Entrada do escritório Godoy Marquesini Advocacia, em Bauru/SP',
    frase: 'Há mais de 28 anos, transformando Direitos em números.',
    foco: '50% 50%',
  },
];
