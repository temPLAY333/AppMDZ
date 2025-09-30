import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza España
const bancoPlazaEspana: BancoPreguntas = {
  plazaId: 'plaza-espana',
  preguntas: [
    {
      id: 'pregunta-espana-1',
      texto: {
        es: '¿Qué tipo de árbol frutal es Punica granatum?',
        en: 'What type of fruit tree is Punica granatum?'
      },
      plantaId: '33', // ID de Punica granatum
      opciones: [
        { 
          texto: { 
            es: 'Árbol de copa amplia y tronco recto', 
            en: 'Tree with wide crown and straight trunk' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Árbol frutal caducifolio que puede crecer como arbusto', 
            en: 'Deciduous fruit tree that can grow as a shrub' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Árbol perennifolio de gran altura', 
            en: 'Tall evergreen tree' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Palmera con tronco único', 
            en: 'Palm tree with single trunk' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Punica granatum es un árbol frutal de hasta 5 m de altura, que puede desarrollarse de forma arbustiva, caducifolio, más o menos espinoso y muy ramificado.',
        en: 'Punica granatum is a fruit tree up to 5 m tall, which can develop in a shrubby form, deciduous, more or less spiny and very branched.'
      }
    },
    {
      id: 'pregunta-espana-2',
      texto: {
        es: '¿Qué especie de la Plaza España produce flores de color azul-violáceo?',
        en: 'Which species in Plaza España produces blue-purple flowers?'
      },
      plantaId: '19', // ID de Jacaranda mimosifolia
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
      plantaId: '41', // ID de Vitex agnus-castus
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
      plantaId: '33', // ID de Punica granatum
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
      plantaId: '31', // ID de Phoenix canariensis
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
        es: '¿Qué característica destaca de Nerium oleander presente en la Plaza España?',
        en: 'What characteristic stands out about Nerium oleander present in Plaza España?'
      },
      plantaId: '27', // ID de Nerium oleander (adelfa)
      opciones: [
        { 
          texto: { 
            es: 'Sus hojas caducas', 
            en: 'Its deciduous leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Sus hojas agrupadas en verticilos de tres', 
            en: 'Its leaves arranged in whorls of three' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Sus frutos comestibles', 
            en: 'Its edible fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Su corteza exfoliante', 
            en: 'Its exfoliating bark' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Nerium oleander se caracteriza por sus hojas linear-lanceoladas o estrechamente elípticas, dispuestas en verticilos de 3, con nervios muy marcados. Es importante destacar que esta planta es tóxica y no debe ingerirse.',
        en: 'Nerium oleander is characterized by its linear-lanceolate or narrowly elliptical leaves, arranged in whorls of 3, with very marked veins. It is important to note that this plant is toxic and should not be ingested.'
      }
    },
    {
      id: 'pregunta-espana-7',
      texto: {
        es: '¿Qué característica tiene la Firmiana Simplex presente en la Plaza España?',
        en: 'What characteristic does the Firmiana Simplex have in Plaza España?'
      },
      plantaId: '17', // ID de Firmiana Simplex (parasol chino)
      opciones: [
        { 
          texto: { 
            es: 'Hojas simples y redondeadas', 
            en: 'Simple and rounded leaves' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Hojas bipinnadas similares a un helecho', 
            en: 'Bipinnate fern-like leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas en forma de aguja', 
            en: 'Needle-shaped leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas palmadas con 5 lóbulos', 
            en: 'Palmate leaves with 5 lobes' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Grevillea robusta posee hojas bipinnadas muy ornamentales, similares a las de un helecho. Este árbol puede alcanzar más de 25 metros de altura y produce llamativas flores de color amarillo-anaranjado.',
        en: 'Grevillea robusta has highly ornamental bipinnate leaves, similar to those of a fern. This tree can reach over 25 meters in height and produces striking yellow-orange flowers.'
      }
    },
    {
      id: 'pregunta-espana-8',
      texto: {
        es: '¿Qué característica presentan las hojas de Cercis siliquastrum?',
        en: 'What characteristic do the leaves of Cercis siliquastrum have?'
      },
      plantaId: '11', // ID de Cercis siliquastrum (árbol de Judea)
      opciones: [
        { 
          texto: { 
            es: 'Forma de aguja', 
            en: 'Needle-like shape' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Forma acorazonada o reniforme', 
            en: 'Heart-shaped or reniform' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Compuestas con múltiples folíolos', 
            en: 'Compound with multiple leaflets' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Lineales y muy estrechas', 
            en: 'Linear and very narrow' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Cercis siliquastrum tiene hojas simples, alternas, caducas, de forma acorazonada o reniforme, lo que le da un aspecto muy ornamental. Sus flores rosadas aparecen antes que las hojas, emergiendo directamente del tronco y las ramas.',
        en: 'Cercis siliquastrum has simple, alternate, deciduous, heart-shaped or reniform leaves, which gives it a very ornamental appearance. Its pink flowers appear before the leaves, emerging directly from the trunk and branches.'
      }
    },
    {
      id: 'pregunta-espana-9',
      texto: {
        es: '¿Qué característica destaca del tronco de Cercis siliquastrum en la Plaza España?',
        en: 'What characteristic stands out about the trunk of Cercis siliquastrum in Plaza España?'
      },
      plantaId: '11', // ID de Cercis siliquastrum (árbol de Judea)
      opciones: [
        { 
          texto: { 
            es: 'Su corteza lisa que se vuelve tortuosa y oscura con la edad', 
            en: 'Its smooth bark that becomes twisted and dark with age' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Su altura superior a 15 metros', 
            en: 'Its height over 15 meters' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Sus frutos espinosos venenosos', 
            en: 'Its poisonous spiny fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Su resistencia a suelos salinos', 
            en: 'Its resistance to saline soils' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Cercis siliquastrum se caracteriza por su tronco de madera lisa y clara que con la edad se vuelve tortuoso y negro, con una copa abierta e irregular.',
        en: 'Cercis siliquastrum is characterized by its trunk of smooth, light wood that becomes twisted and black with age, with an open and irregular crown.'
      }
    },
    {
      id: 'pregunta-espana-10',
      texto: {
        es: '¿Qué característica tiene Cupressus arizonica presente en la Plaza España?',
        en: 'What characteristic does Cupressus arizonica have in Plaza España?'
      },
      plantaId: '13', // ID de Cupressus sp.
      opciones: [
        { 
          texto: { 
            es: 'Corteza rojiza que se desprende en láminas', 
            en: 'Reddish bark that peels in sheets' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Hojas caducas en invierno', 
            en: 'Deciduous leaves in winter' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Frutos carnosos y comestibles', 
            en: 'Fleshy and edible fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores de color púrpura intenso', 
            en: 'Deep purple flowers' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Cupressus arizonica se caracteriza por su corteza rojiza que se desprende en láminas y por sus hojas escamiformes de color verde grisáceo con glándulas resiníferas. Este árbol perennifolio puede alcanzar los 20 metros de altura y tiene una copa cónica muy densa.',
        en: 'Cupressus arizonica is characterized by its reddish bark that peels in sheets and its grayish-green scale-like leaves with resin glands. This evergreen tree can reach 20 meters in height and has a very dense conical crown.'
      }
    }
  ]
};

export default bancoPlazaEspana;