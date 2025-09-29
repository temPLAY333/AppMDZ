import { BancoPreguntas } from '../types';

const nuevasPlazaSanMartin: BancoPreguntas = {
  plazaId: 'plaza-san-martin',
  preguntas: [
    {
      id: 'psm-pregunta-1',
      texto: {
        es: '¿Qué árbol ornamental se encuentra en la Plaza San Martín?',
        en: 'What ornamental tree is found in Plaza San Martín?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Eucalipto', 
            en: 'Eucalyptus' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Plátano', 
            en: 'Plane Tree' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Pino', 
            en: 'Pine' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Roble', 
            en: 'Oak' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'El Plátano es un árbol ornamental muy común en la Plaza San Martín.',
        en: 'The Plane Tree is a very common ornamental tree in Plaza San Martín.'
      }
    },
    {
      id: 'psm-pregunta-2',
      texto: {
        es: '¿Qué tipo de flores rodean la fuente central de la Plaza San Martín?',
        en: 'What type of flowers surround the central fountain of Plaza San Martín?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Tulipanes', 
            en: 'Tulips' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Margaritas', 
            en: 'Daisies' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Rosales', 
            en: 'Roses' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Girasoles', 
            en: 'Sunflowers' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Los rosales son las flores decorativas que rodean la fuente central.',
        en: 'Roses are the decorative flowers that surround the central fountain.'
      }
    },
    {
      id: 'psm-pregunta-3',
      texto: {
        es: '¿A quién honra la Plaza San Martín?',
        en: 'Who does Plaza San Martín honor?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Al General José de San Martín', 
            en: 'General José de San Martín' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'A Manuel Belgrano', 
            en: 'Manuel Belgrano' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'A Domingo Faustino Sarmiento', 
            en: 'Domingo Faustino Sarmiento' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'A Juan Bautista Alberdi', 
            en: 'Juan Bautista Alberdi' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'La Plaza San Martín honra al General José de San Martín.',
        en: 'Plaza San Martín honors General José de San Martín.'
      }
    },
    {
      id: 'psm-pregunta-4',
      texto: {
        es: '¿Cuánto tiempo pueden vivir los plátanos de la Plaza San Martín?',
        en: 'How long can the plane trees in Plaza San Martín live?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Menos de 20 años', 
            en: 'Less than 20 years' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Entre 30 y 50 años', 
            en: 'Between 30 and 50 years' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Entre 60 y 90 años', 
            en: 'Between 60 and 90 years' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Más de 100 años', 
            en: 'More than 100 years' 
          }, 
          esCorrecta: true 
        }
      ],
      explicacion: {
        es: 'Los plátanos son árboles longevos que pueden vivir más de 100 años.',
        en: 'Plane trees are long-lived trees that can live more than 100 years.'
      }
    },
    {
      id: 'psm-pregunta-5',
      texto: {
        es: '¿Qué característica destaca de los plátanos en la plaza?',
        en: 'What characteristic stands out about the plane trees in the plaza?'
      },
      opciones: [
        { 
          texto: { 
            es: 'Sus frutos comestibles', 
            en: 'Their edible fruits' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'Su capacidad para purificar el aire', 
            en: 'Their ability to purify the air' 
          }, 
          esCorrecta: false 
        },
        { 
          texto: { 
            es: 'La sombra que proporcionan', 
            en: 'The shade they provide' 
          }, 
          esCorrecta: true 
        },
        { 
          texto: { 
            es: 'Sus flores aromáticas', 
            en: 'Their aromatic flowers' 
          }, 
          esCorrecta: false 
        }
      ],
      explicacion: {
        es: 'Los plátanos son muy apreciados por la amplia sombra que proporcionan.',
        en: 'Plane trees are highly appreciated for the ample shade they provide.'
      }
    }
  ]
};

export default nuevasPlazaSanMartin;