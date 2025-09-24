import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza Independencia
const bancoPlazaIndependencia: BancoPreguntas = {
  plazaId: 'plaza-independencia',
  preguntas: [
    {
      id: 'pregunta-independencia-1',
      texto: '¿Cuál es el origen de la Tipuana tipu?',
      opciones: [
        { texto: 'Europa', esCorrecta: false },
        { texto: 'África', esCorrecta: false },
        { texto: 'Sudamérica', esCorrecta: true },
        { texto: 'Asia', esCorrecta: false }
      ],
      explicacion: 'La Tipuana tipu es originaria de Sudamérica, específicamente de Bolivia y el norte de Argentina.'
    },
    {
      id: 'pregunta-independencia-2',
      texto: '¿Qué característica tiene la Acacia visco?',
      opciones: [
        { texto: 'Flores rojas', esCorrecta: false },
        { texto: 'Flores amarillas', esCorrecta: true },
        { texto: 'Flores blancas', esCorrecta: false },
        { texto: 'Flores moradas', esCorrecta: false }
      ],
      explicacion: 'La Acacia visco presenta flores amarillas pequeñas agrupadas en cabezuelas.'
    },
    {
      id: 'pregunta-independencia-3',
      texto: '¿Qué tipo de hojas tiene el Cupresus sp.?',
      opciones: [
        { texto: 'Aciculares', esCorrecta: false },
        { texto: 'Escamosas', esCorrecta: true },
        { texto: 'Lanceoladas', esCorrecta: false },
        { texto: 'Bipinnadas', esCorrecta: false }
      ],
      explicacion: 'Los cipreses tienen hojas escamosas, pequeñas y superpuestas que cubren completamente las ramillas.'
    },
    {
      id: 'pregunta-independencia-4',
      texto: '¿Cuál es el nombre común del Vitex agnus-castus?',
      opciones: [
        { texto: 'Sauce llorón', esCorrecta: false },
        { texto: 'Sauzgatillo', esCorrecta: true },
        { texto: 'Fresno', esCorrecta: false },
        { texto: 'Abedul', esCorrecta: false }
      ],
      explicacion: 'El Vitex agnus-castus es conocido comúnmente como sauzgatillo o árbol casto.'
    },
    {
      id: 'pregunta-independencia-5',
      texto: '¿Para qué se utilizan principalmente los árboles de Eucalyptus sp.?',
      opciones: [
        { texto: 'Producción de papel', esCorrecta: true },
        { texto: 'Extracción de aceites esenciales', esCorrecta: false },
        { texto: 'Fabricación de muebles finos', esCorrecta: false },
        { texto: 'Alimento para ganado', esCorrecta: false }
      ],
      explicacion: 'Los eucaliptos son ampliamente utilizados en la industria papelera debido a su rápido crecimiento y fibra de celulosa.'
    },
    {
      id: 'pregunta-independencia-6',
      texto: '¿Qué tipo de fruto produce la Morus nigra?',
      opciones: [
        { texto: 'Vaina', esCorrecta: false },
        { texto: 'Drupa', esCorrecta: false },
        { texto: 'Mora compuesta', esCorrecta: true },
        { texto: 'Cápsula', esCorrecta: false }
      ],
      explicacion: 'La Morus nigra (morera negra) produce un fruto conocido como mora, que es en realidad una infrutescencia formada por pequeños drupéolos.'
    },
    {
      id: 'pregunta-independencia-7',
      texto: '¿Qué características posee la madera de la Robinia pseudoacacia?',
      opciones: [
        { texto: 'Blanda y flexible', esCorrecta: false },
        { texto: 'Dura y resistente a la pudrición', esCorrecta: true },
        { texto: 'Frágil y quebradiza', esCorrecta: false },
        { texto: 'Ligera y porosa', esCorrecta: false }
      ],
      explicacion: 'La Robinia pseudoacacia (acacia blanca) tiene una madera muy dura y resistente a la pudrición, utilizada en exteriores y construcciones.'
    },
    {
      id: 'pregunta-independencia-8',
      texto: '¿Qué altura puede alcanzar el Cedrus deodara?',
      opciones: [
        { texto: '5-10 metros', esCorrecta: false },
        { texto: '10-20 metros', esCorrecta: false },
        { texto: '20-30 metros', esCorrecta: false },
        { texto: '30-50 metros', esCorrecta: true }
      ],
      explicacion: 'El Cedrus deodara puede alcanzar entre 30 y 50 metros de altura en condiciones óptimas, siendo uno de los cedros más altos.'
    },
    {
      id: 'pregunta-independencia-9',
      texto: '¿Qué tipo de hojas presenta el Quercus suber?',
      opciones: [
        { texto: 'Perennes y coriáceas', esCorrecta: true },
        { texto: 'Caducas y lobuladas', esCorrecta: false },
        { texto: 'Aciculares', esCorrecta: false },
        { texto: 'Compuestas y pinnadas', esCorrecta: false }
      ],
      explicacion: 'El Quercus suber (alcornoque) tiene hojas perennes, coriáceas, ovales y dentadas, que permanecen en el árbol durante varios años.'
    },
    {
      id: 'pregunta-independencia-10',
      texto: '¿Por qué es importante la Plaza Independencia para Mendoza?',
      opciones: [
        { texto: 'Por ser la plaza más antigua', esCorrecta: false },
        { texto: 'Por ser la plaza principal diseñada post-terremoto', esCorrecta: true },
        { texto: 'Por tener los árboles más altos', esCorrecta: false },
        { texto: 'Por estar en la periferia de la ciudad', esCorrecta: false }
      ],
      explicacion: 'La Plaza Independencia es la plaza principal de Mendoza, diseñada después del devastador terremoto de 1861 que destruyó la ciudad original.'
    }
  ]
};

export default bancoPlazaIndependencia;