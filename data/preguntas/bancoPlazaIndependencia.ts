import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza Independencia
const bancoPlazaIndependencia: BancoPreguntas = {
  plazaId: 'plaza-independencia',
  preguntas: [
    {
      id: 'pregunta-independencia-1',
      texto: {
        es: '¿Cuál es el origen de la Tipuana tipu?',
        en: 'What is the origin of Tipuana tipu?'
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
            es: 'Sudamérica', 
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
        es: 'La Tipuana tipu es originaria de Sudamérica, específicamente de Bolivia y el norte de Argentina.',
        en: 'Tipuana tipu is native to South America, specifically Bolivia and northern Argentina.'
      }
    },
    {
      id: 'pregunta-independencia-2',
      texto: {
        es: '¿Qué característica tiene la Acacia visco?',
        en: 'What characteristic does Acacia visco have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Flores rojas', 
            en: 'Red flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores amarillas', 
            en: 'Yellow flowers' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Flores blancas', 
            en: 'White flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores moradas', 
            en: 'Purple flowers' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La Acacia visco presenta flores amarillas pequeñas agrupadas en cabezuelas.',
        en: 'Acacia visco has small yellow flowers grouped in capitula.'
      }
    },
    {
      id: 'pregunta-independencia-3',
      texto: {
        es: '¿Qué tipo de hojas tiene el Cupressus sp.?',
        en: 'What type of leaves does Cupressus sp. have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Aciculares', 
            en: 'Needle-like' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Escamosas', 
            en: 'Scaly' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Lanceoladas', 
            en: 'Lanceolate' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Bipinnadas', 
            en: 'Bipinnate' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Los cipreses tienen hojas escamosas, pequeñas y superpuestas que cubren completamente las ramillas.',
        en: 'Cypress trees have small, overlapping scaly leaves that completely cover the twigs.'
      }
    },
    {
      id: 'pregunta-independencia-4',
      texto: {
        es: '¿Qué uso medicinal tradicional tiene el Vitex agnus-castus?',
        en: 'What traditional medicinal use does Vitex agnus-castus have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Para problemas respiratorios', 
            en: 'For respiratory problems' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Para regular problemas hormonales', 
            en: 'To regulate hormonal problems' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Para enfermedades cardíacas', 
            en: 'For heart diseases' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Como antiséptico', 
            en: 'As an antiseptic' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Vitex agnus-castus ha sido utilizado tradicionalmente en la medicina herbal para regular problemas hormonales, especialmente en mujeres.',
        en: 'Vitex agnus-castus has been traditionally used in herbal medicine to regulate hormonal problems, especially in women.'
      }
    },
    {
      id: 'pregunta-independencia-5',
      texto: {
        es: '¿Para qué se utilizan principalmente los árboles de Eucalyptus sp.?',
        en: 'What are Eucalyptus sp. trees mainly used for?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Producción de papel', 
            en: 'Paper production' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Extracción de aceites esenciales', 
            en: 'Essential oil extraction' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Fabricación de muebles finos', 
            en: 'Fine furniture manufacturing' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Alimento para ganado', 
            en: 'Livestock feed' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Los eucaliptos son ampliamente utilizados en la industria papelera debido a su rápido crecimiento y fibra de celulosa.',
        en: 'Eucalyptus trees are widely used in the paper industry due to their rapid growth and cellulose fiber.'
      }
    },
    {
      id: 'pregunta-independencia-6',
      texto: {
        es: '¿Qué tipo de fruto produce la Morus nigra?',
        en: 'What type of fruit does Morus nigra produce?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Vaina', 
            en: 'Pod' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Drupa', 
            en: 'Drupe' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Mora compuesta', 
            en: 'Compound mulberry' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Cápsula', 
            en: 'Capsule' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La Morus nigra produce una infrutescencia formada por pequeños drupéolos.',
        en: 'Morus nigra produces an infructescence formed by small drupelets.'
      }
    },
    {
      id: 'pregunta-independencia-7',
      texto: {
        es: '¿Qué características posee la madera de la Robinia pseudoacacia?',
        en: 'What characteristics does the wood of Robinia pseudoacacia have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Blanda y flexible', 
            en: 'Soft and flexible' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Dura y resistente a la pudrición', 
            en: 'Hard and rot-resistant' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Frágil y quebradiza', 
            en: 'Fragile and brittle' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Ligera y porosa', 
            en: 'Light and porous' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La Robinia pseudoacacia tiene una madera muy dura y resistente a la pudrición, utilizada en exteriores y construcciones.',
        en: 'Robinia pseudoacacia has very hard and rot-resistant wood, used in outdoor applications and construction.'
      }
    },
    {
      id: 'pregunta-independencia-8',
      texto: {
        es: '¿Qué altura puede alcanzar el Cedrus deodara?',
        en: 'What height can Cedrus deodara reach?'
      },
      opciones: [
        { 
          texto: { 
            es: '5-10 metros', 
            en: '5-10 meters' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: '10-20 metros', 
            en: '10-20 meters' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: '20-30 metros', 
            en: '20-30 meters' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: '30-50 metros', 
            en: '30-50 meters' 
          }, 
          esCorrecta: true 
        }
      ],
      explicacion: {
        es: 'El Cedrus deodara puede alcanzar entre 30 y 50 metros de altura en condiciones óptimas, siendo uno de los cedros más altos.',
        en: 'Cedrus deodara can reach between 30 and 50 meters in height under optimal conditions, making it one of the tallest cedars.'
      }
    },
    {
      id: 'pregunta-independencia-9',
      texto: {
        es: '¿Qué tipo de hojas presenta el Quercus suber?',
        en: 'What type of leaves does Quercus suber have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Perennes y coriáceas', 
            en: 'Evergreen and leathery' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Caducas y lobuladas', 
            en: 'Deciduous and lobed' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Aciculares', 
            en: 'Needle-like' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Compuestas y pinnadas', 
            en: 'Compound and pinnate' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'El Quercus suber tiene hojas perennes, coriáceas, ovales y dentadas, que permanecen en el árbol durante varios años.',
        en: 'Quercus suber has evergreen, leathery, oval, and toothed leaves that remain on the tree for several years.'
      }
    },
    {
      id: 'pregunta-independencia-10',
      texto: {
        es: '¿Qué característica presenta la corteza de Quercus suber que lo hace económicamente valioso?',
        en: 'What characteristic does the bark of Quercus suber present that makes it economically valuable?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Contiene sustancias medicinales', 
            en: 'Contains medicinal substances' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Produce un tinte natural', 
            en: 'Produces a natural dye' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Es gruesa y sirve para fabricar corcho', 
            en: 'Is thick and used for cork manufacturing' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Es comestible y nutritiva', 
            en: 'Is edible and nutritious' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Quercus suber posee una corteza extraordinariamente gruesa y rugosa que se aprovecha económicamente para la fabricación de corchos y otros productos, pudiendo ser extraída periódicamente sin dañar al árbol.',
        en: 'Quercus suber has an extraordinarily thick and rough bark that is economically utilized for the manufacturing of corks and other products, and can be periodically harvested without harming the tree.'
      }
    }
  ]
};

export default bancoPlazaIndependencia;