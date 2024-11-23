<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Publicidad en el punto de venta

    p La sociedad en la actualidad se basa en el consumo.   Los objetivos más importantes que tiene la publicidad son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12.p-1
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/avar1-1.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              .row.align-items-center.justify-content-center
                .col-2
                  img(src='@/assets/curso/temas/tema1/A.png', alt='')
                .col-10
                  p.mt-4 Persuadir, influenciar, motivar al cliente a una acción de compra. 
      .col-lg-6.col-md-12.col-sm-12.p-1
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/avar1-2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              .row.align-items-center.justify-content-center
                .col-2
                  img(src='@/assets/curso/temas/tema1/B.png', alt='')
                .col-10
                  p.mt-3 Informar. Esto incluye detalles sobre características, beneficios, precios, promociones y puntos de venta.
    
    p Estos dos objetivos deben estar implícitos en cualquier pieza publicitaria, y aunque no son exclusivos de la publicidad, sí exponen el porqué de su existencia para beneficio de las marcas. Su propósito será siempre la provocación, la acentuación o lograr la aceptación de la marca, producto o servicio que se expone en las diferentes piezas publicitarias, tales como comerciales de televisión, anuncios de prensa y revista, publicidad exterior, cuñas radiales, volantes, afiches, eCards, banners, etc. 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        .cajon.color-acento-contenido.p-4.mb-4
          p Ahora, en cuanto a la publicidad en el punto de venta, esta se lleva a cabo dentro de la tienda y se conoce comúnmente como #[b PLV (Publicidad en el Lugar de Venta), PPV (Publicidad en el Punto de Venta) o POP (Point of Purchase - Publicidad en el Punto de Compra).]
        p Estas siglas hacen referencia a una manera de comunicar que con frecuencia la emplean los anunciantes que mercadean sus productos en el interior de los establecimientos comerciales. Y más exactamente se refiere a las piezas publicitarias diseñadas con el propósito de exponerlas en el punto de venta para alcanzar de manera directa a los clientes. Por ello deben ser persuasivas y hacer del punto de venta, su canal de comunicación, logrando que la publicidad esté de frente al cliente, justo en el espacio correcto y en el momento preciso en el que se ejecuta una acción de compra.
      .col-lg-4.col-md-8.col-8
        img(src='@/assets/curso/temas/tema1/img1.png', alt='')

    p.mb-4 Con el fin de diferenciar la PLV de otras estrategias se hace necesario considerar lo siguiente:

    .row.justify-content-center(data-aos="fade-down") 
      .col-sm-6.col-xl-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.align-items-center
                .col-4
                  img.mb-4(src='@/assets/curso/temas/tema1/ico1.png', alt='tema1')
              p.text-center.text-white Su función es la transmisión de mensajes persuasivos que cautiven a las personas que se encuentran en el establecimiento. No confundir con diseño de envases y empaques o con #[em merchandising].
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-1.png')})`}")
      .col-sm-6.col-xl-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              .row.justify-content-center.align-items-center
                .col-4
                  img.mb-4(src='@/assets/curso/temas/tema1/ico1.png', alt='tema1')
              p.text-center.text-white Se refiere a las estrategias y acciones desarrolladas por el anunciante que mercadea sus productos en el interior del establecimiento, donde exhibe su material (PLV). Por lo tanto, el material que usa el establecimiento para la señalización de los productos no, se puede considerar (PLV). 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tar1-2.png')})`}")

    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Objetivos y funciones
    p Principalmente, se pueden clasificar en los siguientes tres: 

    .tarjeta--container.row(data-aos="fade-right").mb-4
      .col-md.tarjeta.bgazulclaro.p-5
        .row.justify-content-center.mb-4
          h4.text-center Informar
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tar2-1.png', alt='Texto que describa la imagen')
        p Se refiere a mantener informado al cliente. Sus funciones son la comunicación sobre el lanzamiento de un nuevo producto, servicio o marca, la descripción de sus características, la sugerencia de usos nuevos para el producto, el anuncio sobre un cambio que pueda tener el producto, la creación de la identidad corporativa, el posicionamiento en la mente del consumidor y el apoyo en las promociones de venta.
      .col-md.tarjeta.bgrosado.p-5
        .row.justify-content-center.mb-4
          h4.text-center Animar
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tar2-2.png', alt='Texto que describa la imagen')
        p Se refiere a persuadir y motivar. Sus funciones son la atracción de clientes nuevos, el incremento de la frecuencia de uso, la preferencia de marca, la persuasión para que el producto sea comprado ahora, la motivación al cliente para que realice un cambio de marca o establecimiento y lograr que la percepción del cliente sea positiva.
      .col-md.tarjeta.bgazulclaro.bd.p-5
        .row.justify-content-center.mb-4
          h4.text-center Recordar
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tar2-3.png', alt='Texto que describa la imagen')
        p Se refiere a la recordación de marca. Sus funciones incluyen mantener una reputación elevada del producto o servicio, recordar su presencia en el mercado y el lugar donde se puede adquirir, hacer que el cliente lo tenga en mente para futuras necesidades y evocar el producto o servicio incluso cuando no hay fechas especiales. 

    .row.justify-content-center.align-items-end(data-aos="fade-right")
      .col-lg-4.col-md-7.col-7
        img(src="@/assets/curso/temas/tema1/img2.png")
      .col-lg-8.col-md-12.col-12
        p.mb-4 En el interior del establecimiento coinciden fabricantes, detallistas y consumidores. Obviamente, aquí también están presentes sus intereses. Fabricantes y detallistas concuerdan en tener a la PLV como una herramienta vital para alcanzar a los consumidores, pero son diferentes como se indica a continuación:
        .bgrosado.borde-redondo.p-4
          SlyderF(columnas="col-lg-12 col-md-12 col-12")
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/sly1-1.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Detallista
                  p.mb-4 Traer hacia el punto de venta, mostrar las ventajas que posee el establecimiento, alcanzar una imagen determinada, posicionar el punto de venta, motivar la visita a la tienda y tener compras a futuro, dar eficacia y animación al establecimiento.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/sly1-2.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Fabricantes
                  p.mb-4 Incrementar sus marcas o productos en el punto de venta, diferenciarlos de la competencia, conseguir ubicaciones idóneas dentro del punto de venta, recalcar visualmente las propiedades del producto.
            .tarjeta.tarjeta--slyder.p-3
              .row.justify-content-center.align-items-center(titulo="xxx")
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/tema1/sly1-3.png', alt='Texto que describa la imagen')
                .col-md-8
                  h4.mb-4 Consumidor
                  p.mb-4 García, 2015, explica que a pesar de ser locales de autoservicio, por lo general necesita tener una orientación y una información dentro del almacén.

    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Características de la publicidad en el punto de venta
    p Ahora, profundizaremos en las características que debe tener dicha publicidad:

    .row.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.align-items-end
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/ps1-1.png', alt='').img125
            .col-lg
              p Debe estar ubicada en el interior del establecimiento, al lado del producto exhibido o promocionado.
          .row.align-items-end
            .col-lg
              p Los tamaños dependen del área disponible en el local, tanto en medidas como en costos.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/ps1-2.png', alt='')
          .row.align-items-end
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/ps1-3.png', alt='')
            .col-lg
              p Tiene grafismos publicitarios que fortalecen la identidad de la marca del fabricante y/o producto promocionado.
          .row.align-items-end
            .col-lg
              p Tiene un sistema que admite el posicionamiento y ubicación en el establecimiento.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/ps1-4.png', alt='')
          .row.align-items-end
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/ps1-5.png', alt='')
            .col-lg
              p Responde, por lo general, a escenarios donde existan modas, tendencias y fechas especiales, por lo que posee una gran rotación, permitiendo la renovación constante de publicidad, al mismo tiempo que mejora la percepción del usuario/comprador. 

    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p.text-center Así mismo García 2015, expone la importancia de las características que logran que sus formas, estilos y materiales sean muy diversos. Las formas y estilos pueden ser abstractos o simbólicos, que respetan y son coherentes con la filosofía y principios de la marca o del producto, además de tener en cuenta el perfil del consumidor, porque es a él a quien la publicidad se va a dirigir. Los materiales de estos productos pueden ser el plástico, vidrio, metal, cristal, madera, cartón, papel e incluso las cerámicas. 

    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Promoción
    p La promoción es un plan integral de #[em marketing] que tiene corta duración, que se destina para el logro de objetivos delimitados de manera específica por la marca. Se considera un plan integral de #[em marketing], puesto que su elaboración involucra la toma de decisiones sobre todas las variables del #[em mix de marketing]. Los objetivos de una promoción deben ser muy bien definidos y además concretos.  

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Técnicas de promoción
        img.icon(src='@/assets/curso/temas/icon.svg') 

    p.mb-4 Área del #[em marketing] donde se debe entregar una gran dosis de creatividad  para lograr mejores resultados. Entre las diferentes técnicas se pueden destacar las siguientes:

    .row.fondo1.align-items-center.p-3(data-aos="fade-down").mb-4
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-12.col-sm-12
                h4.mb-4 Eventos
                p.mb-4 Son herramientas que sirven de forma estratégica para una promoción e información de gran valor y que posee características propias y diferentes. Es un acto de comunicación motivado por la necesidad de transmitir un mensaje específico a un público determinado y limitado en cuanto al número. 
              .col-lg-4.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly2-1.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-12.col-sm-12
                h4.mb-4 Concursos
                p.mb-4 Es una de las técnicas más usadas y aún hoy continúa entregando grandes resultados a las empresas, porque, por lo general, requiere de una activa participación de las personas concursantes.  
              .col-lg-4.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly2-2.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-12.col-sm-12
                h4.mb-4 Programas de fidelización #[em focus costumer]
                p.mb-4 En la actualidad el cliente es el eje central de toda estrategia comercial, por eso, bajo el apelativo de #[em marketing] relacional, esta actividad ha estado en crecimiento. Se trata de una estrategia de mercadeo que se establece por una marca con el objetivo de premiar el comportamiento de compra de los clientes, generando un sentido de lealtad y pertenencia hacia la marca. 
              .col-lg-4.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly2-3.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-12.col-sm-12
                h4.mb-4 Promociones económicas
                p.mb-4 Se refiere a todas aquellas promociones que tienen un premio económico como por ejemplo un #[b descuento, rebajas, ofertas, 2x1, productos gratis, cupones con descuento, etc.]
              .col-lg-4.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly2-4.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-7.col-md-12.col-sm-12
                h4.mb-4 Promociones del producto
                p.mb-4 Se refiere a la técnica llamada #[em sampling], es decir, la distribución de muestras gratuitas de un producto para captar nuevos clientes. Puede existir una mayor entrega de productos por el mismo precio, tener degustaciones e incluso regalos de producto.
              .col-lg-4.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly2-5.png")

    p.mb-4 Los siguientes son los dos tipos de promoción:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-md-5.col-5
        img(src='@/assets/curso/temas/tema1/img3.png', alt='')
      .col-lg-9.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Promoción de ventas")
            .row.justify-content-center.align-items-center
              p Consiste en un grupo de estímulos que, principalmente, están diseñados a corto plazo y, por tanto, son herramientas diseñadas para provocar la compra rápida de determinados productos o servicios por parte de los clientes. Se refiere al conjunto de técnicas que son diferentes a la venta personal o a la publicidad que incitan a una acción de compra por parte de los clientes proporcionando un aumento en las ventas y una mayor eficacia en los canales de distribución.
              p Los instrumentos de promoción de ventas varían según sean los objetivos específicos trazados por cada empresa. #[b Por ejemplo, una muestra gratis incita a probar el producto, mientras que un servicio gratis genera una sólida relación a largo plazo con el detallista.]
              p Las acciones en la promoción de ventas invitan a poder añadir un aliciente para el cliente con el fin de optimizar la percepción del producto de su parte. Para tener eficacia en la promoción de ventas hay que tener en cuenta lo siguiente:
              ol.lista-ol--cuadro.lista-ol-.fa-ol
                li 
                  .lista-ol--cuadro__vineta
                    span #[b a]
                  span.mb-0 #[b Que sea conocida por el público.] Usar la publicidad para que el cliente se entere.
                li 
                  .lista-ol--cuadro__vineta
                    span #[b b]
                  span.mb-0 #[b Que sea comprendida.] Las promociones que son complejas no las va a entender el cliente y por tanto su funcionamiento no será eficaz.
                li 
                  .lista-ol--cuadro__vineta
                    span #[b c]
                  span.mb-0 #[b Que incentive.] El cliente debe sentir atracción a la promoción, la cual debe influir en su decisión de compra.
                li 
                  .lista-ol--cuadro__vineta
                    span #[b d]
                  span.mb-0 #[b Que sea alcanzable.] Las promociones de venta resultan más exitosas cuando el cliente cree en ellas y siente suficientes garantías para la obtención del resultado esperado.
          .row.col-xl-11.m-auto(titulo="Promoción estratégica")
            .row.justify-content-center.align-items-center
              p No busca necesariamente un aumento inmediato en las ventas, sino incentivar un comportamiento presente o futuro, como ofrecer un producto nuevo junto a uno conocido para que el cliente lo pruebe. También incluye campañas para motivar a empleados y personal de distribución, reducir el monto de crédito pactado con clientes, y promociones estratégicas para mejorar la imagen de la empresa (Zambrano, 2021).
              p Estas técnicas, integradas en el plan de mercadeo, buscan lograr objetivos específicos mediante estímulos y acciones temporales dirigidas a un público particular. Su finalidad es ofrecer al cliente un aliciente para que compre un producto o servicio lo más pronto posible, aumentando puntualmente las ventas (Burin, 2017).
              p Técnicas promocionales incluyen regalos publicitarios, animación del punto de venta, tarjetas de fidelización, eventos, concursos, y lanzamientos de productos. Bien planificadas, estas herramientas pueden potenciar la imagen de la marca y se pueden usar a nivel estratégico a través de diversos canales de distribución y por empresas de cualquier tamaño, nacionales o internacionales.

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Variables para considerar
        img.icon(src='@/assets/curso/temas/icon.svg') 
    
    p Si la empresa quiere lograr el éxito con la promoción se necesita tener en cuenta los siguientes ítems:

    .row.mb-3
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img(src='@/assets/curso/temas/tema1/tar3-1.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4 Originalidad. 
              p Se requiere del aporte de cierta dosis de novedad e incluso innovación en cuanto a promoción se refiere, porque de lo contrario una marca puede pasar desapercibida.
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img.mt-3(src='@/assets/curso/temas/tema1/tar3-2.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4.mt-3 Identificación plena del #[em target]
              p Saber a quién se va a dirigir la promoción, porque de esta forma puede tener una respuesta más positiva por parte de este público.

    .row.mb-3
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img(src='@/assets/curso/temas/tema1/tar3-3.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4 Incentivo #[em ad hoc.] 
              p Sin importar cuál sea la promoción, debe estar orientada a su público. Debe ser de valor para el cliente y debe tener un aliciente que motive una compra.
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img.mt-3(src='@/assets/curso/temas/tema1/tar3-4.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4.mt-3 Temporal
              p Se debe pensar en qué fechas realizar las promociones, especialmente en los momentos en que la marca vende menos productos.

    .row.mb-5
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img.mt-5(src='@/assets/curso/temas/tema1/tar3-5.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4.mt-5 Mix promocional
              p El plan promocional debe contener una diversidad de incentivos y estrategias que vayan impactando al cliente poco a poco.
        .col-md.tarjeta--boton.tema1.p-4.mx-2
          .row.align-items-center.justify-content-center
            .col-lg-3.col-md-5.col-5
              img(src='@/assets/curso/temas/tema1/tar3-6.png', alt='')     
            .col-lg-8.col-md-12.col-sm-12.p-1
              h4 Ser proactivo
              p Estar al tanto de las tendencias, hacer benchmarking (analizar a la competencia), observar el comportamiento del mercado, analizar los hábitos de compra del consumidor, entre otros. La finalidad es aprovechar las oportunidades que existan en el camino.

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Objetivos
        img.icon(src='@/assets/curso/temas/icon.svg') 
    
    p.mb-4 La promoción tiene que ser coherente con la campaña de comunicación o publicitaria, que se incluya en el plan de mercadeo de la marca, teniendo perfectamente claro cuál es la intención de la promoción:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema1/img4.png', alt='')
      .col-lg-4.col-md-12.col-sm-12
        ol.lista-ol--cuadro.lista-ol-.fa-ol.p-2
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b A]
            span.mb-0 Incrementar el tráfico en el sitio web.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b B]
            span.mb-0 Aumentar las ventas de la marca.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b C]
            span.mb-0 Neutralizar las acciones que desarrolle la competencia.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b D]
            span.mb-0 Captar nuevos clientes.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b E]
            span.mb-0 Potenciar la marca.
          li 
            .lista-ol--cuadro__vineta.acento-contenido
              span #[b F]
            span.mb-0 Lograr una liquidez económica.
      .col-lg-4.col-md-12.col-sm-12
        ol.lista-ol--cuadro.lista-ol-.fa-ol.p-2
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b G]
            span.mb-0 Fidelizar a los clientes.
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b H]
            span.mb-0 Lanzar nuevos productos.
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b I]
            span.mb-0 Incentivar equipos de venta.
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b J]
            span.mb-0 Apoyar la campaña publicitaria.
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b K]
            span.mb-0 Conseguir más fanáticos en redes sociales.
          li 
            .lista-ol--cuadro__vineta.acento-contenido 
              span #[b L]
            span.mb-0 Posicionar  la marca en la web, entre otras.

    .row.justify-content-center.align-items-center
      .col-lg-8.col-md-12.col-sm-12
        .cajon.color-primario.p-4.mb-4
          p Para terminar este apartado, se debe tener en cuenta que los productos que se promocionan deben tener la misma calidad y deben ser iguales a los que se ven en la publicidad, los tiempos de entrega deben ser mínimos, cuando se habla de entrega a domicilio; es necesario cumplir con todo lo que  se informa en la promoción (Burin, 2017).

    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Evento promocional

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-md-12.col-sm-12
        p.mb-4 Son una parte vital de las estrategias de comunicación de las empresas. La marca apela al evento cuando tiene algo que notificar. No se trata solo de lanzar un mensaje a los clientes, se trata de la transmisión de los valores de la marca y siendo capaces de envolverlo en un entorno creativo , donde se pueda transmitir experiencias y emociones significativas.
        .cajon.color-primario.p-4.mb-4
          p #[b Un evento debe ser capaz de causar el interés por parte de los medios de comunicación (a los cuales se les debe invitar para que estén presentes y luego puedan hacer un #[em Free Press], informando sobre lo ocurrido), así como también debe impactar a los clientes y público presente. Y lo más importante, la idea es lograr la fidelización de los clientes.] 
        p Un buen evento no solo sirve para transferir mensajes a los presentes, sino que, además, puede segmentar para captar la atención de un conjunto determinado de personas, o incluso de transmitir a los presentes una serie de valores, pasando de una simple información a la generación de emociones y sensaciones, lo que es otra forma de transferencia de los objetivos de un evento. 
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema1/img5.png', alt='')

    .row.mb-4
      p Los eventos #[b pueden captar la atención del cliente de manera directa y duradera, creando una relación amena y confiable.] La experiencia significativa de un evento genera un recuerdo positivo más intenso y perdurable que otros medios de comunicación. Un evento es un acto en directo y único, que reúne al emisor y al receptor en el mismo lugar, dirigido a un público específico, diseñado a medida para crear respuestas y actitudes positivas en los clientes. #[b Es una herramienta de comunicación efectiva para visibilizar la marca y notificar experiencias a través de un acto en vivo.]
      p Para que el evento promocional sea exitoso, debe cumplir con los objetivos previstos: 


    .row.mb-4(data-aos="fade-down")
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema1/tar4-1.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                p.mb-4.mt-5.text-center #[b El mensaje debe llegar sin ninguna confusión.]
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img.mt-2(src='@/assets/curso/temas/tema1/tar4-2.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mb-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                p.mb-5.mt-5.text-center #[b Debe ser claro y entendible.]
      .col-lg-4.col-md-12.col-12
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tar4-3.png' alt='')
          .row.justify-content-center.align-items-center.mt-5.mx-1
            .tarjeta--boton.tema1
              .p-4
                p.mb-4.text-center.mt-4 #[b Y el medio para transmitirlo debe ser coherente con lo que se quiere informar y con la forma en que se va a comunicar.]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        .mb-4.d-flex.ps-lg-0
          .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
            h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Clasificación y tipología
            img.icon(src='@/assets/curso/temas/icon.svg') 
        p.mt-5 El  objetivo de un evento debe definir su tipología, mientras que su formato es el medio o canal utilizado para llevarlo a cabo.
        p Por ejemplo, los eventos de motivación pueden realizarse mediante #[em networking], viajes de incentivos o convenciones. Los eventos de posicionamiento de marca pueden llevarse a cabo a través de acciones callejeras, #[em marketing] de guerrilla, #[em roadshows, happenings, marketing] ambiental o eventos promocionales. Los eventos institucionales pueden utilizar formatos clásicos como presentaciones empresariales, patrocinios de otros eventos o juntas de accionistas. Además, los eventos relacionales y co-participativos pueden organizarse mediante desayunos, almuerzos, #[em focus groups], cocreación, entre otros.
        p Así, se pueden explorar muchas más modalidades de eventos que pueden ser consideradas en las estrategias patrocinadas por una marca.
        p Pueden diferenciarse en dos grandes bloques: 
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema1/img6.png', alt='')

    .row.mb-4
      .col-12
        .tarjeta-avatar-b.correr
          .tarjeta-avatar-b__img.nueva
            img(src='@/assets/curso/temas/tema1/1.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              p.mt-1 #[b Eventos de proyección externa.] Dirigidos a un público ajeno a la empresa. Se caracterizan por una mayor superficialidad en los mensajes, ya que van dirigidos a un público muy heterogéneo. Su finalidad puede ser muy diversa: institucional, de posicionamiento, de motivación (de agentes externos), promocionales, formación, etc. La siguiente clasificación son tipos de eventos externos:

    TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="<i>Roadshows</i>")
        .row.justify-content-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab1-1.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Evento itinerante que va a permitir una mejor visibilidad de marca mediante una acción de marketing, que se fundamenta en el entretenimiento, y que se puede llevar a cabo en diferentes zonas geográficas, todo con el objetivo de promocionar la marca en estos lugares atrayendo de esta forma más clientes.Los tapones son el tipo de cierre por excelencia. Se encuentran en una amplia variedad de envases, como botellas, frascos, viales y tarros. Esta categoría es muy diversa y comprende numerosos tipos de cierres.
      .py-3.py-md-4.px-3(titulo="Aniversarios de empresa")
        .row.justify-content-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab1-2.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Son un excelente momento para festejar, aprovechando la ocasión para la creación de un evento especial con los empleados, y por qué no, con los clientes. Con el paso del tiempo este tipo de eventos se han ido transformando hasta ser considerados como vitales para la empresa, porque un aniversario es un momento que debe ser cuidado y medido al milímetro y donde existe la oportunidad para lograr un mejoramiento en la imagen de la marca proyectándose hacia el exterior como una empresa afianzada en el mercado. Se puede aprovechar para atraer nuevos clientes, fidelizar a los existentes y mejorar el conocimiento de la marca.
      .py-3.py-md-4.px-3(titulo="Ruedas de prensa")
        .row.justify-content-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab1-3.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Convocatoria que efectúa una marca para reunir a los medios de comunicación para informarles sobre algo de interés. También se les conoce como conferencia de prensa y consiste en invitar a los periodistas a un mismo lugar de tal forma que tengan la información suministrada por la empresa de manera simultánea, con el fin de que los puedan reproducir en los periódicos, revistas, programas de televisión o radio, e incluso en medios digitales a través de #[em internet], como #[em blogs] y sitios #[em web]. Por lo general se elige un espacio amplio y cómodo por fuera de la empresa como un auditorio o un teatro, aunque hay marcas que deciden hacerlo internamente, porque tienen espacios capacitados para poderlo realizar al interior de sus oficinas.
      .py-3.py-md-4.px-3(titulo="Lanzamiento de productos")
        .row.justify-content-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab1-4.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Evento que debe tener en cuenta la selección del sitio correcto para desarrollarlo. Y para ello también se debe tener en cuenta la audiencia target. Pensar si el evento lo pueden disfrutar más en persona o a través de una experiencia #[em online]. Estos detalles son vitales porque elegir el lugar perfecto para lanzar el producto es un elemento crítico que puede ser clave del éxito comercial. Un evento en vivo debe tener un lugar maravilloso que la gente se sienta atraída por asistir, lo cual ayudará a aumentar las ventas y a generar nuevo engagement por parte de los clientes. También se debe decidir cuánta gente se desea que asista, no necesariamente se requiere de muchos invitados, a veces una experiencia íntima puede impactar tanto como un evento masivo.

    .row.mb-4
      .col-12
        .tarjeta-avatar-b.correr
          .tarjeta-avatar-b__img.nueva
            img(src='@/assets/curso/temas/tema1/2.png' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-3
              p.mt-1 #[b Eventos internos.] Hacia dentro de la empresa, dirigido al personal de esta o público vinculado de forma muy estrecha, principalmente eventos de formación, motivación e incentivo. La siguiente clasificación son tipos de eventos internos:

    TabsC.color-primario.mb-5(data-aos="zoom-in-left")
      .py-3.py-md-5(titulo="<i>Open Days</i>")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab2-1.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Son jornadas de puertas abiertas donde los centros educativos ofrecen a los clientes o familias potenciales, su mejor cara para comunicar su oferta educativa, mostrar sus instalaciones, así como también los servicios adicionales que tenga el centro.
      .py-3.py-md-4.px-3(titulo="Inauguraciones")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab2-2.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Evento o festejo que tiene como fin celebrar el estreno de algo en especial, como, por ejemplo, la apertura de un nuevo local. Al hacer mención de la palabra inauguración, se refiere al #[em debut] de algo.
      .py-3.py-md-4.px-3(titulo="Convenciones de ventas")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab2-3.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Evento en el que se transmiten los nuevos objetivos y estrategias empresariales para todo el personal. Su finalidad es que estas convenciones se deben alinear con los planes estratégicos de la empresa.
      .py-3.py-md-4.px-3(titulo="Actos")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab2-4.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p El término se refiere a desayunos de trabajo, almuerzos de trabajo sin acompañante, tés de trabajo y #[em snacks] de trabajo. Estos eventos son una de las prácticas más comunes en las empresas. Generalmente, se celebran en cafeterías o en amplios salones de reuniones, aunque algunas empresas prefieren realizarlos en lugares externos, como hoteles o restaurantes.
            p La finalidad principal de estos encuentros se resume en tres puntos clave: negociación con proveedores, distribuidores o aliados estratégicos; acuerdos con proveedores, distribuidores, aliados estratégicos, empleados o sindicatos; y beneficios para proveedores, distribuidores, aliados estratégicos, empleados, sindicatos, clientes y la sociedad en general.
            p Estos eventos pueden contar con la presencia de personalidades del ámbito político nacional o internacional, cuyo propósito es proporcionar un respaldo institucional significativo.
      .py-3.py-md-4.px-3(titulo="Viajes de incentivo")
        .row.justify-content-center.align-items-center
          .col-lg-3.col-md-5.col-5.mb-4
            img(src='@/assets/curso/temas/tema1/tab2-5.png', alt='')
          .col-lg-7.col-md-12.col-sm-12
            p Ofrece a los empleados una recompensa en forma de viaje por haber logrado los objetivos o por haber culminado exitosamente un proyecto innovador. 
            p Se trata de entregar un premio a estos empleados que desarrollaron muy bien sus labores con un viaje como estímulo. Se pueden realizar individualmente, pero lo normal es que se efectúe en conjuntos de empleados, como, por ejemplo, todo un departamento interno del organigrama empresarial, porque su finalidad es fortificar lazos y relaciones entre los trabajadores. A la vez que se les premia, se les motiva para seguir progresando y mejorando día a día.

    .row.mb-4
      p Todos estos son eventos que se diseñan sobre un núcleo comunicacional en el que se debe tener claro qué se quiere obtener con el evento, qué es lo que se quiere informar, a quién se le quiere comunicar y con qué finalidad. Los eventos están encaminados hacia la obtención de logros y resultados que sean positivos para la empresa; se deben planear y programar con antelación, por ello hacen parte de los presupuestos anuales de la empresa y están consignados en los planes de mercadeo. 
      p Sin  embargo, un evento puede adoptar diferentes formatos y contemplar diversas actividades. Por lo tanto, existen clasificaciones adicionales basadas en los objetivos de los eventos, dentro de las cuales se pueden identificar los formatos que se explican en el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12.col-sm-12
        figure
          .video
            iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/D4auvvW4wXQ?si=SrgdxB6ZJhs-q1Dd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video: Tipos de formatos para eventos.

    separador
    #t_1_5.titulo-segundo.mb-4
      h2 1.5 El #[em stand]

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12.col-sm-12
        p La participación por parte de la empresa en eventos y congresos es rentable a la hora de enlazar con otros profesionales, #[b destacarse sobre la competencia e incluso captar clientes nuevos.] Y en ese sentido es muy importante conocer qué tipos de estanterías hay en el mercado para elegir la que mejor se acomode a la empresa. 
      .col-lg-4.col-md-6.col-6
        img(src='@/assets/curso/temas/tema1/img7.png', alt='')

    .mb-4.d-flex.ps-lg-0
      .d-flex.flex-wrap.align-items-center.pe-3.bg-img-blue
        h3.col.px-4.mb-0.mx-5.text-white(data-aos="zoom-in-left") Tipos de stand
        img.icon(src='@/assets/curso/temas/icon.svg') 
    p.mb-4 Lo positivo de los stands es que su #[b diseño puede ser tan versátil como la creatividad de los diseñadores.] A continuación, se presentan los tipos de stands:

    .row.fondo1.align-items-center.p-3(data-aos="fade-down").mb-4
      .col-lg-12.col-md-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
        
        .tarjetaf.p-3.mb-4
          SlyderA(tipo="b").slider-a-custom(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.col-md-12.col-sm-12
                h4.mb-4 Sistema modular
                p.mb-4 Combina estructuras de aluminio con paneles plastificados. Son versátiles y cómodos para armar, pero no son los que más sugieren para lograr una diferencia a través de una propuesta original, como sí lo puede lograr el stand de diseño libre. Por lo general, tienen medidas pequeñas y se usan en ferias de libros o artesanía. 
              .col-lg-5.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly3-1.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.col-md-12.col-sm-12
                h4.mb-4 #[em Stand custom]
                p.mb-4 Se fabrican en madera o materiales flexibles, permiten una total personalización porque permiten un diseño libre. Cuando se trata de mejorar un valor diferenciador y llamar la atención de los clientes se recomienda este tipo de stand. Es más costoso porque no es modular y porque posee una mayor envergadura, pero, por otro lado, permite diseñar diferentes ambientes, zonas de trabajo, de reunión o de entrega de información en el mismo stand. 
              .col-lg-5.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly3-2.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.col-md-12.col-sm-12
                h4.mb-4 #[em Stand] portátil
                p.mb-4 Son más rápidos de armar y transportar. Disponen de un soporte gráfico que tiene la imagen de la marca. A nivel comunicativo, sus funciones son más reducidas, pero por eso mismo no se necesitará de un presupuesto elevado. 
              .col-lg-5.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly3-3.png")
            .row.justify-content-center.align-items-center.p-4
              .col-lg-6.col-md-12.col-sm-12
                h4.mb-4 #[em Stand] creativo o temático
                p.mb-4 Se trata de los stands más evolucionados y demandan de mano de obra experta, porque su diseño y montaje necesita de mayor precisión que, por ejemplo, es stand con sistema modular. Según sea el tema o el contexto de la marca, se puede crear un diseño versátil y llamativo como por ejemplo diseñar una especie de bodega para promocionar un vino. Admite plasmar cualquier idea, pero su costo es superior. 
              .col-lg-5.col-md-6.col-9
                img(src="@/assets/curso/temas/tema1/sly3-4.png")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
