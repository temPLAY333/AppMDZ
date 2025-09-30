import { BancoPreguntas } from "../types";

// Banco de preguntas para la Plaza Chile
const bancoPlazaChile: BancoPreguntas = {
  plazaId: "plaza-chile",
  preguntas: [
    {
      id: "pregunta-chile-1",
      texto: {
        es: "¿Qué color de corteza presenta el Cedrus deodara?",
        en: "What color is the bark of Cedrus deodara?"
      },
      plantaId: "9", // ID de Cedrus deodara
      opciones: [
        { 
          texto: { 
            es: "Rojiza", 
            en: "Reddish" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Gris-marrón", 
            en: "Gray-brown" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Negra", 
            en: "Black" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Amarilla", 
            en: "Yellow" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "El Cedrus deodara tiene una corteza de color gris a marrón que se agrieta con la edad.",
        en: "Cedrus deodara has a gray to brown bark that cracks with age."
      }
    },
    {
      id: "pregunta-chile-2",
      texto: {
        es: "¿Qué característica tienen las acículas de Pinus griffithii?",
        en: "What characteristic do the needles of Pinus griffithii have?"
      },
      plantaId: "28", // ID de Pinus griffithii
      opciones: [
        { 
          texto: { 
            es: "Son cortas y rígidas", 
            en: "They are short and rigid" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Son azuladas y gruesas", 
            en: "They are bluish and thick" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Son largas y flexibles", 
            en: "They are long and flexible" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Son escamosas", 
            en: "They are scaly" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Pinus griffithii se caracteriza por tener acículas largas, flexibles y de color verde azulado que cuelgan elegantemente de las ramas.",
        en: "Pinus griffithii is characterized by having long, flexible, blue-green needles that hang elegantly from the branches."
      }
    },
    {
      id: "pregunta-chile-3",
      texto: {
        es: "¿Qué característica destaca de Cupressus sp.?",
        en: "What characteristic stands out about Cupressus sp.?"
      },
      plantaId: "13", // ID de Cupressus sp.
      opciones: [
        { 
          texto: { 
            es: "Porte piramidal", 
            en: "Pyramidal shape" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Flores rojas brillantes", 
            en: "Bright red flowers" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Hojas caducas", 
            en: "Deciduous leaves" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Frutos comestibles", 
            en: "Edible fruits" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Cupressus sp. se caracteriza por su porte piramidal, con un tronco recto y corteza delgada en la que se forman fisuras longitudinales.",
        en: "Cupressus sp. is characterized by its pyramidal shape, with a straight trunk and thin bark that forms longitudinal fissures."
      }
    },
    {
      id: "pregunta-chile-4",
      texto: {
        es: "¿Qué tipo de hojas presenta Cocculus laurifolius?",
        en: "What type of leaves does Cocculus laurifolius have?"
      },
      plantaId: "12", // ID de Cocculus laurifolius
      opciones: [
        { 
          texto: { 
            es: "Compuestas y pinnadas", 
            en: "Compound and pinnate" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Simples y lanceoladas", 
            en: "Simple and lanceolate" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Escamosas", 
            en: "Scaly" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Aciculares", 
            en: "Needle-like" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Cocculus laurifolius presenta hojas simples, brillantes y lanceoladas que recuerdan a las del laurel.",
        en: "Cocculus laurifolius has simple, glossy, and lanceolate leaves that resemble those of laurel."
      }
    },
    {
      id: "pregunta-chile-5",
      texto: {
        es: "¿Para qué se utiliza tradicionalmente la madera de Tilia sp.?",
        en: "What is Tilia sp. wood traditionally used for?"
      },
      plantaId: "39", // ID de Tilia sp.
      opciones: [
        { 
          texto: { 
            es: "Construcción pesada", 
            en: "Heavy construction" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Instrumentos musicales", 
            en: "Musical instruments" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Combustible", 
            en: "Fuel" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Postes", 
            en: "Posts" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "La madera de Tilia sp. es apreciada en la fabricación de instrumentos musicales y tallas por ser ligera y no astillarse.",
        en: "Tilia sp. wood is valued in the manufacture of musical instruments and carvings because it is light and does not splinter."
      }
    },
    {
      id: "pregunta-chile-6",
      texto: {
        es: "¿Qué altura puede alcanzar una Phoenix canariensis madura?",
        en: "What height can a mature Phoenix canariensis reach?"
      },
      plantaId: "31", // ID de Phoenix canariensis
      opciones: [
        { 
          texto: { 
            es: "3-5 metros", 
            en: "3-5 meters" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "5-8 metros", 
            en: "5-8 meters" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "10-20 metros", 
            en: "10-20 meters" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Más de 30 metros", 
            en: "More than 30 meters" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "La Phoenix canariensis puede alcanzar entre 10 y 20 metros de altura cuando es adulta.",
        en: "Phoenix canariensis can reach between 10 and 20 meters in height when mature."
      }
    },
    {
      id: "pregunta-chile-7",
      texto: {
        es: "¿Qué fruto produce el Prosopis sp.?",
        en: "What fruit does Prosopis sp. produce?"
      },
      plantaId: "26", // ID de Prosopis sp.
      opciones: [
        { 
          texto: { 
            es: "Bayas redondas", 
            en: "Round berries" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Conos leñosos", 
            en: "Woody cones" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Vainas dulces", 
            en: "Sweet pods" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Drupas carnosas", 
            en: "Fleshy drupes" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Prosopis sp. produce vainas o legumbres dulces que han sido utilizadas tradicionalmente como alimento.",
        en: "Prosopis sp. produces sweet pods or legumes that have traditionally been used as food."
      }
    },
    {
      id: "pregunta-chile-8",
      texto: {
        es: "¿Qué característica tiene el Ligustrum lucidum que lo hace problemático en algunos ecosistemas?",
        en: "What characteristic does Ligustrum lucidum have that makes it problematic in some ecosystems?"
      },
      plantaId: "21", // ID de Ligustrum lucidum
      opciones: [
        { 
          texto: { 
            es: "Atrae insectos dañinos", 
            en: "Attracts harmful insects" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Es invasivo y desplaza especies nativas", 
            en: "It is invasive and displaces native species" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Produce toxinas en el suelo", 
            en: "Produces toxins in the soil" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Consume mucha agua", 
            en: "Consumes a lot of water" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "El Ligustrum lucidum es considerado invasivo en muchas regiones por su capacidad de propagación y desplazamiento de especies nativas.",
        en: "Ligustrum lucidum is considered invasive in many regions due to its ability to spread and displace native species."
      }
    },
    {
      id: "pregunta-chile-9",
      texto: {
        es: "¿Qué uso tiene tradicionalmente el fruto de Schinus molle?",
        en: "What traditional use does the fruit of Schinus molle have?"
      },
      plantaId: "37", // ID de Schinus molle
      opciones: [
        { 
          texto: { 
            es: "Como condimento similar a la pimienta", 
            en: "As a condiment similar to pepper" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Contra el dolor de muelas", 
            en: "Against toothache" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Para teñir telas", 
            en: "For dyeing fabrics" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Como repelente de insectos", 
            en: "As an insect repellent" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Los frutos de Schinus molle son drupas globosas de color rosa a rojo, los cuales se usan para adulterar la pimienta, como condimento y como antiinflamatorio.",
        en: "The fruits of Schinus molle are globular drupes ranging from pink to red, which are used to adulterate pepper, as a condiment, and as an anti-inflammatory."
      }
    },
    {
      id: "pregunta-chile-10",
      texto: {
        es: "¿Qué característica morfológica distingue a Gleditsia triacanthos?",
        en: "What morphological characteristic distinguishes Gleditsia triacanthos?"
      },
      plantaId: "16", // ID de Gleditsia triacanthos
      opciones: [
        { 
          texto: { 
            es: "Sus grandes flores amarillas", 
            en: "Its large yellow flowers" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Sus largas espinas en el tronco", 
            en: "Its long thorns on the trunk" 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: "Su corteza descamante", 
            en: "Its peeling bark" 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: "Sus hojas siempre verdes", 
            en: "Its evergreen leaves" 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: "Gleditsia triacanthos se caracteriza por tener grandes espinas ramificadas en el tronco y ramas principales.",
        en: "Gleditsia triacanthos is characterized by having large branched thorns on the trunk and main branches."
      }
    }
  ]
};

export default bancoPlazaChile;