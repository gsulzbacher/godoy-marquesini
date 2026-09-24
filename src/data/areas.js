// As três áreas são apresentadas como pares. O site é institucional e genérico:
// a captação por área específica fica nas páginas internas e na landing page.
export const areas = [
  {
    slug: 'trabalhista',
    nome: 'Direito Trabalhista',
    curto: 'Horas extras, verbas rescisórias, reconhecimento de vínculo, assédio, acidente de trabalho e estabilidade, para empregados e para empresas.',
    seo: {
      title: 'Advogado Trabalhista em Bauru/SP | Godoy Marquesini Advocacia',
      description: 'Horas extras, verbas rescisórias, rescisão indireta, insalubridade, acidente de trabalho e reconhecimento de vínculo. Atendimento em Bauru e em todo o Brasil.',
    },
    intro: 'Com mais de 28 anos de atuação, o Direito do Trabalho é uma das principais áreas de especialização do escritório, em demandas consultivas e contenciosas. Nossa atuação alia experiência, conhecimento técnico e estratégia à análise individualizada de cada caso, buscando compreender os fatos, identificar os direitos e riscos envolvidos e definir o caminho jurídico mais adequado para cada situação.',
    icone: 'balanca',
    itens: [
      ['Horas extras e intervalos', 'Trabalho além da jornada contratada gera horas extras com adicional, e reflete em férias, 13º, FGTS e descanso semanal. Vale também para jornada em escala, intervalo não usufruído e horas de sobreaviso.'],
      ['Verbas rescisórias', 'Aviso prévio, saldo de salário, férias, 13º proporcional, multa do FGTS e demais verbas da rescisão têm prazo para serem pagas. O atraso gera multa e pode ser cobrado judicialmente.'],
      ['Demissão por justa causa e sua reversão', 'A justa causa exige falta grave, proporcionalidade e imediatidade. Aplicada fora desses requisitos, pode ser revertida na Justiça, com o pagamento de todas as verbas da dispensa sem justa causa.'],
      ['Rescisão indireta', 'Quando a empresa descumpre obrigações graves (salário atrasado, ambiente inseguro, assédio, desvio de função), o trabalhador pode pedir o reconhecimento da demissão por culpa do empregador e receber tudo o que receberia numa dispensa sem justa causa.'],
      ['Reconhecimento de vínculo de emprego', 'Quem trabalha com pessoalidade, habitualidade, subordinação e salário é empregado, mesmo que tenha sido contratado como PJ, autônomo ou freelancer. O reconhecimento garante todos os direitos do período trabalhado.'],
      ['Insalubridade e periculosidade', 'Exposição a agentes nocivos ou a risco acentuado gera adicional sobre o salário, com reflexos nas demais verbas. A prova costuma depender de perícia técnica no ambiente de trabalho.'],
      ['Acidente de trabalho e doença ocupacional', 'Acidente durante o trabalho ou doença causada pela atividade geram estabilidade de doze meses após o retorno, além de benefícios previdenciários e, dependendo do caso, indenização por danos morais e materiais.'],
      ['Assédio moral', 'Humilhação, exposição, perseguição, cobrança abusiva e constrangimento no ambiente de trabalho são ilícitos e podem gerar indenização, além de embasar a rescisão indireta.'],
      ['Diferenças salariais, acúmulo e desvio de função', 'Exercer atribuições diferentes das contratadas, ou as mesmas funções de um colega mais bem pago, pode gerar direito a diferenças salariais e a adicional por acúmulo de função.'],
      ['Estabilidade no emprego', 'Gestante, acidentado, cipeiro e dirigente sindical têm proteção contra a dispensa. A demissão dentro do período gera reintegração ou indenização correspondente.'],
      ['FGTS e adicional noturno', 'O depósito do FGTS é obrigação mensal do empregador, e o trabalho noturno tem adicional e hora reduzida. Ambos podem ser cobrados na Justiça quando não pagos corretamente.'],
      ['Indenizações decorrentes da relação de trabalho', 'Danos morais e materiais originados no contrato de trabalho, incluindo os demais direitos decorrentes da relação de emprego.'],
    ],
    fecho: 'Se a sua situação parece com alguma dessas, ou não parece com nenhuma, fale com o escritório.',
  },
  {
    slug: 'civel',
    nome: 'Direito Civil',
    curto: 'Consumidor, bancário, família, sucessões, contratos e cobranças, na via preventiva e na contenciosa.',
    seo: {
      title: 'Advogado Cível em Bauru/SP | Godoy Marquesini Advocacia',
      description: 'Direito do Consumidor, bancário, família, sucessões, elaboração e análise de contratos e cobranças judiciais e extrajudiciais.',
    },
    intro: 'O Direito Civil regula as relações entre particulares, pessoas físicas e jurídicas, no âmbito privado. A advocacia cível presta consultoria preventiva e atuação contenciosa, tanto para evitar litígios futuros quanto para resolver conflitos já instalados, em questões ligadas à família, aos bens e à forma de adquiri-los, à sucessão, ao cumprimento de obrigações e aos contratos.',
    icone: 'documento',
    itens: [
      ['Direito do Consumidor', 'Cobrança indevida, negativação irregular, produto ou serviço com defeito, plano de saúde que nega cobertura e problemas com prestadores de serviço.'],
      ['Direito bancário', 'Revisão de contratos, juros e tarifas abusivas, negativação indevida e discussão de dívidas com bancos e financeiras.'],
      ['Direito de Família', 'Divórcio, guarda, pensão alimentícia, reconhecimento e dissolução de união estável, conduzidos com a discrição que o assunto exige.'],
      ['Direito das Sucessões', 'Inventário, partilha, testamento e planejamento sucessório, na via judicial ou em cartório quando possível.'],
      ['Elaboração e análise de contratos', 'Redação, revisão e discussão de contratos, além de ações por descumprimento e rescisão. É a área onde a atuação preventiva mais economiza tempo e dinheiro.'],
      ['Cobranças judiciais e extrajudiciais', 'Recuperação de valores devidos, com análise prévia da chance real de recebimento antes de iniciar a cobrança.'],
      ['Indenizações e responsabilidade civil', 'Danos morais e materiais causados por terceiros, empresas ou prestadores de serviço.'],
    ],
    fecho: 'Conte a sua situação e avaliamos o melhor caminho, dentro ou fora da Justiça.',
  },
  {
    slug: 'previdenciario',
    nome: 'Direito Previdenciário',
    curto: 'Aposentadorias, benefícios por incapacidade, BPC/LOAS, revisões e planejamento previdenciário.',
    seo: {
      title: 'Advogado Previdenciário em Bauru/SP | Godoy Marquesini Advocacia',
      description: 'Aposentadorias, planejamento previdenciário, benefícios por incapacidade, BPC/LOAS, pensão por morte e revisão de benefícios do INSS.',
    },
    intro: 'O Direito Previdenciário está diretamente ligado à proteção do trabalhador e de sua família em momentos importantes da vida, como a aposentadoria, a incapacidade para o trabalho e outras situações que podem gerar direito a benefícios. Atuamos na via administrativa, junto ao INSS, e na via judicial.',
    icone: 'escudo',
    itens: [
      ['Aposentadorias', 'Por idade, por tempo de contribuição nas regras de transição, especial para quem trabalhou exposto a agentes nocivos, e por incapacidade permanente. Cada caso exige a análise do CNIS e do histórico completo de contribuições.'],
      ['Planejamento previdenciário', 'Análise do histórico contributivo antes de dar entrada no pedido, para descobrir qual regra é mais vantajosa e quanto tempo ainda falta. Evita aposentadoria com valor abaixo do possível.'],
      ['Benefícios por incapacidade', 'Auxílio por incapacidade temporária, o antigo auxílio-doença, e auxílio-acidente. Atuamos tanto no pedido inicial quanto no recurso, quando a perícia nega ou encerra o benefício cedo demais.'],
      ['BPC/LOAS', 'Benefício assistencial para pessoas idosas ou com deficiência em situação de vulnerabilidade, que não exige contribuição prévia. A análise dos requisitos de renda e da avaliação social é decisiva.'],
      ['Pensão por morte e auxílio-reclusão', 'Benefícios devidos aos dependentes do segurado, com regras próprias de duração e de qualificação do dependente.'],
      ['Salário-maternidade', 'Devido à segurada que deu à luz, adotou ou obteve guarda judicial para adoção, inclusive para quem já não estava trabalhando, dentro do período de graça.'],
      ['Reconhecimento e averbação de períodos', 'Tempo de contribuição não registrado, trabalho rural, atividade especial e vínculos antigos que não aparecem no CNIS podem ser reconhecidos e somados.'],
      ['Revisão de benefícios', 'Quem já recebe pode ter direito a valor maior, por erro no cálculo, período não computado, trabalho especial não reconhecido ou tese revisional aplicável ao caso.'],
      ['Recursos administrativos e ações judiciais', 'Negativa do INSS não é palavra final. Muitas caem por falta de documento, erro na contagem de carência ou perícia mal fundamentada.'],
    ],
    fecho: 'Antes de dar entrada no pedido, vale entender o seu histórico de contribuições.',
  },
];

// Mistura das três áreas de propósito: o site é institucional, não é landing de trabalhista.
export const temasFrequentes = [
  'Horas extras', 'Rescisão indireta', 'Acidente de trabalho', 'Reconhecimento de vínculo',
  'Aposentadoria', 'Benefício negado pelo INSS', 'Revisão de contrato bancário',
  'Inventário e partilha', 'Divórcio e guarda', 'Cobrança indevida',
];
