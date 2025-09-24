import { BancoPreguntas } from '../types';

// Banco de preguntas para la Plaza San Martín
const bancoPlazaSanMartin: BancoPreguntas = {
  plazaId: 'plaza-san-martin',
  preguntas: [
    {
      id: 'pregunta-sanmartin-1',
      texto: '¿Qué tipo de árbol es el Viscote?',
      opciones: [
        { texto: 'Conífero', esCorrecta: false },
        { texto: 'Fabáceas', esCorrecta: true },
        { texto: 'Pináceas', esCorrecta: false },
        { texto: 'Rosáceas', esCorrecta: false }
      ],
      explicacion: 'El Viscote (Acacia visco) pertenece a la familia de las Fabáceas, caracterizada por su fruto en forma de vaina.'
    },
    {
      id: 'pregunta-sanmartin-2',
      texto: '¿Cuál es el nombre científico de los Rosales?',
      opciones: [
        { texto: 'Rosa canina', esCorrecta: false },
        { texto: 'Rosa centifolia', esCorrecta: false },
        { texto: 'Rosa sp.', esCorrecta: true },
        { texto: 'Rosa gallica', esCorrecta: false }
      ],
      explicacion: 'Rosa sp. es la nomenclatura científica que se utiliza para referirse al género Rosa cuando no se especifica la especie exacta.'
    }
    // Se pueden agregar más preguntas
  ]
};

export default bancoPlazaSanMartin;