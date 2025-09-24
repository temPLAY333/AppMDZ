import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza España
const bancoPlazaEspana: BancoPreguntas = {
  plazaId: 'plaza-espana',
  preguntas: [
    {
      id: 'pregunta-espana-1',
      texto: '¿Cuál de estos árboles es originario de la región mediterránea?',
      opciones: [
        { texto: 'Jacaranda', esCorrecta: false },
        { texto: 'Granado', esCorrecta: true },
        { texto: 'Araucaria', esCorrecta: false },
        { texto: 'Cedro', esCorrecta: false }
      ],
      explicacion: 'El Granado (Punica granatum) es originario de la región mediterránea y se ha cultivado desde la antigüedad.'
    },
    {
      id: 'pregunta-espana-2',
      texto: '¿Qué árbol de la plaza España produce flores de color azul-violáceo?',
      opciones: [
        { texto: 'Jacaranda', esCorrecta: true },
        { texto: 'Palma Fénix', esCorrecta: false },
        { texto: 'Sauzgatillo', esCorrecta: false },
        { texto: 'Granado', esCorrecta: false }
      ],
      explicacion: 'La Jacaranda (Jacaranda mimosifolia) produce hermosas flores de color azul-violáceo durante su floración.'
    },
    {
      id: 'pregunta-espana-3',
      texto: '¿Qué planta de la Plaza España es conocida por su uso medicinal tradicional?',
      opciones: [
        { texto: 'Phoenix canariensis', esCorrecta: false },
        { texto: 'Vitex agnus-castus', esCorrecta: true },
        { texto: 'Platanus acerifolia', esCorrecta: false },
        { texto: 'Punica granatum', esCorrecta: false }
      ],
      explicacion: 'El Sauzgatillo (Vitex agnus-castus) ha sido utilizado tradicionalmente como planta medicinal para regular problemas hormonales.'
    },
    {
      id: 'pregunta-espana-4',
      texto: '¿Cuál de estas plantas produce frutos comestibles?',
      opciones: [
        { texto: 'Platanus acerifolia', esCorrecta: false },
        { texto: 'Hibiscus rosa-sinensis', esCorrecta: false },
        { texto: 'Punica granatum', esCorrecta: true },
        { texto: 'Phoenix canariensis', esCorrecta: false }
      ],
      explicacion: 'El Granado (Punica granatum) produce la fruta conocida como granada, que es comestible y muy apreciada por sus propiedades nutricionales.'
    },
    {
      id: 'pregunta-espana-5',
      texto: '¿Qué característica distingue a la Phoenix canariensis?',
      opciones: [
        { texto: 'Flores rojas brillantes', esCorrecta: false },
        { texto: 'Frutos en forma de piña', esCorrecta: false },
        { texto: 'Tronco delgado y flexible', esCorrecta: false },
        { texto: 'Hojas en forma de abanico', esCorrecta: true }
      ],
      explicacion: 'La Palma Fénix (Phoenix canariensis) se distingue por sus grandes hojas pinnadas que crecen en forma de abanico en la parte superior del tronco.'
    },
    {
      id: 'pregunta-espana-6',
      texto: '¿De qué región es nativo el Hibiscus rosa-sinensis?',
      opciones: [
        { texto: 'Europa', esCorrecta: false },
        { texto: 'África', esCorrecta: false },
        { texto: 'Asia tropical', esCorrecta: true },
        { texto: 'América del Sur', esCorrecta: false }
      ],
      explicacion: 'El Hibisco (Hibiscus rosa-sinensis) es nativo de Asia tropical, específicamente de regiones como China e India.'
    },
    {
      id: 'pregunta-espana-7',
      texto: '¿Qué árbol de la Plaza España es conocido por su sombra fresca?',
      opciones: [
        { texto: 'Platanus acerifolia', esCorrecta: true },
        { texto: 'Vitex agnus-castus', esCorrecta: false },
        { texto: 'Phoenix canariensis', esCorrecta: false },
        { texto: 'Hibiscus rosa-sinensis', esCorrecta: false }
      ],
      explicacion: 'El Plátano (Platanus acerifolia) es muy valorado en parques y plazas por la excelente sombra que proporciona gracias a su amplia copa.'
    },
    {
      id: 'pregunta-espana-8',
      texto: '¿Qué planta se caracteriza por sus hojas trilobuladas?',
      opciones: [
        { texto: 'Jacaranda mimosifolia', esCorrecta: false },
        { texto: 'Hibiscus rosa-sinensis', esCorrecta: true },
        { texto: 'Punica granatum', esCorrecta: false },
        { texto: 'Phoenix canariensis', esCorrecta: false }
      ],
      explicacion: 'El Hibisco (Hibiscus rosa-sinensis) presenta hojas con tres lóbulos bien definidos, especialmente en algunas variedades.'
    },
    {
      id: 'pregunta-espana-9',
      texto: '¿Qué caracteriza a la madera de Jacaranda?',
      opciones: [
        { texto: 'Es blanda y ligera', esCorrecta: false },
        { texto: 'Es muy resistente al fuego', esCorrecta: false },
        { texto: 'Es aromática y duradera', esCorrecta: true },
        { texto: 'Es flexible y elástica', esCorrecta: false }
      ],
      explicacion: 'La madera de Jacaranda es conocida por ser aromática, duradera y de buena calidad, utilizada en ebanistería fina.'
    },
    {
      id: 'pregunta-espana-10',
      texto: '¿Qué planta no es originaria de España pero lleva su nombre en la plaza?',
      opciones: [
        { texto: 'Punica granatum', esCorrecta: false },
        { texto: 'Vitex agnus-castus', esCorrecta: false },
        { texto: 'Jacaranda mimosifolia', esCorrecta: true },
        { texto: 'Platanus acerifolia', esCorrecta: false }
      ],
      explicacion: 'La Jacaranda es nativa de Sudamérica (principalmente Argentina, Bolivia y Brasil), a pesar de encontrarse en la Plaza España.'
    }
  ]
};

export default bancoPlazaEspana;