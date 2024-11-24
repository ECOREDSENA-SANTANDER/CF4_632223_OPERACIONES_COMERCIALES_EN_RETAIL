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
    
    .titulo-sexto.color-acento-contenido
      h5 Figura 2. 
      | Análisis “PESTEL” 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/fig2.png', alt='La imagen expone un diagrama circular del análisis PESTEL, que se utiliza para evaluar el entorno macroeconómico de una empresa. El diagrama está dividido en seis segmentos, cada uno representando una de las categorías del análisis: Político, Económico, Social, Tecnológico, Ecológico y Legal. Cada segmento está coloreado y etiquetado claramente para destacar su categoría correspondiente. En el centro del círculo, hay un ícono de edificios y una turbina eólica, simbolizando el entorno empresarial en su conjunto.', style='')
            .tarjeta.color-acento-contenido.p-4(x="63%" y="16%" numero="+")
              h5 Políticos.
              p.mb-0 Son aquellos factores que se asocian con la clase política que pueden influir positiva o negativamente a futuro en la actividad empresarial. Se deben analizar temas como la política fiscal, los tratados de libre comercio, posibles cambios políticos en los gobiernos, entre otros, que pueden afectar seriamente en las actividades empresariales.
            .tarjeta.color-primario.p-4(x="70%" y="20%" numero="+")
              h5 Económicos.
              p.mb-0 Se refiere al poder adquisitivo de la sociedad, las personas sólo compran bienes o servicios si poseen dinero. Por esta razón, en este factor se deben tener en cuenta indicadores como el PIB, el tipo de cambio, el índice de inflación, los intereses, el cambio del dólar o del euro, entre otras. Con estos indicadores se podrá realizar un pronóstico de ventas más ajustado y real.
            .tarjeta.color-secundario.p-4(x="80%" y="10%" numero="+")
              h5 Tecnológicos.
              p.mb-0 Es un análisis sobre cómo las nuevas tecnologías pueden cambiar la sociedad en un futuro y cómo pueden afectar a la empresa. La tecnología puede influir en las estrategias de ventas, y por otro lado puede impulsar la capacidad empresarial para vender con mejores resultados. La inversión I+D de los países o continentes, nuevas tecnologías relacionadas con el contexto empresarial, el nacimiento de tecnologías disruptivas, cambios en el uso de energía, nuevos métodos de producción y distribución son algunos de los puntos que ameritan ser analizados desde el contexto de la empresa.
            .tarjeta.color-acento-botones.p-4(x="90%" y="5%" numero="+")
              h5 Socioculturales.
              p.mb-0 Se refiere a desarrollar un análisis sobre qué elementos de la sociedad pueden influir en la empresa y cómo están cambiando. Se busca el poder identificar aquellas tendencias que tiene la sociedad actual. En esta variable se deben tener presentes el comportamiento demográfico, los cambios en el nivel de ingresos, los cambios en gustos o modas que puedan repercutir en el nivel de las compras, la diversidad cultural, los valores éticos, los cambios en cómo nos relacionamos o comunicamos, y hasta rasgos religiosos que sean interesantes tenerlos en cuenta. Con este análisis se pueden identificar los artículos que satisfacen mejor las necesidades del cliente. 
            .tarjeta.p-4(x="100%" y="16%" numero="+" style='border-radius: 8px; background-color: #74D578')
              h5 Ecológicos.
              p.mb-0 Se refiere a estar al enterado de los posibles cambios normativos desde el contexto ecológico, y del nivel de conciencia social de este movimiento. La naturaleza siempre nos da enseñanzas importantes, más aún en la actualidad porque se ha comenzado a visualizar los resultados negativos por culpa de los abusos en los recursos naturales. Por eso, antes de lanzar un producto al mercado, se debe analizar si la materia prima para la producción y fabricación del producto afecta negativamente a la ecología.
            .tarjeta.p-4(x="63%" y="16%" numero="+" style='border-radius: 8px; background-color: #F3AB1D')
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

    .row.justify-content-center.align-items-center
      .col-lg-12
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/fig3.png', alt='La imagen detalla  un diagrama circular que representa los factores del entorno interno de una empresa. El círculo está dividido en seis segmentos, cada uno con un ícono distinto: una bombilla (Capacidad de investigación, desarrollo y tecnología), un trofeo (filosofía empresarial, objetivos), un gráfico de barras (desempeño, atención al cliente), un globo terráqueo (capacidad de producción y cadena de suministros), un símbolo de dólar (Recursos financieros) y un ícono de conversación (recursos humanos). Se sugiere por la ubicación la interconexión y la diversidad de estos factores internos. ', style='')
            .tarjeta.color-acento-contenido.p-4(x="63%" y="16%" numero="1")
              h5 Metas, objetivos y cultura
              p.mb-0 Tiene que ver con la filosofía empresarial, o sea sus principios, objetivos, misión, visión y valores de una empresa. Se convierten en su ruta de navegación, su norte. 




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
