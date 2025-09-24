import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza Italia
const bancoPlazaItalia: BancoPreguntas = {
  plazaId: 'plaza-italia',
  preguntas: [
    {
      id: 'pregunta-italia-1',
      texto: '¿Qué especie de palmera es la Trachycarpus fortunei?',
      opciones: [
        { texto: 'Palmera datilera', esCorrecta: false },
        { texto: 'Palmera de abanico china', esCorrecta: true },
        { texto: 'Palmera canaria', esCorrecta: false },
        { texto: 'Palmera real', esCorrecta: false }
      ],
      explicacion: 'Trachycarpus fortunei es comúnmente conocida como palmera de abanico china o palmito elevado, originaria de China central y oriental.'
    },
    {
      id: 'pregunta-italia-2',
      texto: '¿Cuál es la característica distintiva de la Casuarina cunninghamiana?',
      opciones: [
        { texto: 'Hojas anchas', esCorrecta: false },
        { texto: 'Ramas que parecen agujas de pino', esCorrecta: true },
        { texto: 'Flores vistosas', esCorrecta: false },
        { texto: 'Frutos comestibles', esCorrecta: false }
      ],
      explicacion: 'La Casuarina tiene ramas finas con articulaciones que se parecen a las agujas de los pinos, aunque botánicamente son muy diferentes.'
    },
    {
      id: 'pregunta-italia-3',
      texto: '¿Qué color de flor presenta la Erythrina crista-galli?',
      opciones: [
        { texto: 'Blanco', esCorrecta: false },
        { texto: 'Amarillo', esCorrecta: false },
        { texto: 'Rojo intenso', esCorrecta: true },
        { texto: 'Azul', esCorrecta: false }
      ],
      explicacion: 'La Erythrina crista-galli, conocida como ceibo o seibo, presenta flores de color rojo intenso muy características.'
    },
    {
      id: 'pregunta-italia-4',
      texto: '¿Para qué se utiliza principalmente el fruto del Liquidambar styraciflua?',
      opciones: [
        { texto: 'Consumo humano', esCorrecta: false },
        { texto: 'Extracción de resinas aromáticas', esCorrecta: true },
        { texto: 'Fabricación de tejidos', esCorrecta: false },
        { texto: 'Alimentación animal', esCorrecta: false }
      ],
      explicacion: 'Del Liquidambar se extrae una resina aromática utilizada en perfumería y medicina tradicional.'
    },
    {
      id: 'pregunta-italia-5',
      texto: '¿Qué característica tiene el Cedrus deodara que lo distingue?',
      opciones: [
        { texto: 'Hojas perennes y forma piramidal', esCorrecta: true },
        { texto: 'Tronco retorcido', esCorrecta: false },
        { texto: 'Flores vistosas', esCorrecta: false },
        { texto: 'Frutos carnosos', esCorrecta: false }
      ],
      explicacion: 'El Cedrus deodara o cedro del Himalaya se distingue por su forma piramidal y sus hojas perennes de color verde azulado.'
    },
    {
      id: 'pregunta-italia-6',
      texto: '¿De qué región es nativo el Phytolacca dioica (Ombú)?',
      opciones: [
        { texto: 'Europa', esCorrecta: false },
        { texto: 'Sudamérica', esCorrecta: true },
        { texto: 'Asia', esCorrecta: false },
        { texto: 'África', esCorrecta: false }
      ],
      explicacion: 'El Ombú es nativo de las regiones pampeanas de Sudamérica, principalmente Argentina, Uruguay y sur de Brasil.'
    },
    {
      id: 'pregunta-italia-7',
      texto: '¿Qué tipo de copa forma el Cupressus sp. (Ciprés)?',
      opciones: [
        { texto: 'Extendida y horizontal', esCorrecta: false },
        { texto: 'Irregular y asimétrica', esCorrecta: false },
        { texto: 'Cónica y estrecha', esCorrecta: true },
        { texto: 'Redondeada y densa', esCorrecta: false }
      ],
      explicacion: 'Los cipreses (Cupressus sp.) se caracterizan por formar copas cónicas y estrechas, con un perfil columnar muy distintivo.'
    },
    {
      id: 'pregunta-italia-8',
      texto: '¿Qué característica tiene la corteza del Brachychiton populneus?',
      opciones: [
        { texto: 'Rugosa y oscura', esCorrecta: false },
        { texto: 'Lisa y grisácea', esCorrecta: true },
        { texto: 'Rojiza y descamante', esCorrecta: false },
        { texto: 'Con espinas prominentes', esCorrecta: false }
      ],
      explicacion: 'El Brachychiton populneus, conocido como braquiquito, tiene una corteza lisa de color gris claro muy característica.'
    },
    {
      id: 'pregunta-italia-9',
      texto: '¿Qué color tienen los frutos maduros de la Phoenix canariensis?',
      opciones: [
        { texto: 'Verde', esCorrecta: false },
        { texto: 'Amarillo', esCorrecta: false },
        { texto: 'Naranja-rojizo', esCorrecta: true },
        { texto: 'Morado', esCorrecta: false }
      ],
      explicacion: 'La Palma Canaria produce dátiles de color naranja-rojizo cuando están maduros, aunque no son tan comestibles como los de otras especies.'
    },
    {
      id: 'pregunta-italia-10',
      texto: '¿Por qué se llama "Plaza Italia"?',
      opciones: [
        { texto: 'Por estar diseñada por un arquitecto italiano', esCorrecta: false },
        { texto: 'Por contener plantas nativas de Italia', esCorrecta: false },
        { texto: 'Por honrar a la comunidad italiana en Mendoza', esCorrecta: true },
        { texto: 'Por tener forma de bota italiana', esCorrecta: false }
      ],
      explicacion: 'La Plaza Italia fue nombrada en honor a la importante comunidad de inmigrantes italianos que se estableció en Mendoza y contribuyó significativamente a su desarrollo.'
    }
  ]
};

export default bancoPlazaItalia;