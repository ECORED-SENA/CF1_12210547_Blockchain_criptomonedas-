<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
  
    p.mb-4(data-aos="fade-right") <i>Blockchain</i> ya no es un nombre que se escuche sin que tenga algún tipo de reconocimiento de lo que se trata y esto es debido a que es una tecnología abierta que permite su renacer en diferentes variaciones, las cuales han tomado bastante fuerza por sus innovaciones en cuanto a esquemas de inversión, seguridad, reciprocidad, beneficio, soporte, entre otros. 
    p.mb-5(data-aos="fade-left") Se invita a consultar el siguiente video de introducción al tema:

    figure.mb-5(data-aos="fade-right")
      .video        
        iframe(width="788" height="443" src="https://www.youtube.com/embed/qH_Z2nA3Ycw" title="Análisis y evaluación de aplicar blockchain en esquemas de inversión" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-0(data-aos="fade-left") Ahora, es momento de profundizar en la temática analizando y evaluando la aplicación de <i>Blockchain</i> en esquemas de inversión.
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
