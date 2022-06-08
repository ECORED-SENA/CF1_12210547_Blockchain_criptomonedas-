<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Esquema de inversión Ponzi

    .fondo1
      p.mb-5 Es una operación fraudulenta de inversión que implica el pago de intereses a los inversores del dinero de nuevos inversores, que son engañados por las promesas de obtener, en algunos casos, grandes beneficios. Es un esquema de inversión que bien presentado puede resultar funcional (esquema piramidal); pero que en la mayoría de los casos se ha prestado para el fraude.
    
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-4.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 203px; height: 203px" src='@/assets/curso/tema4/img02.png')

            p.text-center.mb-0 Los esquemas de Ponzi se conocen por Carlo Ponzi, un famoso delincuente de origen italiano que estafó a muchas personas en los años 20 en Estados Unidos.

        .col-12.col-lg-4.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 203px; height: 203px" src='@/assets/curso/tema4/img03.png')
           
            p.text-center.mb-0 Sin embargo, ya se utilizaban antes. En Madrid, el primer sistema de Ponzi del que se tiene noticia se estableció por Baldomera Larra, hija de Mariano José de Larra.

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-12.col-lg-10
          .cajon.color-acento-contenido.p-4
            p.mb-4 Conocida por ser la autora del primer fraude piramidal de la historia, todo empezó con un negocio de préstamos. De familia precaria, tenía que pedir dinero por el que siempre pagaba un alto interés, cansada de esta situación decidió ser ella quien emprendiese un negocio de préstamos que rápidamente cogió fama. Se cree que llegó a recaudar 22 millones de reales y fue conocida más allá de las fronteras nacionales; su negocio se fue a pique en diciembre de 1876, cuando decidió desaparecer con todo el dinero que pudo. Dos años más tarde fue detenida y llevada a juicio. El testigo lo recogió Carlo Ponzi, quien bautiza la estafa unos años más tarde, creando su propio negocio piramidal (BBVA, 2018).

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-7
          p.mb-4.mb-lg-0 Como queda establecido este esquema Ponzi, trata de una operación que se basa en una inversión fraudulenta que parece lícita, pagando intereses a usuarios con su propio dinero a otros inversionistas principales. El pago de B es quien estará realizando la devolución de interés al pago de A. Pago de B no tiene quién le realicé el pago a menos que siga una escala de 14 nuevos inversionistas; pero al final los inversionistas terminan cayendo en el fraude piramidal. Entre las formas de saber si la inversión es una estafa, es por el porcentaje de interés que ofrece esta persona. Siempre prometen intereses sumamente altos, para llamar la atención sobre cierta inversión. Parece poco convencional una completa estafa cuando se invierte en un negocio o empresa del cual no se sabe a qué se dedica y tampoco se investiga sobre el mismo, por qué recibir tantas ganancias de un negocio del cual no se tiene conocimiento en qué es invertido este dinero (Velázquez, 2016).
        .col-8.col-lg-5
          img.miimg(src='@/assets/curso/tema4/img04.png')

      p.mb-5 Entre las características que tiene el esquema Ponzi,es que la única relación que se tiene con la empresa es con el promotor, tampoco aparece registrada como empresa o tiene algún historial de su trabajo. Los beneficios de esta solo son los que ofrece el mismo estafador, y se dirige hacia personas que no tengan mucho conocimiento sobre el tema. No aparecen redactados en ningún documento.

      .d-flex.justify-content-center.mb-4.mititulo
        h3.texto-blanco.p-2.px-5(style="background-color: #2754ba") Casos relacionados

      p.mb-5 Muchos casos famosos han sucedido bajo el esquema Ponzi, aun teniendo conocimiento de que es un modelo de larga data con aplicaciones delictivas, demuestra que sigue teniendo vigencia, no porque sea bueno sino porque sigue siendo atractivo y rentable para los delincuentes o ciberdelincuentes. Vea un par de los casos más sonados:

      figure(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema4',
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
