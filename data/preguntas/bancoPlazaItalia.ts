import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza Italia
const bancoPlazaItalia: BancoPreguntas = {
  plazaId: 'plaza-italia',
  preguntas: [
    {
      id: 'pregunta-italia-1',
      texto: {
        es: '¿Qué característica distintiva presenta el tronco de Trachycarpus fortunei?',
        en: 'What distinctive characteristic does the trunk of Trachycarpus fortunei have?'
      },
      plantaId: '42', // ID de Trachycarpus fortunei (palmera china)
      opciones: [
        { 
          texto: { 
            es: 'Tronco liso y sin marcas', 
            en: 'Smooth trunk without marks' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Aspecto "peludo" por las vainas de hojas caídas', 
            en: '"Hairy" appearance due to fallen leaf sheaths' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Tronco con espinas', 
            en: 'Trunk with thorns' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Tronco con anillos muy separados', 
            en: 'Trunk with widely spaced rings' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Trachycarpus fortunei se caracteriza por su tronco que queda recubierto (total o parcialmente) por las vainas de las hojas caídas, lo que le da un aspecto "peludo" muy distintivo.',
        en: 'Trachycarpus fortunei is characterized by its trunk that is covered (totally or partially) by the sheaths of fallen leaves, giving it a very distinctive "hairy" appearance.'
      }
    },
    {
      id: 'pregunta-italia-2',
      texto: {
        es: '¿Cuál es la característica distintiva de la Casuarina cunninghamiana?',
        en: 'What is the distinctive characteristic of Casuarina cunninghamiana?'
      },
      plantaId: '8', // ID de Casuarina cunninghamiana (casuarina)
      opciones: [
        { 
          texto: { 
            es: 'Hojas anchas', 
            en: 'Broad leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Ramas que parecen agujas de pino', 
            en: 'Branches that look like pine needles' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Flores vistosas', 
            en: 'Showy flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Frutos comestibles', 
            en: 'Edible fruits' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Casuarina cunninghamiana tiene ramas finas con articulaciones que se parecen a las agujas de los pinos, aunque botánicamente son muy diferentes.',
        en: 'Casuarina cunninghamiana has fine branches with joints that resemble pine needles, although botanically they are very different.'
      }
    },
    {
      id: 'pregunta-italia-3',
      texto: {
        es: '¿Qué color de flor presenta la Erythrina crista-galli?',
        en: 'What color are the flowers of Erythrina crista-galli?'
      },
      plantaId: '15', // ID de Erythrina crista-galli (ceibo)
      opciones: [
        { 
          texto: { 
            es: 'Blanco', 
            en: 'White' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Amarillo', 
            en: 'Yellow' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Rojo intenso', 
            en: 'Bright red' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Azul', 
            en: 'Blue' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Erythrina crista-galli presenta flores de color rojo intenso muy características.',
        en: 'Erythrina crista-galli has very characteristic bright red flowers.'
      }
    },
    {
      id: 'pregunta-italia-4',
      texto: {
        es: '¿Para qué se utiliza principalmente el fruto del Liquidambar styraciflua?',
        en: 'What is the main use of the fruit of Liquidambar styraciflua?'
      },
      plantaId: '22', // ID de Liquidambar styraciflua (liquidámbar americano)
      opciones: [
        { 
          texto: { 
            es: 'Consumo humano', 
            en: 'Human consumption' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Extracción de resinas aromáticas', 
            en: 'Extraction of aromatic resins' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Fabricación de tejidos', 
            en: 'Fabric manufacturing' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Alimentación animal', 
            en: 'Animal feed' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'De Liquidambar styraciflua se extrae una resina aromática utilizada en perfumería y medicina tradicional.',
        en: 'An aromatic resin used in perfumery and traditional medicine is extracted from Liquidambar styraciflua.'
      }
    },
    {
      id: 'pregunta-italia-5',
      texto: {
        es: '¿Qué característica tiene el Cedrus deodara que lo distingue?',
        en: 'What characteristic distinguishes Cedrus deodara?'
      },
      plantaId: '9', // ID de Cedrus deodara (cedro del Himalaya)
      opciones: [
        { 
          texto: { 
            es: 'Hojas perennes y forma piramidal', 
            en: 'Evergreen leaves and pyramidal shape' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Tronco retorcido', 
            en: 'Twisted trunk' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores vistosas', 
            en: 'Showy flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Frutos carnosos', 
            en: 'Fleshy fruits' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'El Cedrus deodara se distingue por su forma piramidal y sus hojas perennes de color verde azulado.',
        en: 'Cedrus deodara is distinguished by its pyramidal shape and blue-green evergreen leaves.'
      }
    },
    {
      id: 'pregunta-italia-6',
      texto: {
        es: '¿Qué característica distintiva presenta el tronco de Phytolacca dioica?',
        en: 'What distinctive characteristic does the trunk of Phytolacca dioica have?'
      },
      plantaId: '32', // ID de Phytolacca dioica (ombú)
      opciones: [
        { 
          texto: { 
            es: 'Tronco delgado y flexible', 
            en: 'Thin and flexible trunk' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Tronco muy engrosado con madera blanda y esponjosa', 
            en: 'Very thickened trunk with soft and spongy wood' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Tronco con corteza exfoliante', 
            en: 'Trunk with exfoliating bark' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Tronco con espinas ramificadas', 
            en: 'Trunk with branched thorns' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Phytolacca dioica se caracteriza por su tronco muy engrosado, que puede alcanzar gran diámetro, con madera blanda y esponjosa que le permite un rápido crecimiento.',
        en: 'Phytolacca dioica is characterized by its very thickened trunk, which can reach a large diameter, with soft and spongy wood that allows rapid growth.'
      }
    },
    {
      id: 'pregunta-italia-7',
      texto: {
        es: '¿Qué tipo de copa forma el Cupressus sp.?',
        en: 'What type of crown does Cupressus sp. form?'
      },
      plantaId: '13', // ID de Cupressus sp. (ciprés)
      opciones: [
        { 
          texto: { 
            es: 'Extendida y horizontal', 
            en: 'Extended and horizontal' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Irregular y asimétrica', 
            en: 'Irregular and asymmetrical' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Cónica y estrecha', 
            en: 'Conical and narrow' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Redondeada y densa', 
            en: 'Round and dense' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Cupressus sp. se caracteriza por formar copas cónicas y estrechas, con un perfil columnar muy distintivo.',
        en: 'Cupressus sp. is characterized by forming conical and narrow crowns, with a very distinctive columnar profile.'
      }
    },
    {
      id: 'pregunta-italia-8',
      texto: {
        es: '¿Qué tipo de hoja presenta Tilia sp. presente en la Plaza Italia?',
        en: 'What type of leaf does Tilia sp. present in Plaza Italia have?'
      },
      plantaId: '39', // ID de Tilia sp. (tilo)
      opciones: [
        { 
          texto: { 
            es: 'Hojas aciculares', 
            en: 'Needle-like leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas cordiformes (forma de corazón)', 
            en: 'Cordate (heart-shaped) leaves' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Hojas compuestas pinnadas', 
            en: 'Compound pinnate leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas escamosas', 
            en: 'Scaly leaves' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Tilia sp. se caracteriza por sus hojas cordiformes o con forma de corazón, con bordes aserrados y de un color verde intenso en el haz.',
        en: 'Tilia sp. is characterized by its cordate or heart-shaped leaves, with serrated edges and bright green on the upper surface.'
      }
    },
    {
      id: 'pregunta-italia-9',
      texto: {
        es: '¿Qué color tienen los frutos maduros de la Phoenix canariensis?',
        en: 'What color are the ripe fruits of Phoenix canariensis?'
      },
      plantaId: '31', // ID de Phoenix canariensis (palma fénix)
      opciones: [
        { 
          texto: { 
            es: 'Verde', 
            en: 'Green' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Amarillo', 
            en: 'Yellow' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Naranja-rojizo', 
            en: 'Orange-reddish' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Morado', 
            en: 'Purple' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La Phoenix canariensis produce dátiles de color naranja-rojizo cuando están maduros, aunque no son tan comestibles como los de otras especies.',
        en: 'Phoenix canariensis produces orange-reddish dates when ripe, although they are not as edible as those of other species.'
      }
    },
    {
      id: 'pregunta-italia-10',
      texto: {
        es: '¿Qué utilidad tradicional tiene la madera del Fraxinus presente en la Plaza Italia?',
        en: 'What traditional use does the wood of Fraxinus in Plaza Italia have?'
      },
      plantaId: '18', // ID de Fraxinus sp. (fresno)
      opciones: [
        { 
          texto: { 
            es: 'Elaboración de muebles y pisos', 
            en: 'Furniture and flooring manufacturing' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Elaboración de papel', 
            en: 'Paper production' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Extracción de resinas aromáticas', 
            en: 'Extraction of aromatic resins' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Fabricación de medicamentos', 
            en: 'Pharmaceutical manufacturing' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La madera del Fraxinus es muy apreciada por su durabilidad, flexibilidad y resistencia, siendo tradicionalmente utilizada en la fabricación de muebles de alta calidad y pisos duraderos.',
        en: 'Fraxinus wood is highly valued for its durability, flexibility, and strength, being traditionally used in the manufacture of high-quality furniture and durable flooring.'
      }
    }
  ]
};

export default bancoPlazaItalia;