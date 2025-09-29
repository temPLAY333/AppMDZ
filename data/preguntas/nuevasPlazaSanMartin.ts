import { BancoPreguntas } from '../types';

const nuevasPlazaSanMartin: BancoPreguntas = {
  plazaId: 'plaza-san-martin',
  preguntas: [
    {
      id: 'psm-pregunta-1',
      texto: {
        es: '¿Cuál de estas características es propia del Platanus x acerifolia?',
        en: 'Which of these characteristics belongs to Platanus x acerifolia?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Hojas palmaticompuestas y frutos en cápsula', 
            en: 'Palmate-compound leaves and capsule fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Corteza que se desprende en placas escamosas dejando manchas irregulares', 
            en: 'Bark that peels off in scaly plates leaving irregular patches' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Hojas bipinnadas con nectarios en la base', 
            en: 'Bipinnate leaves with nectaries at the base' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Frutos tipo legumbre indehiscente', 
            en: 'Indehiscent legume fruits' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'El Platanus x acerifolia presenta una corteza característica de color ceniciento que se desprende en placas escamosas, dejando manchas irregulares amarillentas o blanquecinas de la corteza interna.',
        en: 'Platanus x acerifolia has a characteristic ash-colored bark that peels off in scaly plates, exposing irregular yellowish or whitish patches of the inner bark.'
      }
    },
    {
      id: 'psm-pregunta-2',
      texto: {
        es: '¿Qué característica poseen los frutos de Jacaranda mimosifolia?',
        en: 'What characteristic do the fruits of Jacaranda mimosifolia have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Son sámaras aladas', 
            en: 'They are winged samaras' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Son bayas de color rojizo', 
            en: 'They are reddish berries' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Son cápsulas planas con semillas aladas', 
            en: 'They are flat capsules with winged seeds' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Son estróbilos con escamas leñosas', 
            en: 'They are strobili with woody scales' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'El Jacaranda mimosifolia produce frutos en forma de cápsulas planas que se abren al madurar y contienen semillas aladas para facilitar su dispersión por el viento.',
        en: 'Jacaranda mimosifolia produces fruits in the form of flat capsules that open when ripe and contain winged seeds to facilitate their dispersion by wind.'
      }
    },
    {
      id: 'psm-pregunta-3',
      texto: {
        es: '¿Qué característica distintiva presenta el tronco de Ceiba speciosa?',
        en: 'What distinctive characteristic does the trunk of Ceiba speciosa present?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Corteza rugosa de color negro intenso', 
            en: 'Rough bark of intense black color' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Tronco ensanchado en su tercio inferior para almacenar agua', 
            en: 'Trunk widened in its lower third to store water' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Corteza que se desprende en láminas delgadas', 
            en: 'Bark that peels off in thin sheets' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Nudos prominentes que forman patrones en espiral', 
            en: 'Prominent knots that form spiral patterns' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Ceiba speciosa se caracteriza por su tronco ensanchado en el tercio inferior, una adaptación que le permite almacenar agua durante períodos de sequía.',
        en: 'Ceiba speciosa is characterized by its trunk widened in the lower third, an adaptation that allows it to store water during drought periods.'
      }
    },
    {
      id: 'psm-pregunta-4',
      texto: {
        es: '¿Qué tipo de fruto produce Phoenix canariensis?',
        en: 'What type of fruit does Phoenix canariensis produce?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Legumbres aladas indehiscentes', 
            en: 'Winged indehiscent legumes' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Bayas carnosas de color negro', 
            en: 'Fleshy black berries' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Drupas comestibles de color amarillo-anaranjado', 
            en: 'Edible yellow-orange drupes' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Cápsulas dehiscentes con semillas algodonosas', 
            en: 'Dehiscent capsules with cottony seeds' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Phoenix canariensis produce frutos tipo drupa comestibles de color amarillo-anaranjado, aunque con poca pulpa debido a su cultivo principalmente ornamental.',
        en: 'Phoenix canariensis produces edible yellow-orange drupe fruits, although with little pulp due to its primarily ornamental cultivation.'
      }
    },
    {
      id: 'psm-pregunta-5',
      texto: {
        es: '¿Qué adaptación presenta Quercus robur en sus frutos?',
        en: 'What adaptation does Quercus robur present in its fruits?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Frutos tipo sámara con alas membranosas', 
            en: 'Samara-type fruits with membranous wings' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Bayas dulces para atraer aves dispersoras', 
            en: 'Sweet berries to attract dispersing birds' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Bellotas con cúpula leñosa en su parte superior', 
            en: 'Acorns with a woody cup on their upper part' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Vainas explosivas que dispersan semillas a distancia', 
            en: 'Explosive pods that disperse seeds at a distance' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Quercus robur produce frutos secos llamados bellotas, envueltos en una cáscara dura con una característica cúpula leñosa en su parte superior que ayuda a proteger la semilla.',
        en: 'Quercus robur produces dry fruits called acorns, wrapped in a hard shell with a characteristic woody cup on top that helps protect the seed.'
      }
    },
    {
      id: 'psm-pregunta-6',
      texto: {
        es: '¿Qué adaptación foliar presenta Cedrus deodara para sobrevivir en climas fríos?',
        en: 'What leaf adaptation does Cedrus deodara have to survive in cold climates?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Hojas caducas que caen en invierno', 
            en: 'Deciduous leaves that fall in winter' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas aciculares con cutícula cerosa', 
            en: 'Needle-like leaves with waxy cuticle' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Hojas pequeñas y pubescentes', 
            en: 'Small and pubescent leaves' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Hojas carnosas que almacenan agua', 
            en: 'Fleshy leaves that store water' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Cedrus deodara presenta hojas aciculares (en forma de aguja) con una cutícula cerosa que reduce la pérdida de agua por transpiración y protege contra el frío, adaptación típica de las coníferas.',
        en: 'Cedrus deodara has needle-like leaves with a waxy cuticle that reduces water loss through transpiration and protects against cold, a typical adaptation of conifers.'
      }
    },
    {
      id: 'psm-pregunta-7',
      texto: {
        es: '¿Qué tipo de inflorescencia caracteriza a la familia Asteraceae presente en la plaza?',
        en: 'What type of inflorescence characterizes the Asteraceae family present in the plaza?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Umbela', 
            en: 'Umbel' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Capítulo', 
            en: 'Capitulum' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Espiga', 
            en: 'Spike' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Cima', 
            en: 'Cyme' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La familia Asteraceae se caracteriza por sus inflorescencias en capítulo, donde numerosas flores pequeñas se agrupan sobre un receptáculo común, dando la apariencia de una sola flor grande.',
        en: 'The Asteraceae family is characterized by its capitulum inflorescences, where numerous small flowers are grouped on a common receptacle, giving the appearance of a single large flower.'
      }
    },
    {
      id: 'psm-pregunta-8',
      texto: {
        es: '¿Qué tipo de hoja presenta Magnolia grandiflora?',
        en: 'What type of leaf does Magnolia grandiflora have?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Simple, coriácea y perenne', 
            en: 'Simple, coriaceous and evergreen' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Compuesta y pinnada', 
            en: 'Compound and pinnate' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Simple, membranosa y caduca', 
            en: 'Simple, membranous and deciduous' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Compuesta y palmeada', 
            en: 'Compound and palmate' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Magnolia grandiflora presenta hojas simples, coriáceas (de textura similar al cuero) y perennes, con el haz de color verde brillante y el envés de color óxido debido a la presencia de tricomas.',
        en: 'Magnolia grandiflora has simple, coriaceous (leather-like texture) and evergreen leaves, with a bright green upper surface and a rust-colored underside due to the presence of trichomes.'
      }
    },
    {
      id: 'psm-pregunta-9',
      texto: {
        es: '¿Qué adaptación reproductiva distingue a los Ginkgo biloba masculinos de los femeninos?',
        en: 'What reproductive adaptation distinguishes male from female Ginkgo biloba?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Los masculinos producen polen y los femeninos óvulos', 
            en: 'Males produce pollen and females produce ovules' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Solo los femeninos producen flores', 
            en: 'Only females produce flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Los masculinos son siempre más altos', 
            en: 'Males are always taller' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Solo los masculinos sobreviven las heladas', 
            en: 'Only males survive frosts' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Ginkgo biloba es una especie dioica, lo que significa que hay individuos masculinos que producen polen y femeninos que producen óvulos. Para la reproducción, se necesitan ambos sexos.',
        en: 'Ginkgo biloba is a dioecious species, which means there are male individuals that produce pollen and female individuals that produce ovules. For reproduction, both sexes are needed.'
      }
    },
    {
      id: 'psm-pregunta-10',
      texto: {
        es: '¿Qué característica presenta el fruto de Syagrus romanzoffiana?',
        en: 'What characteristic does the fruit of Syagrus romanzoffiana present?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Legumbres alargadas con semillas oscuras', 
            en: 'Elongated legumes with dark seeds' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Drupas fibrosas de color anaranjado', 
            en: 'Fibrous orange-colored drupes' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Cápsulas leñosas con semillas aladas', 
            en: 'Woody capsules with winged seeds' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Bayas de color negro brillante', 
            en: 'Bright black berries' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Syagrus romanzoffiana produce drupas fibrosas de color anaranjado que contienen una semilla dura en su interior y son consumidas por diversas especies de fauna nativa.',
        en: 'Syagrus romanzoffiana produces fibrous orange-colored drupes that contain a hard seed inside and are consumed by various species of native fauna.'
      }
    }
  ]
};

export default nuevasPlazaSanMartin;