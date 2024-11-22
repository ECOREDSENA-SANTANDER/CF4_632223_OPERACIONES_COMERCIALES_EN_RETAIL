<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Las ventas comerciales radican, principalmente, en el desarrollo de estrategias y acciones promocionales diseñadas por las empresas, para iniciar a comprender este mundo de las ventas en el formato comercial, se invita a visitar  el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
    figure
      .video
        iframe(iframe width="560" height="315" src="https://www.youtube.com/embed/_fkL1XLuXBg?si=Gh2ryF_90DoaBVm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Ventas en el formato comercial: Introducción.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
