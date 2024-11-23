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
