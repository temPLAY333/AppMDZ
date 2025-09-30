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
      plantaId: '30', // ID de Platanus x acerifolia (plátano)
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
        es: 'Platanus x acerifolia presenta una corteza característica de color ceniciento que se desprende en placas escamosas, dejando manchas irregulares amarillentas o blanquecinas de la corteza interna.',
        en: 'Platanus x acerifolia has a characteristic ash-colored bark that peels off in scaly plates, exposing irregular yellowish or whitish patches of the inner bark.'
      }
    },
    {
      id: 'psm-pregunta-2',
      texto: {
        es: '¿Qué característica poseen los frutos de Jacaranda mimosifolia?',
        en: 'What characteristic do the fruits of Jacaranda mimosifolia have?'
      },
      plantaId: '19', // ID de Jacaranda mimosifolia (jacarandá)
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
        es: 'Jacaranda mimosifolia produce frutos en forma de cápsulas planas que se abren al madurar y contienen semillas aladas para facilitar su dispersión por el viento.',
        en: 'Jacaranda mimosifolia produces fruits in the form of flat capsules that open when ripe and contain winged seeds to facilitate their dispersion by wind.'
      }
    },
    {
      id: 'psm-pregunta-3',
      texto: {
        es: '¿Qué característica distintiva presenta el tronco de Ceiba speciosa?',
        en: 'What distinctive characteristic does the trunk of Ceiba speciosa present?'
      },
      plantaId: '10', // ID de Ceiba speciosa (palo borracho)
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
      plantaId: '31', // ID de Phoenix canariensis (palma fénix)
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
            es: 'Carpelos comestibles de color amarillo-anaranjado', 
            en: 'Edible yellow-orange carpels' 
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
      plantaId: '34', // ID de Quercus robur (roble)
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
      plantaId: '9', // ID de Cedrus deodara (cedro del Himalaya)
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
        es: '¿Qué tipo de hoja presenta Magnolia grandiflora?',
        en: 'What type of leaf does Magnolia grandiflora have?'
      },
      plantaId: '23', // ID de Magnolia grandiflora (magnolia)
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
      id: 'psm-pregunta-8',
      texto: {
        es: '¿Qué característica presenta la flor de Erythrina crista-galli?',
        en: 'What characteristic does the flower of Erythrina crista-galli have?'
      },
      plantaId: '15', // ID de Erythrina crista-galli (ceibo)
      opciones: [
        { 
          texto: { 
            es: 'Flores pequeñas y discretas', 
            en: 'Small and discrete flowers' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores en racimos pendulares', 
            en: 'Flowers in pendular clusters' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Flores grandes de color rojo intenso', 
            en: 'Large bright red flowers' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Flores con aroma dulce', 
            en: 'Flowers with sweet aroma' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Erythrina crista-galli se caracteriza por sus grandes y llamativas flores de color rojo intenso, que destacan visualmente y atraen a polinizadores como colibríes.',
        en: 'Erythrina crista-galli is characterized by its large and striking bright red flowers, which stand out visually and attract pollinators such as hummingbirds.'
      }
    },
    {
      id: 'psm-pregunta-9',
      texto: {
        es: '¿Qué característica presenta el fruto de Syagrus romanzoffiana?',
        en: 'What characteristic does the fruit of Syagrus romanzoffiana present?'
      },
      plantaId: '38', // ID de Syagrus romanzoffiana (pindó)
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