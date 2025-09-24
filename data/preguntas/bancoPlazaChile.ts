import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza Chile
const bancoPlazaChile: BancoPreguntas = {
  plazaId: 'plaza-chile',
  preguntas: [
    {
      id: 'pregunta-chile-1',
      texto: '¿Qué color de corteza presenta el Cedrus deodara?',
      opciones: [
        { texto: 'Rojiza', esCorrecta: false },
        { texto: 'Gris-marrón', esCorrecta: true },
        { texto: 'Negra', esCorrecta: false },
        { texto: 'Amarilla', esCorrecta: false }
      ],
      explicacion: 'El Cedrus deodara tiene una corteza de color gris a marrón que se agrieta con la edad.'
    },
    {
      id: 'pregunta-chile-2',
      texto: '¿De qué región es originario el Pinus griffithi?',
      opciones: [
        { texto: 'América del Norte', esCorrecta: false },
        { texto: 'Europa', esCorrecta: false },
        { texto: 'Asia (Himalaya)', esCorrecta: true },
        { texto: 'Australia', esCorrecta: false }
      ],
      explicacion: 'El Pinus griffithi (ahora clasificado como Pinus wallichiana) es originario de la región del Himalaya en Asia.'
    },
    {
      id: 'pregunta-chile-3',
      texto: '¿Qué característica destaca del género Eucalyptus?',
      opciones: [
        { texto: 'Aroma mentolado', esCorrecta: true },
        { texto: 'Flores rojas brillantes', esCorrecta: false },
        { texto: 'Hojas siempre rojas', esCorrecta: false },
        { texto: 'Frutos comestibles', esCorrecta: false }
      ],
      explicacion: 'Los eucaliptos se caracterizan por el aroma mentolado de sus hojas debido a los aceites esenciales que contienen.'
    },
    {
      id: 'pregunta-chile-4',
      texto: '¿Qué tipo de hojas presenta el Cocculus laurifolius?',
      opciones: [
        { texto: 'Compuestas y pinnadas', esCorrecta: false },
        { texto: 'Simples y lanceoladas', esCorrecta: true },
        { texto: 'Escamosas', esCorrecta: false },
        { texto: 'Aciculares', esCorrecta: false }
      ],
      explicacion: 'El Cocculus laurifolius presenta hojas simples, brillantes y lanceoladas que recuerdan a las del laurel.'
    },
    {
      id: 'pregunta-chile-5',
      texto: '¿Para qué se utiliza tradicionalmente la madera del tilo (Tilia cordata)?',
      opciones: [
        { texto: 'Construcción pesada', esCorrecta: false },
        { texto: 'Instrumentos musicales', esCorrecta: true },
        { texto: 'Combustible', esCorrecta: false },
        { texto: 'Postes', esCorrecta: false }
      ],
      explicacion: 'La madera del tilo es apreciada en la fabricación de instrumentos musicales y tallas por ser ligera y no astillarse.'
    },
    {
      id: 'pregunta-chile-6',
      texto: '¿Qué altura puede alcanzar una Phoenix canariensis madura?',
      opciones: [
        { texto: '3-5 metros', esCorrecta: false },
        { texto: '5-8 metros', esCorrecta: false },
        { texto: '10-20 metros', esCorrecta: true },
        { texto: 'Más de 30 metros', esCorrecta: false }
      ],
      explicacion: 'La Phoenix canariensis (Palma canaria) puede alcanzar entre 10 y 20 metros de altura cuando es adulta.'
    },
    {
      id: 'pregunta-chile-7',
      texto: '¿Qué fruto produce el algarrobo (Neltuma sp.)?',
      opciones: [
        { texto: 'Bayas redondas', esCorrecta: false },
        { texto: 'Conos leñosos', esCorrecta: false },
        { texto: 'Vainas dulces', esCorrecta: true },
        { texto: 'Drupas carnosas', esCorrecta: false }
      ],
      explicacion: 'El algarrobo produce vainas o legumbres dulces que han sido utilizadas tradicionalmente como alimento.'
    },
    {
      id: 'pregunta-chile-8',
      texto: '¿Qué característica tiene el Ligustrum lucidum que lo hace problemático en algunos ecosistemas?',
      opciones: [
        { texto: 'Atrae insectos dañinos', esCorrecta: false },
        { texto: 'Es invasivo y desplaza especies nativas', esCorrecta: true },
        { texto: 'Produce toxinas en el suelo', esCorrecta: false },
        { texto: 'Consume mucha agua', esCorrecta: false }
      ],
      explicacion: 'El Ligustrum lucidum (ligustro) es considerado invasivo en muchas regiones por su capacidad de propagación y desplazamiento de especies nativas.'
    },
    {
      id: 'pregunta-chile-9',
      texto: '¿Qué uso medicinal tradicional tiene el Schinus sp. (aguaribay)?',
      opciones: [
        { texto: 'Tratamiento de problemas respiratorios', esCorrecta: true },
        { texto: 'Contra el dolor de muelas', esCorrecta: false },
        { texto: 'Para bajar la fiebre', esCorrecta: false },
        { texto: 'Como cicatrizante', esCorrecta: false }
      ],
      explicacion: 'El aguaribay ha sido utilizado tradicionalmente para tratar problemas respiratorios debido a sus propiedades balsámicas.'
    },
    {
      id: 'pregunta-chile-10',
      texto: '¿Qué característica distingue a la Gleditsia triacanthos?',
      opciones: [
        { texto: 'Sus grandes flores amarillas', esCorrecta: false },
        { texto: 'Sus largas espinas en el tronco', esCorrecta: true },
        { texto: 'Su corteza descamante', esCorrecta: false },
        { texto: 'Sus hojas siempre verdes', esCorrecta: false }
      ],
      explicacion: 'La Gleditsia triacanthos (acacia de tres espinas) se caracteriza por tener grandes espinas ramificadas en el tronco y ramas principales.'
    }
  ]
};

export default bancoPlazaChile;