<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos y servicios
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img1.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        p El producto es cualquier artículo que se ofrece en el mercado para su compra y que satisface una necesidad o deseo. Además, tiene atributos y beneficios que lo pueden hacer diferente a la competencia. Algunos de los productos sufren un proceso de transformación para llegar a su forma final con la que se exhibirá en los establecimientos (Chávez, 2016).
        .cajon.color-primario.p-4.mb-4
          p El término "bienes" incluye tanto productos como servicios. Los productos son tangibles; se pueden tocar, usar, comer, aplicar, etc. Ejemplos de productos son zapatos, hamburguesas y perfumes. Por otro lado, los servicios son intangibles; no se pueden tocar, pero se pueden utilizar. Ejemplos de servicios incluyen los bancarios, funerarios y de salud. 
        p Tanto los productos como los servicios necesitan de la parte tangible e intangible para su eficiente funcionamiento. La naturaleza del producto es la tangibilidad; pero, para que funcione en el mercado, necesita de su parte intangible, o sea, el servicio.
    
    .row.justify-content-center(data-aos="zoom-in-left").mb-4
      .col-sm-12.col-md-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          | Trazabilidad
        figure
          img(src='@/assets/curso/temas/tema2/fig1.png', alt='La imagen expone un diagrama que clasifica los bienes en productos y servicios. Los productos son tangibles y los servicios son intangibles. Ambos están incluidos en el término general "bienes". El diagrama destaca la diferencia entre la naturaleza de los productos y servicios (tangibilidad versus intangibilidad) y su funcionamiento (intangible para productos y tangible para servicios). ')
    
    .row
      p Por ejemplo, cuando se compra una pastilla para el dolor muscular, se busca en la farmacia más cercana y a la hora de hacer la compra se requiere de un servicio de atención, facturación y servicio de entrega del producto. 
      p Por su lado, la naturaleza del servicio es intangible, pero, en cuanto a su funcionamiento, necesita de su parte tangible. Por ejemplo, un hotel brinda el servicio de hospedaje, pero, para poder proporcionar este servicio, necesita de infraestructura física, inmobiliario y equipamiento. 

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Portafolio de productos
    p Este tema está relacionado con las dimensiones del surtido, discutidas en el módulo anterior. En esta sección, profundizaremos en el concepto y en la gama de productos que se define mediante las siguientes variables:

    .row.fondo2.align-items-center(data-aos="fade-down").mb-5

          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/sly1-1.png')})`}").borde-recto
              .row(titulo="xxx").mt-5
                .row.mt-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-5
                  .row.mt-5
                  .col-lg-8.mt-5.bgblanco
                    h4.mt-2.ps-2 Amplitud
                    p.ps-2 Se refiere al número de familias, también llamadas líneas de producto, que ofrece la marca. Por ejemplo, crema facial, leche corporal, crema de manos, etc. Mide el número de líneas de productos que se comercializan. Por ejemplo, una empresa que posee una línea de electrodomésticos y otra de aseo personal, posee dos familias de productos.
            .tarjeta.tarjeta--slyder(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/sly1-2.png')})`}").borde-recto
              .row(titulo="xxx").mt-5
                .row.mt-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-5
                  .col-lg-8.mt-5.bgblanco
                    h4.mt-2.ps-2 Profundidad
                    p.ps-2 Es el número de variantes que la marca ofrece por cada producto en cada familia o línea. Por ejemplo, en cremas faciales ofrece alternativas como crema facial para pieles grasas, pieles mixtas, pieles secas, pieles normales, etc. Es el número total de referencias que la marca ofrece por cada familia o línea de productos. Otro ejemplo, en la línea de cervezas, la marca ofrece cerveza ligera, amarga, negra, rubia, etc. También cuenta el número de presentaciones, por ejemplo, botella de 250 ml, 360 ml y 650 ml.
            .tarjeta.tarjeta--slyder(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/sly1-3.png')})`}").borde-recto
              .row(titulo="xxx").mt-5
                .row.mt-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-4
                  .col-lg-8.mt-5.bgblanco
                    h4.mt-2.ps-2 Longitud
                    p.ps-2 Indica el número total de productos y referencias que ofrece la marca en una familia o línea. Es el resultado de multiplicar la amplitud de la gama por el número de referencia de cada una de ellas; mide el número de productos totales que se pueden vender.
            .tarjeta.tarjeta--slyder(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/sly1-4.png')})`}").borde-recto
              .row(titulo="xxx").mt-5
                .row.mt-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-5
                  .row.mt-5.mb-4
                  .col-lg-8.mt-5.bgblanco
                    h4.mt-2.ps-2 Consistencia o coherencia
                    p.ps-2 Es la cercanía relativa entre las líneas de producto y su uso final. Deben poseer una relación homogénea. Ejemplo: en una relojera, no se debe vender carnicería por el simple hecho de no tener una coherencia en la gama.            
          .row.mt-5

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Diseño de la gama de productos
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 Dentro del grupo de artículos que ofrece la marca, existen productos que poseen específicas características, las cuales permiten diseñar estrategias de ventas; estos productos se denominan:

    .row.justify-content-center(data-aos="fade-down") 
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.align-items-center
                .col-4
                  img.mb-4(src='@/assets/curso/temas/tema2/ico1.png', alt='tema1')
              h4.text-center Cabeza de línea
              p.text-center Son los productos que suministran mayores beneficios a la marca; por lo general tienen mayor rotación de ventas o mayor rentabilidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tar1-1.png')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.align-items-center
                .col-4
                  img.mb-4(src='@/assets/curso/temas/tema2/ico2.png', alt='tema1')
              h4.text-center Productos a atracción
              p.text-center Se refiere a los productos que estimulan el interés y motivan a conseguir más información, y concluyen con la compra del artículo sin importar el precio. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tar1-2.png')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.align-items-center
                .col-4
                  img.mb-4(src='@/assets/curso/temas/tema2/ico1.png', alt='tema1')
              h4.text-center Productos reguladores
              p.text-center Estos productos tienen como misión la de atenuar las variaciones estacionales de la demanda, en épocas malas del año donde las ventas sean mínimas o exista escasez del artículo. Como ejemplo, una marca de productos deportivos vende trajes de baño cuando hay verano y esquís cuando hay invierno.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tar1-3.png')})`}")

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Los servicios como valor agregado
    p.mb-4 El sector servicios va logrando más importancia día a día. Las marcas de países desarrollados invierten más del 50% de sus presupuestos en servicios para alcanzar una ventaja competitiva. Y este incremento de los servicios con valor corresponde a la exigencia de los clientes en la actualidad. Las marcas grandes han optado entonces por especializarse en el servicio continuo de atención al consumidor. Por ejemplo, la marca IBM declara ser una empresa de servicios y no de computadoras, como lo afirma Chávez, (2016).

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Clasificación de los servicios 
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img2.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        p Dentro del grupo de artículos que ofrece la marca, existen productos que poseen específicas características, las cuales permiten diseñar estrategias de ventas; estos productos se denominan:
        .bgazulclaro.borde-redondo.p-4
          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly2-1.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Generadores de utilidades.
                  p.mb-4 Se refiere a aquellos que se cobran y que el cliente está dispuesto a pagar. Por ejemplo, marcas funerarias, de seguros, de diversiones, financieras, de servicios médicos, entre otros. 
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly2-2.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Mixtos.
                  p.mb-4 Es cuando el producto necesita del componente de servicio, sin importar si es en un grado mayor o menor. Como ejemplo se pueden citar los restaurantes, porque el producto va a variar de precio de acuerdo con la calidad de los servicios y atención prestada (música de fondo o en vivo, espacios amplios y cómodos, zonas de juegos para los niños, entre otros.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly2-3.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Servicios de apoyo.
                  p.mb-4 Son servicios adicionales que ayudan a vender un producto al proporcionar apoyo extra, como el servicio  de entrega a domicilio, atención clara, oportuna, entre otros. Estos servicios están diseñados para motivar al cliente a realizar una compra. Por ejemplo, en la venta de camionetas 4x4, se puede ofrecer a los clientes y sus familias pases de cortesía para asistir a un evento durante el fin de semana, permitiéndoles experimentar el vehículo en un entorno real.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly2-4.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Servicio de entrega.
                  p.mb-4 El cliente del siglo XXI quiere hacer el mínimo esfuerzo en la compra de un artículo. Este apartado se refiere a tener un excelente servicio de entrega y manejo de mercancías, con el apoyo de pedidos vía teléfono, fax, correo electrónico y WhatsApp. Así mismo, se deben dar facilidades para su adquisición, pues esto, es vital en el momento de comprar productos .
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly2-4.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Servicio de crédito.
                  p.mb-4 En la actualidad es el más requerido por los clientes para productos que le resulten costosos. Puede ser por medio de tarjetas de crédito, cheques por fechados, cuentas corrientes, tarjetas débito, etc.

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Características de los servicios  
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.bgrosado.p-4(titulo="Intangibilidad del servicio")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-6
                img(src='@/assets/curso/temas/tema2/tab1-1.png', alt='')
              .col-lg-7.col-md-12.col-sm-12  
                p Es cuando los servicios se producen y se consumen al mismo tiempo y no se pueden separar de sus proveedores , ya sean estos, personas, máquinas o instalaciones. Por ejemplo, un restaurante vende comida, que es un producto, pero sustancialmente es un servicio y en este caso solo se hace tangible cuando se consume.
          .tarjeta.bgrosado.p-4(titulo="Carácter indisociable del servicio")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-6
                img(src='@/assets/curso/temas/tema2/tab1-2.png', alt='')
              .col-lg-7.col-md-12.col-sm-12  
                p Los servicios no pueden ser vistos, probados, sentidos, olfateados o escuchados . En el sector de servicios, se promocionan experiencias intangibles. Por ejemplo, el servicio de un seguro médico es intangible, no se toca, pero se tiene la seguridad que cuenta con médicos cuando se requieran.
          .tarjeta.bgrosado.p-4(titulo="Carácter  perecedero del servicio")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-6
                img(src='@/assets/curso/temas/tema2/tab1-3.png', alt='')
              .col-lg-7.col-md-12.col-sm-12  
                p Los servicios no se pueden conservar, acumular o archivar en un cajón para luego ponerlos en venta, o para usarlos. Por ejemplo, los minutos en los que un odontólogo no tiene pacientes, no se puede acumular para venderlos más adelante, simplemente porque esos minutos ya no vuelven y se pierden por siempre.
          .tarjeta.bgrosado.p-4(titulo="Variabilidad del servicio")
            .row.justify-content-center.align-items-center
              .col-lg-4.col-md-6.col-6
                img(src='@/assets/curso/temas/tema2/tab1-4.png', alt='')
              .col-lg-7.col-md-12.col-sm-12  
                p Se refiere a  que la calidad en el servicio puede variar porque va a depender de quién los ofrece, cuándo, dónde y cómo los ofrece.

    #t_2_3.titulo-segundo.mb-5
      h2 2.3 La estrategia comercial de ventas

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img3.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        p Silva. (2020), afirma que, en un mundo donde la transformación digital se ha acelerado, y con un mercado sellado por una competencia extrema, se hace vital que toda marca cuente con una estrategia comercial de ventas que se centre en la satisfacción de los clientes.
        p Si la marca desea suministrar la mejor experiencia a los clientes, requiere tener una estrategia comercial bien diseñada, la cual enlace con el consumidor y lo motive no solo a comprar, sino a formar parte de la “tribu” de marca, es decir, conjunto de personas que están identificados con un producto, compartiendo ciertos argumentos y teniendo nociones parecidas sobre la marca.
        .cajon.color-primario.p-4
          p Hoy en día, en pleno siglo XXI, contar con una estrategia comercial es cuestión de supervivencia. Aproximadamente el 80% de las compañías que no diseñan nuevas estrategias de marketing y ventas desaparecen del mercado. 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p La estrategia comercial se puede definir como el grupo de acciones que una empresa puede poner en práctica con el fin de dar a conocer un producto nuevo, para aumentar su participación de mercado. Esta  se plasma en una “hoja de ruta”, un plan diseñado de manera personalizada según el contexto y necesidades de cada empresa, de acuerdo con sus características y filosofía empresarial (objetivos, principios, misión, visión y valores).
        p En una estrategia comercial de ventas se unen un conjunto de acciones racionales y elegidas dentro de la compañía . Se deben centrar en el cliente y sus acciones tienen como fin poder posicionar la marca en el mercado. Va mucho más allá del aumento en las ventas ya que su dirección apunta a la perduración de la marca y sus ventas en el tiempo, garantizando de esta manera su existencia.
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img4.png', alt='')

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Premisas de la estrategia comercial de ventas
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-3.col-md-5.col-5
        img(src='@/assets/curso/temas/tema2/img5.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="No existe estrategia  sin contexto")
            .row.justify-content-center.align-items-center
              p Para que la estrategia marche, debe dar respuesta a la pregunta “¿En dónde se encuentra la empresa?”. La respuesta debe incluir datos reveladores sobre su situación actual en el año que termina, así como tener en cuenta variables globales e internas que pueden impactar en el funcionamiento de la empresa. Según sea el contexto empresarial se diseña la estrategia, siempre con mirar a un mejoramiento continuo, con base en ese análisis de su situación actual.
          .row.col-xl-11.m-auto(titulo="Necesidad de una visión y una misión")
            .row.justify-content-center.align-items-center
              p La visión es el norte de la marca, si se visualiza, entonces se puede alcanzar. No se pueden planificar estrategias si no se sabe a dónde se quiere llegar. Por su lado, la misión, es el ahora, quién se es en la actualidad. Por otro lado, una estrategia comercial para que sea exitosa debe ser realista, lo que implica tener claro cuáles son las metas a las que la empresa puede dar cumplimiento según sus recursos, en un período determinado de tiempo. Por eso, la visión y la misión son fundamentales.
          .row.col-xl-11.m-auto(titulo="La estrategia comercial debe ser medible y flexible")
            .row.justify-content-center.align-items-center
              p La ejecución de la estrategia comercial se debe medir en cada una de sus fases, por lo que los indicadores deben estar preestablecidos. El resultado debe permitir un ajuste en la estrategia en pos de lograr un mejoramiento continuo.

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Principios de la estrategia comercial de ventas
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 Las premisas permiten la creación de las condiciones previas para el diseño y ejecución de la estrategia comercial de ventas: Por su lado, los principios son reglas sagradas que se deben cumplir para que la estrategia marche .

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-col-sm-12
        ol.lista-ol--cuadro.lista-ol--separador.fa-ol
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b 1]
            span.mb-0 La estrategia debe estar planteada en términos operativos, con responsables específicos, acciones detalladas y  plazos establecidos.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b 2]
            span.mb-0 Una vez determinada la estrategia, el trabajo y la organización de la empresa deben alinearse para el logro de los objetivos pactados.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b 3]
            span.mb-0 Cada uno de los empleados de la empresa debe tener conocimiento sobre la estrategia comercial, así como también las acciones concretas que se van a desarrollar para aportar a la contribución con el cumplimiento de sus labores.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b 4]
            span.mb-0 Según su definición, la estrategia comercial de ventas se debe gestionar como un proceso que se desarrolla de manera continua e ininterrumpida.
          li    
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img6.png', alt='')

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Tipos de estrategia comercial de ventas
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 Lo primero que se debe hacer es diferenciar qué es estrategia comercial de ventas y qué es estrategia de marketing, ya que no tienen el mismo fin. La estrategia de marketing se orienta en la generación de oportunidades en el mercado, mientras que la estrategia comercial de ventas se aprovecha de estas oportunidades para lograr la rentabilidad empresarial.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        .cajon.color-acento-botones.p-4.mb-4
          p La estrategia comercial le da prioridad al cierre del proceso de ventas con los clientes ya conocidos. Además de incluir #[b acciones que se dirigen a los clientes de la competencia y, en menor grado, a captar clientes que aún no conocen la marca.] Hay varios criterios que sirven para lograr la clasificación de los tipos de estrategia comercial. Son criterios que se operan de manera cotidiana en el ámbito empresarial. 
    
    p.mb-4 Hay un criterio tradicional que divide la estrategia comercial en dos tipos esenciales:

    .row(data-aos="fade-down")
      .col-lg-6.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema2/tar2-1.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-3
                br
                br
                h4.mt-5.mb-4.text-center Estrategia comercial de productos.
      .col-lg-6.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema2/tar2-2.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-3
                br
                br
                h4.mt-5.mb-4.text-center Estrategia comercial de servicios.

    p A pesar de ser bastante usada en el pasado, esta clasificación sigue siendo válida en la actualidad, simplemente porque no es lo mismo vender un producto que un servicio, y las estrategias comerciales deben estar conectadas con este contexto.
    p.mb-4 Con la aparición de internet, surge un nuevo criterio cuyo uso se ha difundido fuertemente en el mundo empresarial, y que ha dividido los tipos de estrategia comercial en:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12.p-1
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tar3-1.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              .row.align-items-center.justify-content-center.mt-2
                .col-2
                  img(src='@/assets/curso/temas/tema2/A.png', alt='')
                .col-10
                  p.mt-4 Estrategias comerciales #[em online].
      .col-lg-6.col-md-12.col-sm-12.p-1
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/tar3-2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              .row.align-items-center.justify-content-center.mt-2
                .col-2
                  img(src='@/assets/curso/temas/tema1/B.png', alt='')
                .col-10
                  p.mt-3 Estrategias comerciales #[em offline].

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p La estrategia comercial #[em online] incluye todos aquellos tipos de estrategias que la marca desarrolla en el ecosistema digital (redes sociales, correo electrónico, #[em blog], sitio #[em web], etc.), son vitales para las empresas contemporáneas. 
        p Por su lado, la estrategia comercial #[em offline] completa todas las acciones tradicionales de ventas desarrolladas a lo largo de la historia. Utiliza canales distintos a internet, pero eso no quiere decir que sean incompatibles.
        p Son muchas las marcas que de manera exitosa unen ambos tipos de estrategia (#[em online] y #[em offline]), dando como resultado una decisión inteligente porque de esta manera se logra el diseño de una estrategia omnicanal que en la actualidad es de amplia aceptación.  A continuación, se expondrán los siguientes pasos para el desarrollo de una estrategia comercial efectiva.      
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img7.png', alt='')

    .row
      .col-sm-12.col-md-12.col-lg-12

        .tarjeta.tarjeta--rosada.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center.align-items-center(titulo="Paso 1")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-1.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Elaborar la matriz DOFA
                p Para la ejecución de este paso se debe tener el brief empresarial, especialmente conocer el contexto y la filosofía de la empresa, o sea, la visión, misión y valores declarados por la misma.
            .row.justify-content-center.align-items-center(titulo="Paso 2")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-2.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Definir los objetivos comerciales
                p Es importante saber que estos objetivos no comprenden solo números de ventas, sino también la penetración del mercado, la fidelización de los clientes, el posicionamiento de marca, la percepción e imagen de la marca, entre otros aspectos.
            .row.justify-content-center.align-items-center(titulo="Paso 3")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-3.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Establecer la cartera de clientes
                p Tener muy claro cuál es el segmento al cual van dirigidos los productos de la marca. Resulta imposible desarrollar acciones de ventas si no se conoce quiénes son y cómo piensan los clientes a los cuales se dirigirá cada producto.
            .row.justify-content-center.align-items-center(titulo="Paso 4")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-4.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Definir responsables, plazos y mecanismos de control para cada una de las acciones que se diseñen
                p Es importante contar con un registro de las personas que hacen parte del equipo de ventas y los ejecutivos comerciales, de tal forma que puedan acceder a un ciclo de trabajo uniforme y concreto, donde se perciba quién es el responsable de cada acción, qué fechas de cumplimiento tiene y cuáles son los mecanismos de control que se tienen, todo con el fin de poder tener oportunidades de mejora en cuanto se tengan indicadores. 
                p La mayoría de las empresas que trabajan con sistemas de control de ventas tienen mejores resultados e ingresos más altos.
            .row.justify-content-center.align-items-center(titulo="Paso 5")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-5.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Utilizar la información del embudo de ventas para diseñar las acciones de la estrategia comercial
                p Las acciones deben diseñarse de manera personalizada y para tener información sobre los hábitos y el comportamiento del cliente, el embudo es primordial para obtener estos datos. (#[b Embudo de ventas]: describe el proceso de conversión de prospectos a clientes, incluyendo métricas clave como tasas de conversión y tiempo en cada etapa.)
            .row.justify-content-center.align-items-center(titulo="Paso 6")
              .col-md-3
                img(src='@/assets/curso/temas/tema2/ps1-6.png', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                h4.mb-4  Diseñar una estrategia comercial con soporte omnicanal
                p Es el uso creativo de los medios #[em offline] y #[em online] para beneficio de la marca. Las empresas que acogen una estrategia comercial omnicanal tienen mayores posibilidades de retener más clientes y de lograr mejores resultados.

    Separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Las ventas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-2
        img(src='@/assets/curso/temas/tema2/img8.png', alt='')
      .col-lg-11.col-md-12.col-col-sm-12
        p Es vital que los empleados de la empresa, y en especial los ejecutivos de ventas, conozcan los productos de la marca. De esta manera los trabajadores reflejan el compromiso que poseen como colaboradores. No cabe duda de que la razón de ser que tiene toda empresa es satisfacer al cliente, pero para conseguirlo, primero debe conocer las necesidades y lo que motiva al cliente para tomar una decisión de compra; de esta manera se orientan mejor todos los esfuerzos para poder lograr los objetivos trazados (Navarro, 2012).

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Factores que afectan a las ventas
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 Lo primero que se debe hacer es diferenciar qué es estrategia comercial de ventas y qué es estrategia de marketing, ya que no tienen el mismo fin. La estrategia de marketing se orienta en la generación de oportunidades en el mercado, mientras que la estrategia comercial de ventas se aprovecha de estas oportunidades para lograr la rentabilidad empresarial.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-sm-12.bordenaranjaredondo.p-5
        .titulo-nuevo.mt-2
          | 
          h4 Entorno externo
        p.mb-4 El entorno externo no depende de la empresa porque tiene variables o factores que nacen fuera de ella, por lo tanto, no pueden ser controlados por la empresa, este se integra por los siguientes factores:
    
    .row.fondocontenedor.justify-content-center.align-items-center.mb-5

      .titulo-sexto.color-acento-contenido
        h5 Figura 2. 
        | Análisis “PESTEL” 

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema2/fig2.png', alt='La imagen expone un diagrama circular del análisis PESTEL, que se utiliza para evaluar el entorno macroeconómico de una empresa. El diagrama está dividido en seis segmentos, cada uno representando una de las categorías del análisis: Político, Económico, Social, Tecnológico, Ecológico y Legal. Cada segmento está coloreado y etiquetado claramente para destacar su categoría correspondiente. En el centro del círculo, hay un ícono de edificios y una turbina eólica, simbolizando el entorno empresarial en su conjunto.', style='')
              .tarjeta.color-acento-contenido.p-4(x="63%" y="16%" numero="+")
                h5 Políticos.
                p.mb-0 Son aquellos factores que se asocian con la clase política que pueden influir positiva o negativamente a futuro en la actividad empresarial. Se deben analizar temas como la política fiscal, los tratados de libre comercio, posibles cambios políticos en los gobiernos, entre otros, que pueden afectar seriamente en las actividades empresariales.
              .tarjeta.color-primario.p-4(x="74%" y="50%" numero="+")
                h5 Económicos.
                p.mb-0 Se refiere al poder adquisitivo de la sociedad, las personas sólo compran bienes o servicios si poseen dinero. Por esta razón, en este factor se deben tener en cuenta indicadores como el PIB, el tipo de cambio, el índice de inflación, los intereses, el cambio del dólar o del euro, entre otras. Con estos indicadores se podrá realizar un pronóstico de ventas más ajustado y real.
              .tarjeta.color-secundario.p-4(x="38%" y="85%" numero="+")
                h5 Tecnológicos.
                p.mb-0 Es un análisis sobre cómo las nuevas tecnologías pueden cambiar la sociedad en un futuro y cómo pueden afectar a la empresa. La tecnología puede influir en las estrategias de ventas, y por otro lado puede impulsar la capacidad empresarial para vender con mejores resultados. La inversión I+D de los países o continentes, nuevas tecnologías relacionadas con el contexto empresarial, el nacimiento de tecnologías disruptivas, cambios en el uso de energía, nuevos métodos de producción y distribución son algunos de los puntos que ameritan ser analizados desde el contexto de la empresa.
              .tarjeta.color-acento-botones.p-4(x="63%" y="85%" numero="+")
                h5 Socioculturales.
                p.mb-0 Se refiere a desarrollar un análisis sobre qué elementos de la sociedad pueden influir en la empresa y cómo están cambiando. Se busca el poder identificar aquellas tendencias que tiene la sociedad actual. En esta variable se deben tener presentes el comportamiento demográfico, los cambios en el nivel de ingresos, los cambios en gustos o modas que puedan repercutir en el nivel de las compras, la diversidad cultural, los valores éticos, los cambios en cómo nos relacionamos o comunicamos, y hasta rasgos religiosos que sean interesantes tenerlos en cuenta. Con este análisis se pueden identificar los artículos que satisfacen mejor las necesidades del cliente. 
              .tarjeta.p-4(x="26%" y="50%" numero="+" style='border-radius: 8px; background-color: #74D578')
                h5 Ecológicos.
                p.mb-0 Se refiere a estar al enterado de los posibles cambios normativos desde el contexto ecológico, y del nivel de conciencia social de este movimiento. La naturaleza siempre nos da enseñanzas importantes, más aún en la actualidad porque se ha comenzado a visualizar los resultados negativos por culpa de los abusos en los recursos naturales. Por eso, antes de lanzar un producto al mercado, se debe analizar si la materia prima para la producción y fabricación del producto afecta negativamente a la ecología.
              .tarjeta.p-4(x="38%" y="16%" numero="+" style='border-radius: 8px; background-color: #F3AB1D')
                h5 Legales.
                p.mb-0 Son los cambios en las normativas que estén relacionadas con el contexto empresarial, y que también puede influir de forma positiva o negativa. Las licencias, las leyes o normas sobre el empleo, leyes de seguridad y salud en el trabajo, leyes antimonopolios, el entorno legal en el país de origen de la empresa, derechos de propiedad intelectual, sectores protegidos o regulados, entre otros.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.col-md-12.col-sm-12.bordenaranjaredondo.p-5
          .titulo-nuevo.mt-2
            | 
            h4 Entorno interno
          p.mb-4 El entorno interno sí depende de la empresa porque tiene variables o factores que nacen dentro de ella, por lo tanto, se pueden controlar de tal forma que la empresa pueda tener un mejoramiento continuo. Los siguientes son esos factores:

    .titulo-sexto.color-acento-contenido
      h5 Figura 3. 
      | Factores entorno interno 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/fig3.png', alt='La imagen detalla  un diagrama circular que representa los factores del entorno interno de una empresa. El círculo está dividido en seis segmentos, cada uno con un ícono distinto: una bombilla (Capacidad de investigación, desarrollo y tecnología), un trofeo (filosofía empresarial, objetivos), un gráfico de barras (desempeño, atención al cliente), un globo terráqueo (capacidad de producción y cadena de suministros), un símbolo de dólar (Recursos financieros) y un ícono de conversación (recursos humanos). Se sugiere por la ubicación la interconexión y la diversidad de estos factores internos. ', style='')
            .tarjeta.color-acento-contenido.p-4(x="65%" y="13%" numero="01")
              h5 Metas, objetivos y cultura
              p.mb-0 Tiene que ver con la filosofía empresarial, o sea sus principios, objetivos, misión, visión y valores de una empresa. Se convierten en su ruta de navegación, su norte. 
            .tarjeta.color-acento-contenido.p-4(x="74%" y="50%" numero="02")
              h5 Recursos humanos
              p.mb-0 Tiene que ser con los empleados de la empresa y es obligatorio reflexionar sobre la integración de todos los miembros que hacen parte de la empresa. Se debe analizar en los perfiles, la rotación y las características que deben tener los ejecutivos de la fuerza de ventas ya que pueden tener una gran movilidad.
            .tarjeta.color-acento-contenido.p-4(x="66%" y="82%" numero="03")
              h5 Recursos financieros
              p.mb-0 Tiene que ver con el músculo financiero de la empresa. Si tiene buenos recursos financieros podrá invertir en la investigación y desarrollo de nuevos productos o servicios y, además, capacitar correctamente a quienes laboran en esta área.
            .tarjeta.color-acento-contenido.p-4(x="35%" y="86%" numero="04")
              h5 Capacidad de producción y cadena de suministro
              p.mb-0 Tiene que ver con la ubicación de las plantas productivas, la tecnología usada por la empresa y el equipo que tiene a su disposición. Todo esto influye en los planes de mercadeo y ventas. Como el tema es el suministro, la empresa debe prestar atención especial en garantizar que los productos siempre se encuentren disponibles en el punto de venta. 
            .tarjeta.color-acento-contenido.p-4(x="25%" y="50%" numero="05")
              h5 Capacidad de servicio
              p.mb-0 Tiene que ver con la atención al cliente. Toda empresa debe cumplir con un alto nivel en la calidad del servicio prestado al cliente. Ofrecer a los clientes un valor agregado y un excelente servicio, antes, durante y después de una venta, puede hacer la diferencia competitiva.
            .tarjeta.color-acento-contenido.p-4(x="35%" y="13%" numero="06")
              h5 Capacidad de investigación y desarrollo y tecnología
              p.mb-0 Tiene que ver con la inversión en tecnología y en la investigación de nuevos productos que permita a la empresa estar un paso delante de la competencia. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        .mb-4.d-flex.ps-lg-0
          .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
            h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Técnicas de ventas
            img.icon(src='@/assets/curso/temas/icon.svg') 
        p.mt-4 Se refiere a los métodos de venta que tienen como finalidad llegar al cliente potencial a través de cualquier medio o canal, incluido internet y su ecosistema digital. El proceso de venta tiene unas etapas que comienzan con la ubicación y calificación del cliente, y terminan en el cierre de la venta; pero, no todo termina con la venta, ya que un excelente vendedor siempre estará en búsqueda de entregar un servicio y atención que generen más valor para el consumidor.
        .cajon.color-primario.p-4.mb-4
          p En el siglo XX, la venta personal era la técnica más importante, con vendedores que frecuentemente viajaban de casa en casa para exhibir sus productos. Posteriormente, las ventas  multinivel ganaron relevancia, y los vendedores utilizaban catálogos para mostrar los productos de manera más publicitaria. En la actualidad, las ventas a distancia, gestionadas por correspondencia, han recobrado mucha fuerza gracias a internet, convirtiéndose en uno de los medios más eficaces.
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img9.png', alt='')

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Venta a distancia
        img.icon(src='@/assets/curso/temas/icon.svg') 
    p.mt-4.mb-4 Método en el que no hay una relación directa entre el cliente y el asesor de ventas. Se refiere a las ventas por correspondencia, ventas telefónicas, ventas electrónicas y ventas a través de la televisión. A continuación, se explicarán cada una de ellas:

    .row.mb-5
      AcordionA.acordion.activo(tipo="b" clase-tarjeta="tarjeta tarjeta--azull")
        .row.justify-content-center.align-items-center(titulo="Venta por correspondencia")
          .col-md-7
            p Se ejecuta a través de un catálogo que se envía por correo postal o se pone directamente en el buzón del cliente. Puede tener el formato de “inserto”, que es un anuncio pagado tipo volante o folleto que se ubica dentro de las páginas de las revistas o periódicos. 
            p Este tipo de ventas tiene como ventaja que puede describir la información del producto o servicio con gran detalle. Pero, en la actualidad, con la presencia del correo electrónico su uso ha disminuido considerablemente. 
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/aco1-1.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center(titulo="Ventas telefónicas")
          .col-md-7
            p También conocida como #[em telemarketing], especialmente se usa en mercados de gran consumo o para lanzar productos nuevos o en promoción especial.
            P Con la aparición de la telefonía celular y de internet, ya no es tan usual ver esta técnica en la actualidad. 
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/aco1-2.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center(titulo="Ventas electrónicas")
          .col-md-7
            p Es el tipo de venta que se respalda en la transferencia de datos a través del ecosistema digital.
            p Es la preferida en la actualidad por la economía que presenta a las empresas en su uso y por la agilidad y versatilidad que tiene a la hora de planear las ventas. Correo electrónico, redes sociales, sitios #[em webs] y hasta el WhatsApp sirven de apoyo.
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/aco1-3.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center(titulo="Ventas por televisión")
          .col-md-7
            p Se conocen también como televenta y se refieren a la demostración de productos o servicios de forma minuciosa; la idea es destacar los beneficios como por ejemplo un precio llamativo (puede ser una oferta o descuento) o también las ventajas competitivas.
            p Por lo general, se transmiten diariamente en el mismo horario familiar.
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/aco1-4.png', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center(titulo="Venta personal")
          .col-md-7
            p En esta técnica sí hay contacto directo entre vendedor y cliente. Puede tener dos variables: ejecutarse por dentro o por fuera de las sedes de la empresa.
            img(src='@/assets/curso/temas/tema2/aco1-5-2.png', alt='')
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/tema2/aco1-5-1.png', alt='Texto que describa la imagen')

    p.mb-5 A su vez, las ventas internas, se pueden clasificar en:  

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-left").borde-redondo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tar4-1.png", alt="alt")
          .crd_hover_txt--body.cambio
            h4.mb-3.text-center Venta directa
            p.mb-0.text-center.text-white Cuando el cliente ingresa al establecimiento y es atendido de manera personalizada por el vendedor.
      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-left").borde-redondo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tar4-2.png", alt="alt")
          .crd_hover_txt--body.cambio
            h4.mb-3.text-center Venta en libre servicio
            p.mb-0.text-center.text-white Cuando el cliente realiza una compra en una tienda de autoservicio, de un producto que ya ha elegido y evaluado previamente. Por lo general presenta la ventaja de tener precios más accesibles al consumidor.
      .col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-left").borde-redondo
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema2/tar4-3.png", alt="alt")
          .crd_hover_txt--body.cambio
            h4.mb-3.text-center Venta en ferias, salones y exhibiciones
            p.mb-0.text-center.text-white Cuando la empresa expone sus productos o servicios a clientes potenciales en lugares especiales como salones especiales o zonas amplias donde pueda existir un buen ambiente. La empresa puede usar un salón de un hotel, por ejemplo. 

    p.mb-4 Por su lado, en las ventas externas, se pueden clasificar en: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img10.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        .bgazulclaro.borde-redondo.p-4
          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly3-1.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Ventas a domicilio.
                  p.mb-4 Cuando la venta se ejecuta en el lugar de ubicación del cliente y por lo general en ese instante se hace la orden de compra y luego se hace entrega del producto o servicio. Este tipo de ventas pueden ser “venta por cita en el domicilio del cliente”, cuando el vendedor visita al consumidor con una cita previa acordada por ambos; “venta de puerta en puerta”, cuando el vendedor, sin pedir cita, toca a la puerta del domicilio o lugar de estadía del cliente; y “venta en el lugar de trabajo”, cuando el vendedor visita al cliente en horario laboral en su oficina, previa cita.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly3-2.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Venta ambulante.
                  p.mb-4 Cuando la venta no tiene un lugar fijo. Lo que sí es seguro es que se realiza en la calle y por lo general no presenta garantía en la calidad del producto.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly3-3.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Auto venta.
                  p.mb-4 Cuando la empresa establece itinerarios para llevar a los clientes los productos que normalmente son perecederos y se consumen diariamente. El vendedor usa una ruta ya establecida de manera estratégica y entrega los productos a clientes que por lo general son tiendas minoristas.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-11
                  h4.mb-4 Venta multinivel.
                  p Cuando se crea una red que se compone por un cliente que se asocia a una empresa para obtener un código que lo autoriza como vendedor de sus productos y puede obtener, con precios más bajos, los productos directamente de la empresa. Con este código el cliente vendedor obtiene un porcentaje de las ventas que realicen otros clientes que fueron afiliados a través de ellos. 
                  P De esta manera, el cliente vendedor gana por el descuento del precio del producto, por el porcentaje en las ventas propias, por el porcentaje en las ventas de las personas que afilió bajo su auspicio hasta el nivel de profundidad establecido por la empresa de multinivel, además de obtener bonificaciones y regalías de acuerdo con las normas que la empresa haya establecido. 
                  P De esta forma cada integrante puede construir y dirigir su fuerza de venta afiliando, motivando y adiestrando a otros para que realicen lo mismo que él, hasta el punto de construir su propia organización, si así lo desean.

    separador
    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Buenas Prácticas de Manufactura (BPM )

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-2
        img(src='@/assets/curso/temas/tema2/img11.png', alt='')
      .col-lg-11.col-md-12.col-sm-12
        p Estas  son las normas establecidas oficialmente por las empresas que actualmente regulan a las Plantas Procesadoras de Alimentos (PPA) en relación con los procedimientos de fabricación, limpieza y desinfección, higiene personal, manipulación, controles, registros y almacenamiento, garantizando así la calidad y seguridad de los alimentos (Amagua, Coronel, Quintana y Reyes, 2016).

    p.mb-4 El uso de las BPM en la industria de alimentos puede ser empleado alrededor de las PPA o al interior de estas:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg.col-md-12.col-sm-12
        .bordeazulredondo.p-4
          .row.align-items-center.justify-content-center
            .col-lg-10.col-md-5.col-5
              img(src='@/assets/curso/temas/tema2/tar5-1.png', alt='').mb-4
          h4.mb-0.text-center En la planta
          p.mb-5.text-center En los pisos, paredes, cielo raso y desagües.
          .row.mb-5.mt-5
          .row.mb-3
      .col-lg.col-md-12.col-sm-12
        .bordeazulredondo.p-4
          .row.align-items-center.justify-content-center
            .col-lg-10.col-md-5.col-5
              img(src='@/assets/curso/temas/tema2/tar5-2.png', alt='').mb-4
          h4.mb-0.text-center En los alrededores
          p.mb-5.text-center Zonas externas a las PPA para presentar facilidades sanitarias.
          .row.mb-5
      .col-lg.col-md-12.col-sm-12
        .bordeazulredondo.p-4
          .row.align-items-center.justify-content-center
            .col-lg-10.col-md-5.col-5
              img(src='@/assets/curso/temas/tema2/tar5-3.png', alt='').mb-4
          h4.mb-0.text-center Con equipos
          p.mb-5.text-center Desinfección, mantenimiento y calibración de los equipos.
          .row.mb-4
      .col-lg.col-md-12.col-sm-12
        .bordeazulredondo.p-4
          .row.align-items-center.justify-content-center
            .col-lg-10.col-md-5.col-5
              img(src='@/assets/curso/temas/tema2/tar5-4.png', alt='').mb-4
          h4.mb-0.text-center En almacenes
          p.mb-5.text-center Ubicación interna, buena ventilación e iluminación.
          .row.mb-4
      .col-lg.col-md-12.col-sm-12
        .bordeazulredondo.p-4
          .row.align-items-center.justify-content-center
            .col-lg-10.col-md-5.col-5
              img(src='@/assets/curso/temas/tema2/tar5-5.png', alt='').mb-4
          h4.mb-0.text-center Procesos productivos
          p.mb-4.text-center Lógica en los procesos sanitarios (de higiene y presentación) del personal, como ejemplo.


    p Este tema tiene que ver con todo el establecimiento, con el personal o empleados, con la higiene en la producción o transformación de los productos, con el almacenamiento y transporte de materias primas y del producto final, con el control de procesos en la producción y la documentación, entre otros. De tal forma que se pueda garantizar la calidad en los productos alimenticios.
    p.mb-4 A continuación, su aplicación a diferentes procesos:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.bgrosado.p-4(titulo="BPM de materias primas")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p Si se sospecha que la materia prima es inadecuada, debe ser aislada de inmediato para ser rotulada y eliminarla. Las medidas que la empresa debe tener para eliminación de esta materia prima contaminada son específicas, según sea el proceso de elaboración. La materia prima debe estar almacenada en condiciones adecuadas que certifiquen su protección contra cualquier tipo de contaminante. Los productos terminados deben estar lejos del depósito para evitar la contaminación. Además, el almacenamiento se debe realizar en condiciones óptimas y el transporte debe realizarse según sean los principios higiénico-sanitarios que la empresa considere pertinentes.
          .tarjeta.bgrosado.p-4(titulo="BPM en los establecimientos")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p No pueden estar ubicados en lugares que afecten la calidad del producto, como, por ejemplo, humedad o agua, peligro de deslave, o incluso olores censurables. Las vías internas en la empresa deben estar pavimentadas de tal forma que permitan la circulación de furgones, camiones y contenedores. La estructura del establecimiento debe ser sólida y sanitariamente apropiada, además, no debe haber materiales que transmitan sustancias indeseables a los alimentos. Deben existir muros y separaciones entre las áreas para evitar la contaminación cruzada. Los equipos e instrumentos deben ser de un material que permita desmontarlos para su desinfección. Es por esto por lo que el diseño de los equipos tiene que admitir una óptima desinfección. La limpieza de las áreas debe hacerse de manera fácil y adecuada. El agua usada para la limpieza tiene que ser potable y los pisos deben tener una inclinación del 2 % para su correcto desagüe. Y finamente, la caja de revisión se debe situar en el exterior de la PPA.
          .tarjeta.bgrosado.p-4(titulo="BPM en procesadoras de alimentos")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p Las herramientas, equipos y material de trabajo se deben mantener en el mejor estado higiénico para su máxima conservación. En la limpieza y desinfección, se debe usar productos que no contaminen el proceso de las PPA. Se recomienda aplicar Planes Operativos Estandarizados de Saneamiento (POES) que muestran cómo, cuándo y dónde hacer limpieza y desinfección. 
          .tarjeta.bgrosado.p-4(titulo="BPM en la higiene personal")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p Su finalidad es garantizar la no contaminación de los alimentos por parte de las personas que entren en contacto, bien sea directo o indirecto, con los alimentos. Para ello, en las PPA debe haber instrucciones por escrito y reglas establecidas de estricto cumplimiento por parte de los estos empleados, y que son referentes a sus hábitos en la higiene personal, como por ejemplo, que se bañen todos los días; tener uñas cortadas y limpias; tener ropa interior y uniformes limpios; uso de mascarillas; mantener los guantes aseados; usar ropa adecuada para evitar la contaminación como mallas para el cabello, guantes o gorras; hombres afeitados o mínimo, que tengan protectores para la barba; no usar joyas; mantenimiento del lugar de trabajo aseado; no ingerir comida, no comer chicle ni fumar en la planta; nada de maquillaje ni lociones o perfumes; lavarse las manos con frecuencia, en especial, luego de usar el teléfono, haber tocado el piso, recipientes de basura o cualquier fuente contaminante; entre otras consideraciones.
          .tarjeta.bgrosado.p-4(titulo="BPM en sustancias peligrosas")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p Se deben rotular con una etiqueta que sea visible todas aquellas sustancias tóxicas, como, por ejemplo, solventes y plaguicidas, que puedan representar un riesgo para la salud y una fuente de contaminación para los productos alimenticios. Además de almacenarlos en áreas exclusivas alejadas de las PPA.
          .tarjeta.bgrosado.p-4(titulo="BPM en la elaboración de alimentos")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p El material que se va a destinar para empacar y envasar no puede emitir sustancias tóxicas y, además, debe estar libre de contaminantes. La elaboración de los alimentos o el proceso que sufren de transformación debe ser realizado por empleados que hayan tenido capacitación al respecto y supervisado por el personal técnico.
          .tarjeta.bgrosado.p-4(titulo="BPM en el almacenamiento y transporte")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p Como todas las prácticas anteriores, que sea en condiciones óptimas. Realizar inspecciones periódicas durante el almacenamiento. Dependiendo del tipo de producción se instauran las exigencias para el transporte de materias primas. Cuando hay alimentos congelados deben ser transportados con un correcto funcionamiento del equipo de frío, verificando que su temperatura sea la adecuada. Los vehículos, accesorios y conexiones deben estar siempre limpios, libres de tierra o desperdicio que contaminen los alimentos. Por otro lado, dependiendo del tipo de transporte, pueden variar los procesos y productos de limpieza. 
          .tarjeta.bgrosado.p-4(titulo="BPM en el procesos y documentación")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-md-12.col-sm-12  
                p También se deben tener en cuenta los análisis de laboratorios para establecer cuáles son los contaminantes físicos, químicos y microbiológicos. Con el fin de garantizar un resultado óptimo en las BPM, se necesitan los controles que certifiquen el cumplimiento de los procedimientos y los criterios para obtener la calidad deseada. Su propósito es la definición, por escrito, de los procedimientos y los controles. El sistema de control debe permitir diferenciar entre números de lotes, fecha de fabricación y vencimiento, y debe permitir seguir el rastro del producto.

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Prácticas de limpieza
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 La empresa siempre debe procurar que, de manera permanente, se hagan acciones como barrer, limpiar, enjuagar, escurrir, desinfectar. Existen algunos factores que afectan a la limpieza y desinfección de las PPA: 

    .row(data-aos="fade-down")
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema2/tar6-1.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                br
                h4.text-center Diseño de la planta
                p.mt-5.text-center Materiales de construcción. diseño arquitectónico de las instalaciones.
                br
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema2/tar6-2.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                br
                h4.text-center Suciedad 
                p.mt-5.text-center Cantidad de sucio, tipo y tiempo que lleva acumulado.
                br
                br
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tar6-3.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                br
                h4.text-center Procesos de limpieza
                p.mt-5.text-center tiempo que dura el proceso, tipo de detergente a usar y su concentración, velocidad de flujo de la solución detergente usada por la PPA, acción mecánica.

    p.mb-4 Las siguientes son las 4 zonas en las que se  debe poner atención para tener BPM:

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-3.col-md-6.col-12.mb-4
        .bgrosado.p-4.borde-redondo
          h4.mb-3.text-center Zona 1
          .row.align-items-center.justify-content-center
            .col-10
              img(src='@/assets/curso/temas/tema2/tar7-1.png', alt='').mb-4
          p.mb-4.text-center Superficies que tengan contacto con el producto, bandas transportadoras, mesas de trabajo, sierras, tuberías, tanques, rebanadoras, llenadores, herramientas. 
      .col-lg-3.col-md-6.col-12.mb-4
        .bgrosado.p-4.borde-redondo
          h4.mb-3.text-center Zona 2
          .row.align-items-center.justify-content-center
            .col-9
              img(src='@/assets/curso/temas/tema2/tar7-2.png', alt='').mb-4
          p.mb-4.text-center Exterior de los equipos, unidades de refrigeración, pisos, marcos, coches de transporte.
          .row.mb-5
          .row.mb-4
      .col-lg-3.col-md-6.col-12.mb-4
        .bgrosado.p-4.borde-redondo
          h4.mb-3.text-center Zona 3
          .row.align-items-center.justify-content-center
            .col-9
              img(src='@/assets/curso/temas/tema2/tar7-3.png', alt='').mb-4
          p.mb-4.text-center Teléfonos, montacargas, intercomunicadores, drenajes, paneles.
          .row.mb-4
          .row.mb-4
      .col-lg-3.col-md-6.col-12.mb-4
        .bgrosado.p-4.borde-redondo
          h4.mb-3.text-center Zona 4
          .row.align-items-center.justify-content-center
            .col-8
              img(src='@/assets/curso/temas/tema2/tar7-4.png', alt='').mb-4
          p.mb-4.text-center Vestidores, pasillos, cafetería, cuarto de entrenamientos, salas de reuniones, lavandería.
          .row.mb-5

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Métodos de limpieza
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema2/img12.png', alt='')
      .col-lg-8.col-md-12.col-col-sm-12
        p.mb-4 Existen dos métodos de limpieza:
        .bgrosado.borde-redondo.p-4
          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly4-1.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Limpieza en húmedo
                  p.mb-4 Utiliza detergentes y agua. Se usan los siguientes procedimientos: Pre enjuague para eliminar la suciedad y ablandarla, de tal manera que luego sea fácilmente contrarrestada por el detergente. Luego viene la limpieza con el detergente en la que se pueden tener a disposición compuestos para efectuar la limpieza, como lo son álcalis, fosfatos, ácidos, humectantes y agentes quelantes; cada compuesto se aplica según sea la necesidad.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly4-2.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Limpieza en seco
                  p.mb-4 Elimina la suciedad seca sin usar agua; se puede desarrollar a través de aspiradora, soplador (aire a presión), escoba, cepillo, raspador, etc.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly4-3.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Desinfección
                  p.mb-4 Se deben definir planes validados de limpieza y desinfección por cada área y equipo, teniendo en cuenta la frecuencia, método, producto y responsable directo de cada área. Se debe hacer una selección de detergentes y desinfectantes, además de tener claros los datos técnicos y precauciones, con disolución adecuada a la hora de desinfectar. Todas las superficies que entren en contacto con los alimentos incluyen herramientas y guantes, que deben limpiarse y desinfectarse de forma frecuente. Las superficies que se usan para fabricar alimentos de baja humedad deben estar secos y en condiciones sanitarias.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/tema2/sly4-3.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Monitoreo ambiental
                  p.mb-4 Las pruebas para el control  ambiental son una manera de calcular la efectividad de los procesos sanitarios: evaluar las superficies y aguas de enjuague bioluminiscencia. Proteínas descompuestas: método de detección colorimétrico (verde, gris, púrpura). Se deben tener claro cuáles son los puntos de monitoreo, los tanques de almacenamiento, las conexiones en sistemas, los cortadores.


    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Guía de control de plagas
        img.icon(src='@/assets/curso/temas/icon.svg') 

    .row.fondocontenedor1.justify-content-center.align-items-center.mb-5

      .row.justify-content-center.align-items-center
        .col-lg-11.col-md-12.col-sm-12
          p.mb-4.mt-4 Las plagas traen consigo un riesgo peligroso porque acarrean una gran cantidad de microorganismos y parásitos nocivos a través de su piel, fosas nasales, tracto gastrointestinal y deposiciones, por ello se deben conocer las condiciones de la planta que facilitan la invasión de plagas, especialmente en el almacenamiento de materia prima, depósitos de basura y desperdicios.

      .row.justify-content-center.align-items-center
        .col-lg-10.col-md-12.col-sm-12
          .titulo-nuevo.mt-2
            | 
            h2 Definiciones  para elaborar un Programa de Control de Plagas (PCP):

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-md-5.col-5
          img(src='@/assets/curso/temas/tema2/img13.png', alt='')
        .col-lg-7.col-md-12.col-sm
          ul.lista-ul--color.color-acento-contenido.fa-ul
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Plaga:] especie que puede llegar hacer mucho daño, siendo una amenaza para la empresa y la PPA, especialmente cuando se encuentra en gran cantidad.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Cebo:] es un veneno que se prepara en forma de comida y que va dirigida a las plagas para poderlas exterminar.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Cebar:] poner el cebo seleccionado de manera que sea ingerido por la plaga.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Infestación:] número alto de individuos que tiene una plaga y que es nocivo para la PPA.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Plaguicida:] sustancia destinada para la prevención o el control de plagas.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Rodenticida:] plaguicida que sirve para controlar roedores, ratones y ratas.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Raticida:] rodenticida que controla solamente ratas.
            li 
              i.fas.fa-bullhorn
              span.mb-0 #[b Fumigación:] método rápido para controlas las plagas como, por ejemplo, cianuro de calcio y fosfuro de hidrógeno.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-12.col-sm-12
        p La gerencia del control de calidad de la planta es la que se encarga del control de plagas. La empresa debe asignar a una persona que se encargue de la Planeación y Control de Producción (PCP), quien tendrá la autoridad para requerir la ayuda del personal y supervisar el programa. Esta persona se debe capacitar en la manipulación de plaguicidas y  control de plagas y su responsabilidad es mantener limpios y seguros los alrededores de la planta y su interior. Además, debe conocer si la planta está ubicada en sitios donde los sistemas de limpieza sean deficientes y donde se almacene una gran cantidad de desperdicios.
      .col-lg-2.col-md-3.col-3
        img(src='@/assets/curso/temas/tema2/img14.png', alt='')
    
    .row(data-aos="fade-down")
      .col-lg-6.col-md-12.col-12
        .tarjeta-avatar
          img.mt-5(src='@/assets/curso/temas/tema2/tar8-1.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                br
                br
                br
                h4.text-center.mt-5 Medidas preventivas
                ul.lista-ul--color.color-secundario.fa-ul.mt-4
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Evitar la entrada de plagas al interior de la planta de alimento.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Limitar el acceso directo a las zonas donde se encuentran los alimentos. 
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Eliminar ambientes favorables que permitan la proliferación y desarrollo de plagas. 
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 Diligencia rigurosa del programa de limpieza y desinfección.
      .col-lg-6.col-md-12.col-12
        .tarjeta-avatar
          img.mt-5(src='@/assets/curso/temas/tema2/tar8-2.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                br
                br
                br
                h4.text-center.mt-5 Medidas correctivas
                ul.lista-ul--color.color-secundario.fa-ul.mt-4.mb-5
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Contra roedores:] trampas y rodenticidas anticoagulantes. 
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Contra cucarachas:] insecticidas piretroides y del grupo fosforado.
                  li 
                    i.fas.fa-check-circle
                    span.mb-0 #[b Contra moscas:] insecticidas similares y trampas eléctricas, luz UV. Las aves son portadores de enfermedades y parásitos peligrosos para la salud (Amagua, Coronel, Quintana y Reyes, 2016).


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
