import { u } from './site.js';

// Os três banners e as três frases vieram da própria cliente.
// A ordem foi escolhida pela força da imagem: ela deixou a critério nosso.
export const banners = [
  {
    img: u('/fotos/banner/banner-a.jpg'),
    alt: 'Dra. Viviane Colacino de Godoy Marquesini no escritório, ao lado da logo do Godoy Marquesini Advocacia',
    frase: 'Defender direitos exige conhecimento. Saber como fazê-lo exige experiência.',
    foco: '30% 35%',
  },
  {
    img: u('/fotos/banner/banner-c.jpg'),
    alt: 'Advogada assinando documentos sobre a mesa do escritório',
    frase: 'Cada processo tem um número. Para nós, cada número tem uma história.',
    foco: '60% 50%',
  },
  {
    img: u('/fotos/banner/banner-b.jpg'),
    alt: 'Fachada do escritório Godoy Marquesini Advocacia, em Bauru/SP',
    frase: 'Há mais de 28 anos, transformando Direitos em números.',
    foco: '50% 55%',
  },
];
