export default {
  global: {
    componenteFormativo: 'Ventas en el formato comercial',
    descripcionCurso:
      'Las  ventas comerciales se fundamentan principalmente en el desarrollo de estrategias y acciones promocionales diseñadas por la empresa u organización, con el ánimo de mejorar cada vez más sus resultados. Estas estrategias son comunes en la venta al por mayor de productos con mercados ya establecidos, particularmente en sectores como alimentos y textiles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Publicidad en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos y funciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de la publicidad en el punto de venta',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Promoción',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Evento promocional',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'El <i>stand</i>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Portafolio de productos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Los servicios como valor agregado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La estrategia comercial de ventas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Las ventas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Las demostraciones',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Las degustaciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Niveles de la comunicación comercial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'El asesor comercial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Medios de comunicación impresos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Muestra comercial',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Material publicitario en el punto de venta',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Omnicanalidad',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF4_632223_DU.pdf',
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
  complementario: [
    {
      tema: 'Material publicitario en el punto de venta',
      referencia:
        'Isaza, O., J. (2017). Análisis del impacto del material P. O. P. En los puntos de Venta de los distribuidores de los productos de la empresa Compañía de empaques. Universidad EAFIT.',
      tipo: 'Trabajo de grado',
      link:
        'https://repository.eafit.edu.co/bitstream/handle/10784/12431/JuanRicardo_IsazaOlarte_2017.pdf?sequence=2&isAllowed=y',
    },
    {
      tema: 'Buenas prácticas de Manufactura',
      referencia:
        'Guzmán, L. (2020). ¿Qué son las BPM? Conoce todo sobre las buenas prácticas de manufactura',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FbVh7DK03vk',
    },
    {
      tema: 'Omnicanalidad',
      referencia: 'Navarro, E. (2016). E-commerce: ¿Qué es la omnicanalidad?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IpPxFTJrZps',
    },
  ],
  glosario: [
    {
      termino: 'BPM',
      significado:
        'sigla para el término “Buenas Prácticas de Manufactura”. Hace referencia a la manera en que se deben administrar los productos para una buena higiene, desde su manipulación hasta su preparación, elaboración, envasado, almacenamiento, transporte y distribución, para que finalmente pueda ser consumido.',
    },
    {
      termino: 'Canales',
      significado:
        'Diferentes medios a través de los cuales la empresa se comunica y relaciona con sus clientes, como tiendas físicas, sitios web, aplicaciones móviles, redes sociales, entre otros.',
    },
    {
      termino: 'Conveniencia',
      significado:
        'Facilidad y comodidad con la que el cliente puede comunicarse y realizar transacciones con la marca a través de diversos canales.',
    },
    {
      termino: 'Degustación',
      significado:
        'pruebas que se le regalan a los clientes dentro de un establecimiento de uno o varios productos para que lo(s) conozcan, lo(s) experimenten en carne propia y luego puedan tomar una decisión de compra.',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Demostración',
      significado:
        'forma en que se promociona un producto, poniéndolo a prueba con los clientes dentro de un establecimiento para que puedan percibir su funcionamiento.',
    },
    {
      termino: 'Flexibilidad',
      significado:
        'Capacidad de adaptarse y responder a las necesidades y preferencias del cliente, permitiendo la interacción a través de diferentes canales en cualquier momento y lugar.',
    },
    {
      termino: 'Flujo de información',
      significado:
        'Movimiento continuo y sin problemas de datos e información del cliente entre los diferentes canales y fases de la relación con la marca.',
    },
    {
      termino: 'Identidad de marca',
      significado:
        'Conjunto coherente de características, valores y mensajes que la marca mantiene a través de todos los puntos de contacto y canales de comunicación.',
    },
    {
      termino: 'Interrelacionados',
      significado:
        'Estado en el que los diferentes canales de comunicación y puntos de contacto están conectados y comparten información para ofrecer una experiencia continua y sin interrupciones.',
    },
    {
      termino: 'Omnicanalidad',
      significado:
        'Estrategia de marketing y atención al cliente que integra diversos canales de comunicación (tanto tradicionales como digitales) para proporcionar una experiencia unificada y coherente.',
    },
    {
      termino: 'PLV',
      significado:
        'sigla de “Publicidad en el Punto de Venta”. Es lo mismo que el término PPV (Publicidad en el Punto de Venta). ',
    },
    {
      termino: 'Promoción',
      significado:
        'acciones publicitarias que sirven para sensibilizar a los clientes con el objetivo de que tomen decisiones de compra, para mejorar las ventas y crear fidelización de marca.',
    },
    {
      termino: 'Promoción de venta',
      significado:
        'acciones publicitarias y de mercadeo que incentivan a los clientes a tomar una decisión de compra en corto plazo, a través de técnicas promocionales como rebajas en el precio de un producto o servicio, descuentos, ofertas, cupones o el tradicional 2x1, entre otras.',
    },
    {
      termino: '<i>Stand</i>',
      significado:
        'mueble que ocupa un espacio, principalmente en el interior de una exposición o una feria, en la que una marca puede exponer los productos y servicios.',
    },
    {
      termino: '<i>Sampling</i>',
      significado:
        'distribución de muestras de producto gratis que se regalan a los clientes con el fin de llamar su atención y captarlos.',
    },
    {
      termino: 'Tecnologías de la Información y la Comunicación (TIC)',
      significado:
        'Conjunto de herramientas y recursos tecnológicos que facilitan la comunicación y el acceso a la información.',
    },
    {
      termino: 'Transacción',
      significado:
        'Proceso de interacción comercial que puede incluir consultas, compras, servicios, entre otros, que el cliente realiza con la marca.',
    },
  ],
  referencias: [
    {
      referencia:
        '¿Qué es la Gestión de Procesos? (BPM) - Guía Definitiva. (2024, 23 julio).',
      link:
        'https://www.boc-group.com/es/blog/bpm/fundamentos-de-la-gestion-de-procesos-de-negocio-y-su-papel-en-la-excelencia-operativa/',
    },
    {
      referencia:
        'Burin, D. (2017). Manual de facilitadores de procesos de innovación comercial.',
      link: '',
    },
    {
      referencia:
        'Chávez, L. M. (2016). Marketing en productos y servicios. IDI Instituto de Investigación - Escuela Superior Politécnica de Chimborazo.',
      link: '',
    },
    {
      referencia:
        'Costa, J. (2007). Señalética corporativa. Costa Punto Com Editor (CPC).',
      link: '',
    },
    {
      referencia:
        'Florido, M. (2021). Muestras Gratis: ¿Una estrategia de marketing efectiva?',
      link: 'https://www.marketingandweb.es/marketing/muestras-gratis/',
    },
    {
      referencia:
        'García, M. J. (2015). Publicidad en el punto de venta. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Navarro, M. E. (2012). Técnicas de venta. Red Tercer Milenio S.C.',
      link: '',
    },
    {
      referencia:
        'Romero, M. J., Maldonado, C., y Núñez, L. (2021). El nuevo paradigma de la omnicanalidad. ',
      link:
        'https://www.minsait.com/sites/default/files/newsroom_documents/elnuevoparadigmadelaomnicanalidad.pdf',
    },
    {
      referencia:
        'Silva, D. D. (2020). Guía para construir una estrategia comercial.',
      link: 'https://www.zendesk.com.mx/blog/estrategia-comercial/',
    },
    {
      referencia:
        'Universidad América Latina - UAL. (2021). Promoción de ventas.',
      link:
        'http://ual.dyndns.org/biblioteca/Promocion_de_Ventas/Pdf/Unidad_20.pdf',
    },
    {
      referencia:
        'Vigaray, M. D. (2005). Comercialización y retailing: distribución comercial aplicada. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Wetto, M. (20 de Septiembre de 2017). Funciones del asesor comercial. Obtenido de Lifeder.',
      link: 'https://www.lifeder.com/funciones-asesor-comercial/',
    },
    {
      referencia:
        'Wolters Kluwer N.V. (2021). Comunicación comercial. Tomado de https://guiasjuridicas.wolterskluwer.es.',
      link: '',
    },
    {
      referencia:
        'Yate, A. (2021). Material P.O.P. Publicidad en punto de venta. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'Zambrano, F. (2021). Marketing promoción.',
      link: 'https://es.calameo.com/books/006559089cc12d9b80dfb',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johana Gómez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Samuel Pinilla Hurtado',
          cargo: 'Contratista',
          centro: 'Centro de Comercio – Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario “La Granja” – Regional Tolima',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica ',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full-stack</i> Junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animador y producción audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
