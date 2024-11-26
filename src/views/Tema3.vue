<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La comunicación comercial

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-md-12.col-sm-12
        p Es el grupo de instrumentos de comunicación que usa la empresa de forma masiva o personalizada para hacer promoción de una marca, producto o servicio, con el fin de llamar la atención del público objetivo al que van dirigidos (Wolters, 2021).
        .cajon.color-acento-contenido.p-4.mb-4
          p La comunicación es uno de los cuatro instrumentos básicos del mercadeo, que se clasifican tradicionalmente en publicidad, relaciones públicas, promoción de ventas y venta personal. En la actualidad se han sumado otras dos, el #[em buzz marketing] o el #[em marketing]  experiencial. Por eso, hoy se suele hablar de comunicación 360º o Comunicación Integrada de #[em Marketing] (CIM). La idea es que ayude a lograr los objetivos de marketing a través de la comunicación, buscando la eficacia en las estrategias y su respectivo plan de acción, conociendo lo mejor posible al cliente objetivo e impactándolo a través de todos los medios que sean posibles (según el músculo financiero de la marca) y con una estrategia envolvente.
      .col-lg-4.col-md-6.col-6
        //img(src='@/assets/curso/temas/', alt='')




</template>

<script>
export default {
  name: 'Tema3',
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
