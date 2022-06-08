export default {
  global: {
    componenteFormativo:
      'Análisis y evaluación de aplicar <i>Blockchain</i> en esquemas de inversión',
    descripcionCurso:
      'El avance de <i>Blockchain</i> llegó para dar mayor dinamismo y autonomía a un sector gobernado por pocos, con la promesa en cuanto a trazabilidad, anonimato, inmutabilidad, interoperabilidad, seguridad y al ingenio de empresarios y aficionados, generando nuevas maneras de utilizarla. Una de ellas son los diferentes esquemas de inversión y cómo se han vinculado a la dinámica económica y financiera.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Esquemas de inversión',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Uso de los contratos inteligentes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inversiones en criptomonedas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Esquema de inversión Ponzi',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'BBVA. Educación Financiera. (2018). ¿Cómo funciona un esquema Ponzi? BBVA.',
      link:
        'https://www.bbva.com/es/como-funciona-un-sistema-ponzi-conocelo-para-protegerte/',
    },
    {
      referencia:
        'BBVA. (2022). 6 mitos y verdades sobre invertir en <i>Bitcoin</i> y criptomonedas. BBVA.',
      link:
        'https://www.bbva.mx/educacion-financiera/banca-digital/invertir-en-bitcoin.html',
    },
    {
      referencia:
        'Brandoni,  A. (2021), Invertir en <i>Blockchain</i>. Diferentes modelos. Trabajo de investigación. Universidad Nacional de Cuyo. Facultad de Ciencias Económicas.',
      link:
        'https://bdigital.uncu.edu.ar/objetos_digitales/16630/brandoni-fce.pdf',
    },
    {
      referencia:
        'Crypto News. (2022). ¿Qué es una oferta de <i>token</i> de seguridad (STO)? Crypto News.',
      link:
        'https://es.cryptonews.com/guias/que-es-una-oferta-de-token-de-seguridad-sto.htm',
    },
    {
      referencia:
        'Deloitte University Press. (2016). <i>Blockchain</i>. Enigma. Paradox Opportunity',
    },
    {
      referencia:
        'El Tiempo. (2021). ¿Qué son? y ¿para qué sirven los contratos inteligentes <i>Blockchain</i>? [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=oDNl9QbhFb0',
    },
    {
      referencia:
        'Esic. (2018). Contratos inteligentes: qué son, orígenes y principales aplicaciones. Esic.',
      link:
        'https://www.esic.edu/rethink/tecnologia/contratos-inteligentes-que-son-origenes-y-principales-aplicaciones',
    },
    {
      referencia: 'Esic. (2018). ¿Qué es una ICO de criptomoneda? Esic.',
      link:
        'https://www.esic.edu/rethink/comercial-y-ventas/que-es-una-ico-de-criptomoneda',
    },
    {
      referencia:
        '<i>Ethereum</i>.org. (2022). Introducción a los contratos inteligentes. <i>Ethereum</i>.org.',
      link: 'https://ethereum.org/es/developers/docs/smart-contracts/',
    },
    {
      referencia:
        '<i>Ethereum</i>.org. (2022). Lenguajes de contrato inteligente. <i>Ethereum</i>.org.',
      link:
        'https://ethereum.org/es/developers/docs/smart-contracts/languages/#solidity',
    },
    {
      referencia:
        'IBM. (2022). ¿Qué son los contratos inteligentes en <i>Blockchain</i>? IBM.',
      link: 'https://www.ibm.com/co-es/topics/smart-contracts',
    },
    {
      referencia:
        'IG. (2022). ¿Qué es el <i>trading</i> de CFD y cómo funciona? IG.',
      link:
        'https://www.ig.com/es/trading-de-cfd/que-es-el-trading-de-cfd-y-como-funciona',
    },
    {
      referencia: 'IG. (2022). ¿Qué es <i>Ethereum</i> y cómo funciona? IG.',
      link:
        'https://www.ig.com/es/ethereum-trading/que-es-ether-y-como-funciona',
    },
    {
      referencia:
        'Igartúa, T. (2018). Análisis de caso: fraude con Bitcoins en esquema Ponzi.  EDP University of Puerto Rico.',
      link:
        'http://prcrepository.org/xmlui/bitstream/handle/20.500.12475/1229/SEC%20vs.%20Trendon%20T.%20Shavers.pdf?sequence=1',
    },
    {
      referencia:
        'Mailteck. (2022). Smart contracts: la guía definitiva para principiantes. Mailteck.',
      link:
        'https://www.mailteck.com/smart-contracts-la-guia-definitiva-para-principiantes/',
    },
    {
      referencia:
        'Masiak, C. (2019). Initial coin offerings (ICOs): market cycles and relationship with <i>bitcoin</i> and ether. Small Business Economics 55(4), p. 1113-130.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracacademiconefile_A636960748',
    },
    {
      referencia:
        'Pinterest. (2022). Cómo diversificar tu portafolio cripto. Pinterest.',
      link: 'https://www.pinterest.es/pin/767863805211304081/',
    },
    {
      referencia:
        'Pronetwork. (2019). Oferta pública inicial de una criptomoneda. Pronetwork.',
      link:
        'https://www.pronetwork.mx/magazine/oferta-publica-inicial-de-una-criptomoneda/',
    },
  ],
  glosario: [
    {
      termino: 'Contratos inteligentes',
      significado:
        'Son programas que se almacenan en una cadena de bloques o <i>Blockchain</i>, y se ejecutan cuando se cumplen una serie de condiciones establecidas sin la intervención de un intermediario, por lo tanto, sus implicados obtienen los resultados de manera inmediata (IBM, 2022).',
    },
    {
      termino: 'Crowdsale',
      significado:
        'El acto de generar y ofrecer <i>tokens</i> que se estructura normalmente como un proceso de subasta a través de Internet, reduciendo los costes de transacción y estableciendo unas condiciones de gobernanza inmutables.',
    },
    {
      termino: 'Deflación',
      significado:
        'Es una contracción de la oferta monetaria en una economía, que puede provocar una bajada general de los precios de una economía, es decir, lo contrario a la inflación. O en otros términos, al reducirse la oferta monetaria genera la reducción de los precios, aumentando el valor de la moneda, lo cual incrementa su poder adquisitivo.',
    },
    {
      termino: 'Distributed Ledger Technology (DLT)',
      significado:
        'Tecnología de libro mayor distribuido, se puede definir la DLT como aquella tecnología que permite que grandes grupos de nodos en las redes del libro mayor distribuido se pongan de acuerdo y registren información sin necesidad de una autoridad central.',
    },
    {
      termino: 'Gas',
      significado:
        'Es el costo de llevar a cabo una o varias operaciones en la red <i>Ethereum</i>.',
    },

    {
      termino: '<i>Initial Coin Offering</i> (ICO)',
      significado:
        'La oferta inicial de moneda es una forma de financiación para las empresas (comúnmente usado en los startups), que sirve para recolectar fondos a través de <i>tokens</i> o criptomonedas creadas por ellas mismas (Economía, 2021).',
    },
    {
      termino: '<i>Initial Public Offering</i> (IPO)',
      significado:
        'Medio por el cual inversionistas aportan dinero a una empresa por primera vez y como contraparte adquieren un parte de las acciones de la empresa (Pronetwork, 2019).',
    },
    {
      termino: 'Moneda FIAT',
      significado:
        'Moneda digital amparada en dólares, euros o cualquier otra moneda legalmente reconocida por el gobierno. ',
    },
    {
      termino: 'Ripple',
      significado:
        'El libro mayor de XRP no opera bajo la tecnología <i>Blockchain</i>.',
    },
    {
      termino: 'RPCA',
      significado:
        'Es el algoritmo configurado por <i>Ethereum</i> para su operación.',
    },
    {
      termino: '<i>Security</i> <i>Token</i> Offering (STO)',
      significado:
        'La oferta de token de seguridad es un proceso donde un inversor intercambia dinero por monedas o <i>token</i> (estos representan su inversión); sin embargo, los <i>tokens</i> están vinculados a un activo (acciones, bonos, fideicomisos, entre otros) (Crypto News, 2022).',
    },
  ],
  complementario: [
    {
      tema: 'Esquemas de inversión',
      referencia:
        'Alvárez, E. (2021). El <i>Blockchain</i> como almacén de datos y registro de <i>tokens</i>. Universidad Pontificia.',
      tipo: 'PDF',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema: 'Uso de los contratos inteligentes',
      referencia:
        'Ramírez, V. (2019) Contratos inteligentes. Revista de Investigación en Tecnologías de la Información: RITI 7(14), p. 1-10.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001365438',
    },
    {
      tema: 'Uso de los contratos inteligentes',
      referencia:
        'El Tiempo. (2021). ¿Qué son? y ¿para qué sirven los contratos inteligentes <i>Blockchain</i>? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oDNl9QbhFb0',
    },
    {
      tema: 'Inversiones en criptomonedas',
      referencia:
        'Masiak, C. (2019). Initial coin offerings (ICOs): market cycles and relationship with <i>bitcoin</i> and ether. Small Business Economics 55(4), p. 1113-130.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracacademiconefile_A636960748',
    },
    {
      tema: 'Inversiones en criptomonedas',
      referencia:
        'Crypto Corner. (2019). ICO, IEO, STO, IPO and FREECO Explained | Crypto Jargon #13 [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=kEPFmjpMbe0&ab_channel=CryptoCorner',
    },
    {
      tema: 'Esquema de inversión Ponzi',
      referencia:
        'Igartúa, T. (2018). Análisis de caso: fraude con Bitcoins en esquema Ponzi.  EDP University of Puerto Rico.',
      tipo: 'Tesis de grado',
      link:
        'http://prcrepository.org/xmlui/bitstream/handle/20.500.12475/1229/SEC%20vs.%20Trendon%20T.%20Shavers.pdf?sequence=1',
    },
    {
      tema: 'Esquema de inversión Ponzi',
      referencia:
        'Corredor, D. (2020)¿Son las populares cadenas una puerta de acceso a las pirámides financieras tipo Ponzi? Un ejercicio experimental desde la economía del comportamiento. Universidad de La Salle.',
      tipo: 'Tesis de grado',
      link: 'https://ciencia.lasalle.edu.co/economia/1652/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
