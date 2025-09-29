import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza España
const bancoPlazaEspana: BancoPreguntas = {
  plazaId: 'plaza-espana',
  preguntas: [
    {
      id: 'pregunta-espana-1',
      texto: {
        es: '¿Cuál de estas especies es originaria de la región mediterránea?',
        en: 'Which of these species is native to the Mediterranean region?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Araucaria bidwillii', 
            en: 'Araucaria bidwillii' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Cedrus deodara', 
            en: 'Cedrus deodara' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Punica granatum es originaria de la región mediterránea y se ha cultivado desde la antigüedad.',
        en: 'Punica granatum is native to the Mediterranean region and has been cultivated since ancient times.'
      }
    },
    {
      id: 'pregunta-espana-2',
      texto: {
        es: '¿Qué especie de la Plaza España produce flores de color azul-violáceo?',
        en: 'Which species in Plaza España produces blue-purple flowers?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Phoenix canariensis', 
            en: 'Phoenix canariensis' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Vitex agnus-castus', 
            en: 'Vitex agnus-castus' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Jacaranda mimosifolia produce hermosas flores de color azul-violáceo durante su floración.',
        en: 'Jacaranda mimosifolia produces beautiful blue-purple flowers during its blooming season.'
      }
    },
    {
      id: 'pregunta-espana-3',
      texto: {
        es: '¿Qué especie de la Plaza España es conocida por su uso medicinal tradicional?',
        en: 'Which species in Plaza España is known for its traditional medicinal use?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Phoenix canariensis', 
            en: 'Phoenix canariensis' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Vitex agnus-castus', 
            en: 'Vitex agnus-castus' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Platanus acerifolia', 
            en: 'Platanus acerifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Vitex agnus-castus ha sido utilizado tradicionalmente como planta medicinal para regular problemas hormonales.',
        en: 'Vitex agnus-castus has traditionally been used as a medicinal plant to regulate hormonal issues.'
      }
    },
    {
      id: 'pregunta-espana-4',
      texto: {
        es: '¿Cuál de estas especies produce frutos comestibles?',
        en: 'Which of these species produces edible fruits?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Platanus acerifolia', 
            en: 'Platanus acerifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Phoenix canariensis', 
            en: 'Phoenix canariensis' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Punica granatum produce frutos comestibles muy apreciados por sus propiedades nutricionales.',
        en: 'Punica granatum produces edible fruits that are highly valued for their nutritional properties.'
      }
    },
    {
      id: 'pregunta-espana-5',
      texto: {
        es: '¿Qué característica morfológica distingue a Phoenix canariensis?',
        en: 'What morphological characteristic distinguishes Phoenix canariensis?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Flores rojas brillantes', 
            en: 'Bright red flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Frutos en forma de piña', 
            en: 'Pineapple-shaped fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Tronco delgado y flexible', 
            en: 'Thin and flexible trunk' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas pinnadas en forma de abanico', 
            en: 'Fan-shaped pinnate leaves' 
          }, 
          esCorrecta: true 
        }
      ],
      explicacion: {
        es: 'Phoenix canariensis se distingue por sus grandes hojas pinnadas que crecen en forma de abanico en la parte superior del tronco.',
        en: 'Phoenix canariensis is distinguished by its large pinnate leaves that grow in a fan shape at the top of the trunk.'
      }
    },
    {
      id: 'pregunta-espana-6',
      texto: {
        es: '¿De qué región es originaria Jacaranda mimosifolia?',
        en: 'From which region does Jacaranda mimosifolia originate?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Europa', 
            en: 'Europe' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'África', 
            en: 'Africa' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'América del Sur', 
            en: 'South America' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Asia', 
            en: 'Asia' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Jacaranda mimosifolia es nativa de Sudamérica, principalmente de Argentina, Bolivia y Brasil.',
        en: 'Jacaranda mimosifolia is native to South America, mainly from Argentina, Bolivia, and Brazil.'
      }
    },
    {
      id: 'pregunta-espana-7',
      texto: {
        es: '¿Qué especie de la Plaza España es conocida por proporcionar sombra abundante?',
        en: 'Which species in Plaza España is known for providing abundant shade?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Platanus acerifolia', 
            en: 'Platanus acerifolia' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Vitex agnus-castus', 
            en: 'Vitex agnus-castus' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Phoenix canariensis', 
            en: 'Phoenix canariensis' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Platanus acerifolia es muy valorado en parques y plazas por la excelente sombra que proporciona gracias a su amplia copa.',
        en: 'Platanus acerifolia is highly valued in parks and plazas for the excellent shade it provides thanks to its wide canopy.'
      }
    },
    {
      id: 'pregunta-espana-8',
      texto: {
        es: '¿Qué caracteriza a la madera de Jacaranda mimosifolia?',
        en: 'What characterizes Jacaranda mimosifolia wood?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Es blanda y ligera', 
            en: 'It is soft and light' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Es muy resistente al fuego', 
            en: 'It is highly fire resistant' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Es aromática y duradera', 
            en: 'It is aromatic and durable' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Es flexible y elástica', 
            en: 'It is flexible and elastic' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La madera de Jacaranda mimosifolia es conocida por ser aromática, duradera y de buena calidad, utilizada en ebanistería fina.',
        en: 'Jacaranda mimosifolia wood is known for being aromatic, durable, and of good quality, used in fine cabinetmaking.'
      }
    },
    {
      id: 'pregunta-espana-9',
      texto: {
        es: '¿Qué especie no es originaria de España pero está presente en la plaza?',
        en: 'Which species is not native to Spain but is present in the plaza?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Vitex agnus-castus', 
            en: 'Vitex agnus-castus' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Platanus acerifolia', 
            en: 'Platanus acerifolia' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Jacaranda mimosifolia es nativa de Sudamérica (principalmente Argentina, Bolivia y Brasil), a pesar de encontrarse en la Plaza España.',
        en: 'Jacaranda mimosifolia is native to South America (mainly Argentina, Bolivia, and Brazil), despite being found in Plaza España.'
      }
    },
    {
      id: 'pregunta-espana-10',
      texto: {
        es: '¿Qué especie suele ser la más longeva en la Plaza España?',
        en: 'Which species tends to be the longest-lived in Plaza España?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Phoenix canariensis', 
            en: 'Phoenix canariensis' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Jacaranda mimosifolia', 
            en: 'Jacaranda mimosifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Platanus acerifolia', 
            en: 'Platanus acerifolia' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Punica granatum', 
            en: 'Punica granatum' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Phoenix canariensis son generalmente los ejemplares más longevos de la Plaza España, algunos con más de 80 años.',
        en: 'Phoenix canariensis are generally the longest-lived specimens in Plaza España, some over 80 years old.'
      }
    }
  ]
};

export default bancoPlazaEspana;