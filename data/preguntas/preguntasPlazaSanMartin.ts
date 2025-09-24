import { BancoPreguntas } from '../types';

const preguntasPlazaSanMartin: BancoPreguntas = {
  plazaId: 'plaza-san-martin',
  preguntas: [
    {
      id: 'pregunta-1',
      texto: '¿Qué árbol ornamental se encuentra en la Plaza San Martín?',
      opciones: [
        { texto: 'Eucalipto', esCorrecta: false },
        { texto: 'Plátano', esCorrecta: true },
        { texto: 'Pino', esCorrecta: false },
        { texto: 'Roble', esCorrecta: false }
      ],
      explicacion: 'El Plátano (Platanus hispanica) es un árbol ornamental muy común en la Plaza San Martín, apreciado por la sombra que proporciona durante el verano.'
    },
    {
      id: 'pregunta-2',
      texto: '¿Qué tipo de flores rodean la fuente central de la Plaza San Martín?',
      opciones: [
        { texto: 'Tulipanes', esCorrecta: false },
        { texto: 'Margaritas', esCorrecta: false },
        { texto: 'Rosales', esCorrecta: true },
        { texto: 'Girasoles', esCorrecta: false }
      ],
      explicacion: 'Los rosales son las flores decorativas que rodean la fuente central de la Plaza San Martín, aportando color y belleza al espacio.'
    },
    {
      id: 'pregunta-3',
      texto: '¿A quién honra la Plaza San Martín?',
      opciones: [
        { texto: 'Al General José de San Martín', esCorrecta: true },
        { texto: 'A Manuel Belgrano', esCorrecta: false },
        { texto: 'A Domingo Faustino Sarmiento', esCorrecta: false },
        { texto: 'A Juan Bautista Alberdi', esCorrecta: false }
      ],
      explicacion: 'La Plaza San Martín honra al General José de San Martín, héroe de la independencia argentina y libertador de Argentina, Chile y Perú.'
    },
    {
      id: 'pregunta-4',
      texto: '¿Cuánto tiempo pueden vivir los plátanos de la Plaza San Martín?',
      opciones: [
        { texto: 'Menos de 20 años', esCorrecta: false },
        { texto: 'Entre 30 y 50 años', esCorrecta: false },
        { texto: 'Entre 60 y 90 años', esCorrecta: false },
        { texto: 'Más de 100 años', esCorrecta: true }
      ],
      explicacion: 'Los plátanos son árboles longevos que pueden vivir más de 100 años, siendo muy resistentes a la contaminación urbana.'
    },
    {
      id: 'pregunta-5',
      texto: '¿Qué característica destaca de los plátanos en la plaza?',
      opciones: [
        { texto: 'Sus frutos comestibles', esCorrecta: false },
        { texto: 'Su capacidad para purificar el aire', esCorrecta: false },
        { texto: 'La sombra que proporcionan', esCorrecta: true },
        { texto: 'Sus flores aromáticas', esCorrecta: false }
      ],
      explicacion: 'Los plátanos son muy apreciados por la amplia sombra que proporcionan durante los calurosos veranos mendocinos, haciendo de la plaza un lugar agradable para los visitantes.'
    }
  ]
};

export default preguntasPlazaSanMartin;