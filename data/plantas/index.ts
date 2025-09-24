import { Planta, EmojiReferencia } from '../types';
import { getPlantaImagen } from '../imagenes';

// Catálogo de plantas
const plantas: Planta[] = [
  {
    id: '1',
    atributos: {
      nombre: 'Viscote',
      nombreCientifico: 'Acacia visco',
      descripcionesMultilingue: {
        es: 'Se encuentra en las plazas Independencia, Chile y España. Es un árbol que llega a medir 6-12 m de altura. Hojas alternas bipinnadas. Flores amarillas pequeñas agrupadas en cabezuelas. Su fruto es una vaina glabra, delgada, de color castaño, dehiscente (se abre al madurar). Perteneciente a la familia Fabáceas.',
        en: 'Found in Independence, Chile, and Spain squares. It\'s a tree that grows to 6-12 m tall. Alternate bipinnate leaves. Small yellow flowers clustered in heads. Its fruit is a glabrous, thin, brown pod that splits open when ripe. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Naturalizada,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.UsoEconomico
      ]
    }
  },
  {
    id: '2',
    atributos: {
      nombre: 'Acacia Negra',
      nombreCientifico: 'Acacia melanoxylon',
      descripcionesMultilingue: {
        es: 'Se ubica en las plazas España y San Martín. Es un árbol que mide en promedio 8 a 15 m de altura, pudiendo alcanzar los 45 m de altura. Hojas alternas bipinnadas que luego caen quedando reemplazadas por filodios (pecíolo dilatado, cumple la función fotosintética). Flores amarillo pálido pequeñas agrupadas en cabezuelas. Su fruto es una vaina pardo rojiza. Perteneciente a la familia Fabáceas.',
        en: 'Located in Spain and San Martín squares. It\'s a tree that averages 8-15 m in height, potentially reaching 45 m. Alternate bipinnate leaves that later fall and are replaced by phyllodes (dilated petiole that performs photosynthetic function). Small pale yellow flowers grouped in heads. Its fruit is a reddish-brown pod. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('2'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico
      ]
    }
  },
  {
    id: '3',
    atributos: {
      nombre: 'Arbol del Cielo',
      nombreCientifico: 'Ailanthus altissima',
      descripcionesMultilingue: {
        es: 'Se ubica en la plaza Independencia. Es un árbol que alcanza entre 17 hasta 27 m de altura. Hojas grandes compuestas pinnadas, con nectarios en la base del foliolo. Flores unisexuales. Presenta raíces gemíferas. Su fruto es una sámara. Perteneciente a la familia Simarubáceas.',
        en: 'Located in Independence Square. It\'s a tree that reaches between 17 to 27 m in height. Large compound pinnate leaves, with nectaries at the base of the leaflet. Unisexual flowers. It has root suckers. Its fruit is a samara. Belongs to the Simaroubaceae family.'
      },
      imagenPath: getPlantaImagen('3'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico
      ]
    }
  },
    {
    id: '4',
    atributos: {
      nombre: 'Falso Castaño',
      nombreCientifico: 'Aesculus hippocastanum',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza España. Es un árbol con grandes yemas, hojas opuestas y palmadas, caducas. Sus flores son blancas, grandes y se agrupan en racimos. El fruto es una cápsula de envoltorio espinoso; no se debe ingerir su semilla por contener un tóxico llamado esculina. Pertenece a la familia Hipocastanáceas.',
        en: 'Located in Spain square. It\'s a tree with large buds, opposite and palmate leaves, deciduous. Its flowers are white, large, and grouped in clusters. The fruit is a spiny capsule; its seed should not be ingested as it contains a toxin called esculin. Belongs to the Hippocastanaceae family.'
      },
      imagenPath: getPlantaImagen('4'),
      referencias: [
        EmojiReferencia.Exotica
      ]
    }
  },
  {
    id: '5',
    atributos: {
      nombre: 'Araucaria Austrailiana',
      nombreCientifico: 'Araucaria bidwilli',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia y San Martín. Es un árbol de aspectoaparasolado, puede conservar sus ramas inferiores, lo cual lo distingue de otras especies de este género que desraman naturalmente sus ramas inferiores. Puede crecer hasta 50 m de alto. Posee estróbilos (piñas) muy grandes. Perteneciente a la familia Araucariáceas.',
        en: 'Located in Independence and San Martín squares. It\'s a tree with an umbrella-like appearance, it can retain its lower branches, which distinguishes it from other species of this genus that naturally shed their lower branches. It can grow up to 50 m tall. It has very large strobili (cones). Belongs to the Araucariaceae family.'
      },
      imagenPath: getPlantaImagen('5'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.Naturalizada
      ]
    }
  },{
    id: '6',
    atributos: {
      nombre: 'Boj',
      nombreCientifico: 'Buxus sp',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Italia e Independencia. Es un arbusto siempre verde de crecimiento lento y muy longevo. Hojas simples, coriáceas (duras), persistentes. Flores pequeñas, unisexuales, sin pétalos, poco llamativas. Su fruto es una cápsula. Perteneciente a la familia Buxáceas',
        en: 'Located in Italy and Independence squares. It\'s a slow-growing and very long-lived evergreen shrub. Simple, leathery (hard), persistent leaves. Small, unisexual flowers, without petals, not very showy. Its fruit is a capsule. Belongs to the Buxaceae family.'
      },
      imagenPath: getPlantaImagen('6'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico
      ]
    }
  },{
    id: '7',
    atributos: {
      nombre: 'Casuarina',
      nombreCientifico: 'Casuarina cunninghamiana',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, España e Italia. Es un árbol con aspecto de pino, con pequeñas ramas fotosintéticas con nudos articulados confundibles con “agujas” de pino. Sus hojas verdaderas se asemejan a escamas y se disponen en forma verticilada. Posee flores masculinas y femeninas, las primeras en espigas terminales y las segundas en inflorescencias con forma de estróbilo pequeño, axilares. Su fruto es una sámara. Perteneciente a la familia Casuarináceas',
        en: 'Located in Independence, Spain and Italy squares. It\'s a tree with a pine-like appearance, with small photosynthetic branches with articulated nodes that can be confused with pine "needles". Its true leaves resemble scales and are arranged in a whorled pattern. It has male and female flowers, the former in terminal spikes and the latter in small, axillary strobilus-shaped inflorescences. Its fruit is a samara. Belongs to the Casuarinaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteSueloSalino
      ]
    }
  },{
    id: '8',
    atributos: {
      nombre: 'Cedro del Himalaya',
      nombreCientifico: 'Cedrus deodara',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile, Italia, España y San Martín. Es un árbol perenne que puede alcanzar 40-50 m de altura. Hojas menores a 5 cm de largo con forma de agujas, agrupadas en braquiblastos, de color verde o verde azulado. Sus estróbilos (piñas) se desarman naturalmente para dejar caer sus semillas, las cuales germinan solas. Perteneciente a la familia Pináeas.',
        en: 'Located in square Independence, Chile, Italy, Spain and San Martín. It\'s a perennial tree that can reach 40-50 m in height. Leaves less than 5 cm long with needle-like shapes, grouped in braquiblasts, green or bluish-green in color. Its strobili (cones) disassemble naturally to drop their seeds, which germinate on their own. Belongs to the family Pinaceae.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSueloSalino
      ]
    }
  },{
    id: '9',
    atributos: {
      nombre: 'Palao Borracho',
      nombreCientifico: 'Ceiba speciosa y C. chodatii',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile y San Martín. Es un árbol de hoja caduca, espinoso, de corteza verde. Puede alcanzar 10-20 m de altura. Tronco ensanchado en su tercio inferior para almacenar agua en tiempos de sequía. Flores vistosas rosadas (C. speciosa) o blancas (C. chodatii). Su fruto es una cápsula, con largos pelos sedosos en su interior. Perteneciente a la familia Bombacáceas',
        en: 'Located in square Independence, Chile and San Martín. It\'s a deciduous tree, spiny, with green bark. It can reach 10-20 m in height. The trunk is swollen in its lower third to store water in times of drought. Showy pink flowers (C. speciosa) or white (C. chodatii). Its fruit is a capsule, with long silky hairs inside. Belongs to the Bombacaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Naturalizada
      ]
    }
  },{
    id: '10',
    atributos: {
      nombre: 'Árbol de Judea',
      nombreCientifico: 'Cercis siliquastrum',
      descripcionesMultilingue: {
        es: 'Se encuentra en las plazas Chile y España. Es un árbol caducifolio de talla pequeña, cuya altura se sitúa entre los 4 y 6 m. El tronco es de madera lisa y clara, tornándose tortuosa y negra con la edad. Su comaes abierta e irregular. Perteneciente a la familia Fabáceas.',
        en: 'Found in Chile and Spain squares. It\'s a small deciduous tree, whose height ranges between 4 and 6 m. The trunk is made of smooth, light wood, becoming twisted and black with age. Its crown is open and irregular. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica
      ]
    }
  },{
    id: '11',
    atributos: {
      nombre: 'Ceibo',
      nombreCientifico: 'Erythrina crista-galli',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile, Italia y San Martín. Es un árbol de porte mediano que puede alcanzar entre 5 a 8 m de altura, llegando raramente hasta los 20 m y con un diámetro de tronco de más de 50 cm. El tronco es tortuoso e irregular, con ramas espinosas que crecen de forma desordenada y mueren tras la floración; las hojas son caducas, compuestas de tres láminas oblongo-lanceoladas con textura coriácea. Perteneciente a la familia Fabáceas.',
        en: 'Located in square Independence, Chile, Italy and San Martín. It\'s a medium-sized tree that can reach between 5 and 8 m in height, rarely reaching up to 20 m, with a trunk diameter of more than 50 cm. The trunk is twisted and irregular, with spiny branches that grow in a disorderly manner and die after flowering; the leaves are deciduous, composed of three oblong-lanceolate leaflets with a leathery texture. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Naturalizada
      ]
    }
  },{
    id: '12',
    atributos: {
      nombre: 'Cipres',
      nombreCientifico: 'Cupressus sp',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Italia y España. Son árboles de hoja perenne, pueden alcanzar los 20 m de altura con un diámetro aproximado de unos 60 cm y porte es piramidal. Poseen un tronco recto y de corteza delgada en la que se forman fisuras longitudinales. Perteneciente a la familia Cupresáceas.',
        en: 'Located in square Independence, Italy and Spain. They are evergreen trees that can reach 20 m in height with an approximate diameter of about 60 cm and a pyramidal shape. They have a straight trunk with thin bark that forms longitudinal fissures. Belongs to the Cupressaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '13',
    atributos: {
      nombre: 'Evonimo',
      nombreCientifico: 'Evonimus japonicus',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Italia y España. Es un arbusto perenne o pequeño árbol que alcanza 2-8 m de altura; las hojas son ovaladas, de 3-7 cm de largo, finamente serradas. Las flores son discretas, de color verdoso-blanco de 5 mm de diámetro; no se recomienda su ingesta porque puede ser perjudicial. Perteneciente a la familia Celastráceas.',
        en: 'Located in square Independence, Italy and Spain. It\'s a perennial shrub or small tree that reaches 2-8 m in height; the leaves are oval, 3-7 cm long, and finely serrated. The flowers are inconspicuous, greenish-white in color, and 5 mm in diameter; not recommended for consumption as it can be harmful. Belongs to the Celastraceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSueloSalino,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '14',
    atributos: {
      nombre: 'Acacia de tres Espinas',
      nombreCientifico: 'Gleditsia triacanthos',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile y España. Es un árbol de crecimiento rápido que puede llegar hasta unos 20-30 m de altura. Las hojas, pinnadas, son muy grandes (hasta 40 cm de largo), estipuladas, con pecíolo de 3-5 cm. Tienen 8-20 pares de folíolos de 8-35 por 3-11 mm, oblongos u oblongo-elípticos; se caracteriza por presentar la vaina de sus semillas una pulpa dulce, cuyo sabor y textura recuerda a la miel. Perteneciente a la familia Fabáceas.',
        en: 'Located in square Independence, Chile and Spain. It\'s a fast-growing tree that can reach between 20 and 30 m in height. The leaves, pinnate, are very large (up to 40 cm long), stipulate, with a petiole of 3-5 cm. They have 8-20 pairs of leaflets measuring 8-35 by 3-11 mm, oblong or oblong-elliptical; it is characterized by having a sweet pulp in its seed pod, whose flavor and texture resemble honey. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSueloSalino,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '15',
    atributos: {
      nombre: 'Parasol Chino',
      nombreCientifico: 'Firmiana Simplex',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Chile, Italia y España. Es un árbol de hoja caduca que alcanza unos 15 metros de alto con la corteza verde lisa, grandes hojas como las del arce y ramilletes de florecillas amarillo verdoso en primavera. Perteneciente a la familia Malváceas',
        en: 'Located in square Chile, Italy and Spain. It\'s a deciduous tree that reaches about 15 meters tall with smooth green bark, large maple-like leaves, and clusters of yellow-green flowers in spring. Belongs to the Malvaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSueloSalino,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '16',
    atributos: {
      nombre: 'Fresno',
      nombreCientifico: 'Fraxinus excelsior y F. pennsylvanica',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Italia y España. Son árboles que pueden medir desde los 15 hasta los 20 metros de altura, de tronco recto y cilíndrico, con amplia copa; las semillas están contenidas en una sámara. Pertenecientes a la familia Oleáceas.',
        en: 'Located in square Independence, Italy and Spain. They are trees that can measure from 15 to 20 meters in height, with a straight and cylindrical trunk, and a wide crown; the seeds are contained in a samara. Belongs to the Oleaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '17',
    atributos: {
      nombre: 'Jacaranda',
      nombreCientifico: 'Jacaranda mimosifolia',
      descripcionesMultilingue: {
        es: 'Se ubican en plaza Independencia, Chile y San Martín. Es un árbol maderable que puede medir de 12 a 15 metros de altura, su copa suele presentar forma irregular. Las flores grandes y vistosas se agrupan en racimos terminales y tienen forma de tubo retorcido. El fruto es una cápsula plana que se abre al madurar y contiene semillas aladas. Es sensible a la falta de agua y temperaturas inferiores a 0°C prolongadas, tampoco tolera suelos salinos. Perteneciente a la familia Bignoniáceas',
        en: 'Located in Independence, Chile and San Martín squares. It\'s a timber tree that can measure 12 to 15 meters in height, its crown usually has an irregular shape. The large and showy flowers are grouped in terminal clusters and have a twisted tube shape. The fruit is a flat capsule that opens when ripe and contains winged seeds. It is sensitive to lack of water and prolonged temperatures below 0°C, nor does it tolerate saline soils. Belongs to the Bignoniaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico
      ]
    }
  },{
    id: '18',
    atributos: {
      nombre: 'ÁRbol de Júpiter',
      nombreCientifico: 'Lagerstroemia indica',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza España. Es un árbol o arbusto caducifolio que habitualmente mide de 2 a 8 m, llegando incluso hasta los 15 m aunque tarda muchos años en tener esta presencia tan significativa; con el tronco retorcido y la copa redondeada. Perteneciente a la familia Litráceas',
        en: 'Located in Spain square. It\'s a deciduous tree or shrub that usually measures 2 to 8 m, even reaching up to 15 m although it takes many years to have this significant presence; with a twisted trunk and rounded crown. Belongs to the Lythraceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSueloSalino,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '19',
    atributos: {
      nombre: 'Ligustro',
      nombreCientifico: 'Ligustrum lucidum',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, San Martín, España, Italia y Chile. Es un árbol perennifolio, de 3 a 8 m y hasta más de 15 m de altura. Las hojas son opuestas, verdes oscuras, de 5 a 15 cm de largo y 3 a 8 cm de ancho; los frutos son bayas globosas de 0,6-1 cm, negruzcas azuladas, brillantes. No se recomienda su ingesta porque puede ser perjudicial. Perteneciente a la familia Oleáceas.',
        en: 'Located in Independence, San Martín, Spain, Italy and Chile squares. It\'s a perennial tree, 3 to 8 m and up to more than 15 m in height. The leaves are opposite, dark green, 5 to 15 cm long and 3 to 8 cm wide; the fruits are globular berries of 0.6-1 cm, bluish black, shiny. Its ingestion is not recommended as it can be harmful. Belongs to the Oleaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '20',
    atributos: {
      nombre: 'Liquidambar Americano',
      nombreCientifico: 'Liquidambar styraciflua',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Chile, Italia y España. Es un árbol medio a grande, de 20 a 35 m (excepcionalmente 41 m), con un tronco de hasta 1 m (incluso más de 2) de diámetro, ramificado desde la base con ramas más o menos patentes. Perteneciente a la familia Hamamelidáceas.',
        en: 'Located in square Chile, Italy and Spain. It\'s a medium to large tree, 20 to 35 m (exceptionally 41 m), with a trunk up to 1 m (even more than 2) in diameter, branched from the base with more or less patent branches. Belongs to the Hamamelidaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '21',
    atributos: {
      nombre: 'Paraíso',
      nombreCientifico: 'Melia azedarach',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia. Es un árbol asiático, maderable, que puede alcanzar los 15 metros de altura en promedio, de copa globosa y frondosa, sus hojas son alternas, grandes y compuestas. Es resistente a plagas y enfermedades. Las flores se agrupan en racimos y los frutos, de color amarillo claro, contiene principios tóxicos (triterpenoides), por lo cual no debe consumirse. Perteneciente a la familia Meliáceas',
        en: 'Located in square Independence. It\'s a timber tree from Asia that can reach 15 meters in height on average, with a globular and leafy crown, its leaves are alternate, large and compound. It is resistant to pests and diseases. The flowers are grouped in clusters and the fruits, light yellow in color, contain toxic principles (triterpenoids), so they should not be consumed. Belongs to the Meliaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.Naturalizada
      ]
    }
  },{
    id: '22',
    atributos: {
      nombre: 'Morera',
      nombreCientifico: 'Morus alba y M. nigra',
      descripcionesMultilingue: {
        es: 'Se ubican en plaza Independencia, Chile, Italia y San Martín. Son árboles de hasta 15 m de altura, con ramas jóvenes grisáceas. Su fruto, la mora, es comestible. Su sabor es más o menos dulce y puede ser ácido. Su aroma es escaso o muy suave. Pertenecientes a la familia Moráceas',
        en: 'Located in Independence, Chile, Italy and San Martín squares. They are trees up to 15 m tall, with young grayish branches. Its fruit, the mulberry, is edible. Its flavor is more or less sweet and can be acidic. Its aroma is scarce or very mild. Belongs to the Moraceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '23',
    atributos: {
      nombre: 'Adelfa',
      nombreCientifico: 'Nerium oleander',
      descripcionesMultilingue: {
        es: 'Se ubican en plaza Independencia y España. Son árboles o arbustos hasta de 3-4 m de altura, perennifolios; las hojas son linear-lanceoladas o estrechamente elípticas, verticiladas en grupos de 3, de 0,5-2 por 10 40 cm, con los nervios muy marcados, pecioladas, glabras; la ingesta de sus hojas o tallos y el contacto de su látex con alguna de las mucosas es perjudicial. Perteneciente a la familia Apocináceas.',
        en: 'Located in square Independence and Spain. They are trees or shrubs up to 3-4 m in height, evergreen; the leaves are linear-lanceolate or narrowly elliptical, whorled in groups of 3, 0.5-2 by 10-40 cm, with very marked veins, petiolate, glabrous; the ingestion of their leaves or stems and the contact of their latex with any mucous membranes is harmful. Belongs to the family Apocynaceae.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSueloSalino,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '24',
    atributos: {
      nombre: 'Pino del Himalaya',
      nombreCientifico: 'Pinus griffithii',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia y Chile. Es un árbol perennifolio, que puede alcanzar 50 m de altura, con copa ancha y piramidal; posee una corteza lisa de color gris marrón que se resquebraja con la edad en anchas placas. Perteneciente a la familia Pináceas',
        en: 'Located in square Independence and Chile. It\'s a perennial tree that can reach 50 m in height, with a wide and pyramidal crown; it has a smooth bark of gray-brown color that cracks with age into wide plates. Belongs to the Pinaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSueloSalino
      ]
    }
  },{
    id: '25',
    atributos: {
      nombre: 'Azarero',
      nombreCientifico: 'Pittosporum tobira',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, España y San Martín. Es un arbusto de hasta 7 m de alto. Hojas agrupadas en los extremos de las ramas, simples, desde oblongas a espatuladas, con el ápice redondeado o escotado, lampiñas, lisas, con el nervio medio bien marcado como una raya amarilla en el haz; no se recomienda su ingesta porque puede ser perjudicial. Perteneciente a la familia Pitosporáceas.',
        en: 'Located in square Independence, Spain and San Martín. It\'s a shrub up to 7 m tall. Leaves grouped at the ends of the branches, simple, from oblong to spatulate, with a rounded or notched apex, glabrous, smooth, with the midrib well marked like a yellow stripe on the upper side; not recommended for consumption because it can be harmful. Belongs to the Pitosporaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteSueloSalino
      ]
    }
  },{
    id: '26',
    atributos: {
      nombre: 'Plátano',
      nombreCientifico: 'Platanus x acerifolia',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza San Martín. Es un árbol monoico, caducifolio de ramas abiertas y amplia copa. Su corteza, de color ceniciento o verdoso, castaño en los troncos viejos, se desprende en placas escamosas que dejan al descubierto manchas irregulares amarillentas o blanquecinas de la corteza interna. Perteneciente a la familia Platanáceas',
        en: 'Located in square San Martín. It\'s a monoecious tree, deciduous with open branches and a wide crown. Its bark, grayish or greenish in color, brown on old trunks, peels off in scaly plates that expose irregular yellowish or whitish patches of the inner bark. Belongs to the Platanaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteFrio
      ]
    }
  },{
    id: '27',
    atributos: {
      nombre: 'Palma Fénix',
      nombreCientifico: 'Phoenix canariensis',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile, Italia y San Martín. Es una palmera de gran porte, su tronco no ramificado se denomina “estípite”, queda marcado por las cicatrices de las hojas, las cuales se agrupan como manojo en el ápice de la planta, pudiendo medir de 5 a 6 m de longitud. Puede alcanzar los 10-13 m de alto y un tronco de 50 cm a 1 m de diámetro. Perteneciente a la familia Arecáceas',
        en: 'Located in square Independence, Chile, Italy and San Martín. It\'s a large palm tree, its unbranched trunk is called “stipe”, marked by the scars of the leaves, which are grouped like a bundle at the apex of the plant, measuring 5 to 6 m in length. It can reach 10-13 m in height and a trunk diameter of 50 cm to 1 m. Belongs to the Arecaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteSueloSalino,
      ]
    }
  },{
    id: '28',
    atributos: {
      nombre: 'Granado',
      nombreCientifico: 'Punica granatum',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Chile, Italia, España y San Martín. Es un árbol frutal de hasta 5 m de altura, que puede desarrollarse de forma arbustiva, caducifolio, más o menos espinoso y muy ramificado. Tronco recto, con la corteza resquebrajada y ramas opuestas, patentes; las jóvenes tetrágonas y a veces péndulas. Perteneciente a la familia Litráceas.',
        en: 'Located in square Chile, Italy, Spain and San Martín. It\'s a fruit tree up to 5 m tall, which can develop in a shrubby form, deciduous, more or less spiny and very branched. Straight trunk, with cracked bark and opposite, patent branches; the young ones are tetragonal and sometimes pendulous. Belongs to the family Lythraceae.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '29',
    atributos: {
      nombre: 'Falsa Acacia',
      nombreCientifico: 'Robinia pseudoacacia',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile y San Martín. Es un árbol de follaje caducifolio, de unos 25 m de altura con un tronco de diámetro inferior al metro -excepcionalmente hasta 50 m de altura y 16 dm de diámetro en muy viejos individuos- con una espesa corteza negruzca profundamente fisurada; no se recomienda su ingesta porque puede ser perjudicial. Posee hojas compuestas con espinas en la base del pecíolo. Perteneciente a la familia Fabáceas',
        en: 'Located in square Independence, Chile and San Martín. It\'s a tree with deciduous foliage, about 25 m tall with a trunk diameter of less than one meter -exceptionally up to 50 m tall and 16 dm in diameter in very old individuals- with a thick dark brown deeply fissured bark; not recommended for consumption because it can be harmful. It has compound leaves with spines at the base of the petiole. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteFrio
      ]
    }
  },{
    id: '30',
    atributos: {
      nombre: 'Tilo',
      nombreCientifico: 'Tilia sp.',
      descripcionesMultilingue: {
        es: 'Se ubican en plaza Independencia, Chile e Italia. Son árboles de buen volumen de crecimiento y que llegan a vivir hasta 900 años, y alcanzan entre 20 y 40 m de altura, con fustes rectos de hasta un metro de diámetro, caducifolios. Las hojas son cordiformes, con borde aserrado, de hasta 20 cm de ancho, de color verde oscuro en el haz y verde claro plateado en el envés, fuertemente aromáticas. Las flores de este árbol son muy aromáticas, en forma de pequeños racimos amarillos con una bráctea alargada y presentan propiedades medicinales. Perteneciente a la familia Malváceas',
        en: ''
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteFrio
      ]
    }
  },{
    id: '31',
    atributos: {
      nombre: 'Sauzgatillo',
      nombreCientifico: 'Vitex angus-castus',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile, Italia, España y San Martín. Es un arbusto de ramas abundantes, mimbreñas, cuadrangulares y de corteza blanquecina; hojas digitadas con pecíolo muy largo y cinco o siete hojuelas lanceoladas; flores pequeñas y azules en racimos terminales, y fruto redondo, pequeño y negro. Perteneciente a la familia Lamiáceas.',
        en: 'Located in square Independence, Chile, Italy, Spain and San Martín. It\'s a shrub with abundant, square, whitish branches; digitated leaves with very long petioles and five or seven lanceolate leaflets; small blue flowers in terminal clusters, and round, small black fruit. Belongs to the Lamiaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteSequia,
        EmojiReferencia.ResistenteSueloSalino
      ]
    }
  },{
    id: '32',
    atributos: {
      nombre: 'Palmera China',
      nombreCientifico: 'Trachycarpus fortunei',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Chile e Italia. Es una palmera que alcanza hasta 12 m de altura, y queda recubierto (total o sólo la parte superior) por las vainas de las hojas caídas, lo que le da un aspecto "peludo"). Las hojas son palmadas, con un limbo de unos 50 cm de largo por 75 de ancho, con peciolos con los márgenes serrados y un poco más largos que el limbo. Perteneciente a la familia Arecáceas.',
        en: 'Located in square Chile e Italy. It\'s a palm tree that can reach up to 12 m in height, and is covered (either totally or just the upper part) by the sheaths of fallen leaves, giving it a "hairy" appearance. The leaves are palmate, with a blade about 50 cm long and 75 cm wide, with petioles that have serrated edges and are slightly longer than the blade. Belongs to the Arecaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.UsoEconomico,
        EmojiReferencia.ResistenteFrio,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '33',
    atributos: {
      nombre: 'Palmera Abanico',
      nombreCientifico: 'Washingtonia robusta y W. filiformis',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Italia y San Martín. Es una palmera con tronco robusto, esbelto y simple de hasta 35 metros de altura, engrosado en la base, revestido por los restos de las hojas ya secas que forman un característico aditamento, aunque desaparece con el tiempo; presenta hojas en abanico, con hilos blancos y largos en la juventud que desaparecen con la edad. Perteneciente a la familia Arecáceas. ',
        en: 'Located in square Independence, Italy and San Martín. It\'s a palm tree with a robust, slender, and simple trunk up to 35 meters tall, thickened at the base, covered by the remains of dried leaves that form a characteristic adornment, although it disappears over time; it has fan-shaped leaves, with long white threads in youth that disappear with age. Belongs to the Arecaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },{
    id: '33',
    atributos: {
      nombre: 'Tipa',
      nombreCientifico: 'Tipuana tipu',
      descripcionesMultilingue: {
        es: 'Se ubica en plaza Independencia, Chile, Italia y San Martín. Es un árbol de hasta 10 25 m de altura, de corteza gruesa, resquebrajada, de color pardo grisáceo. Hojas pinnadas caducas. Flores amarillas reunidas en racimos. Su fruto es una legumbre alada, semejante a una sámara, con una sola semilla en su interior. Especie característica de la Selva Tucumano-Oranense. Perteneciente a la familia Fabáceas.',
        en: 'Located in square Independence, Chile, Italy and San Martín. It\'s a tree up to 10-25 m tall, with thick, cracked bark of grayish-brown color. Deciduous pinnate leaves. Yellow flowers gathered in clusters. Its fruit is a winged legume, similar to a samara, with a single seed inside. A characteristic species of the Tucumano-Oranense Forest. Belongs to the Fabaceae family.'
      },
      imagenPath: getPlantaImagen('1'),
      referencias: [
        EmojiReferencia.Exotica,
        EmojiReferencia.ResistenteSequia
      ]
    }
  },
];

// Exportamos un objeto con todas las plantas indexadas por ID para acceso rápido
export const plantasPorId: Record<string, Planta> = {};
plantas.forEach(planta => {
  plantasPorId[planta.id] = planta;
});

export default plantas;