<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2 
      h1 Uso de los contratos inteligentes

    .fondo1.py-4
      .row.align-items-center.justify-content-center(data-aos="fade-right")
        .col-lg-7.col-12
          p.mb-4 Los contratos inteligentes o <i>smart contract</i> (SC) surgieron para minimizar los peligros de la seguridad y la centralización. Un movimiento denominado <i>Cypherpunk </i>se dio a la tarea de crear una moneda nativa específicamente virtual con las mismas propiedades y funcionalidad del dinero en efectivo. Años después esta iniciativa se hace realidad al publicar el protocolo <i>Bitcoin</i>. Este protocolo fue inventado por <i>Satoshi Nakamoto</i> en 2008, quien logró resolver ese dilema con la implementación de la tecnología <i>Blockchain</i>.
          p.mb-4 Este sistema permitía ejecutar transacciones usando una potente red que se blindaba a la censura y a los ataques de seguridad, lo que dio origen a los SC. Los SC funcionan siguiendo una sencilla instrucción como “si/cuando… entonces…”, instrucciones escritas en código de una <i>Blockchain</i> (IBM, 2022).
          p.mb-4.mb-lg-0 El proceso de un SC es el siguiente: una red de computadoras ejecuta una cantidad X de acciones; cuando se logran verificar y se da como cumplido unas condiciones predeterminadas, <i>Blockchain</i> se actualiza al completarse la transacción, lo que significa que esta no puede cambiarse y únicamente las partes interesadas podrán ver los resultados. Las acciones que se pueden ejecutar en un SC son muy variadas, por ejemplo, registro de un vehículo, impresión de un boleto, envío de notificaciones, entre otros.
        .col-lg-5.col-8
          img.img-lista.d-inline(src='@/assets/curso/tema2/img02.png')
    
    .fondo2.pt-5
      .row.align-items-center.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10.col-12
          .cajon.color-acento-contenido.p-4.mb-5
            p.mb-4 En un SC se pueden estructurar todas las cláusulas necesarias para satisfacer a todas las partes interesadas y que logre satisfacer las necesidades de seguridad que certifique que las tareas se ejecuten satisfactoriamente.
            p.mb-0 Para establecer los términos en el SC, las partes interesadas determinan cómo se representan las transacciones y sus datos en la cadena de bloques, es decir, acordar el “si/cuándo… entonces…”, explorando las posibles excepciones y definiendo el marco para solución de disputas (IBM, 2022).

          .d-flex.justify-content-center.mb-5
            h3.texto-blanco.p-2.px-5(style="background-color: #2754ba") Beneficios de los contratos inteligentes

          p Los SC tienen ciertas características que generan confianza en los usuarios, además de satisfacer ciertas necesidades que los contratos tradicionales no han podido resolver.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12.d-flex
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img04.png' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h3 Velocidad, eficiencia y precisión
                p.mb-0 Debido a que son digitales y están automatizados, no se debe verificar grandes cantidades de documentos físicos, porque podría incurrir en errores humanos, por lo tanto, al cumplirse la condición el SC se ejecuta de inmediato.

        .col-lg-6.col-12.d-flex(data-aos="fade-left")
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img05.png' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h3 Ahorros
                p.mb-0 Los SC no requieren intermediarios, ahorrando en costos de tiempo y dinero.

        .col-lg-6.col-12.d-flex(data-aos="fade-right")
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img06.png' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h3 Confianza y transparencia
                p.mb-0 Como no hay un tercer involucrado en la transacción (por ejemplo, en el sistema clásico un notario es el encargado de firmar lo estipulado por las partes) y sumado a ello, todos los registros son encriptados y las transacciones solo son compartidas entre los participantes, no existe necesidad del cuestionamiento de la información.

        .col-lg-6.col-12.d-flex(data-aos="fade-left")
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img07.png' alt='AvatarTop')
            .tarjeta.tarjeta--azul
              .p-4
                h3 Seguridad
                p.mb-0 Todos los registros en las transacciones de <i>Blockchain</i> son encriptados, lo que hace casi imposible alterar la información. Además, cada registro se apila a los anteriores y posteriores creando un libro de registros distribuido, por lo tanto, si un pirata informático quisiera alterar algún registro, tendría que cambiar toda la cadena.


    .d-flex.justify-content-center.mb-4
      h3.texto-blanco.p-2.px-5(style="background-color: #2754ba") Lenguajes de contrato inteligente

    p.mb-4(data-aos="fade-right") Los SC se pueden redactar y programar en lenguajes de sintaxis sencilla como <i>Python</i> o <i>JavaScript</i>. Los dos lenguajes de programación más soportados son <i>Solidity</i> y <i>Vyper</i>; sin embargo, los desarrolladores senior suelen usar <i>Yul</i> o <i>Yul</i>+, ver figura.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-12
        .titulo-sexto.color-acento-botones
          span <b>Figura 1.</b> Ejemplo de SC
        figure
          img(src='@/assets/curso/tema2/img08.png')
          figcaption Nota. Tomado de <i>Ethereum</i>.org (2022). Lenguajes de contrato inteligente. https://ethereum.org/es/developers/docs/smart-contracts/languages/#solidity


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los contratos se pueden aplicar en nuevas formas de financiación y crowdfunding distribuido, como es el caso de la emisión de <i>tokens</i> en la red ETH con los contratos ERC20, crear canales de pago como se utilizan por la red <i>Lightning Network</i> o descentralizar la economía colaborativa (Esic, 2018).

    p.mb-5(data-aos="fade-right") Otros usos de los SC están relacionados con el almacenamiento de los registros, actividades comerciales, gestión de la cadena de suministro, sistema hipotecario, mercado inmobiliario, contratos de trabajo, protección de <i>copyright</i>, reclamaciones a aseguradoras, procesos electorales, servicios de salud, red de Internet de las cosas (IoT). Vea varios usos:

    SlyderC.mb-0(:datos="datosSlyder" data-aos="fade-left")

    .fondo3.pt-2.pb-5

      p.mb-4(data-aos="fade-right") En lo que coinciden la mayoría de los profesionales que han estado al tanto de los avances de la tecnología <i>Blockchain</i> y los SC, es que llegaron para revolucionar el mundo del proceso tradicional, en el que los intermediarios están próximos a acabarse.
      p.mb-5(data-aos="fade-left") Para poder ver con mayor eficacia el uso y aplicación de los contratos inteligentes vea los siguientes ejemplos:

      table.tablita.mb-4
        tr
          td.p-0
            img.cuadradito.d-inline(src='@/assets/curso/tema2/img15.svg')
          td.px-2.p-0
            h4.mb-0 Salvaguardar la eficacia de los 
            hr.m-0
            h4.mb-0 medicamentos

      p.mb-5 Sonoco e IBM están trabajando para reducir los problemas en el transporte de medicamentos que salvan vidas, aumentando la transparencia de la cadena de suministro. Desarrollado por IBM <i>Blockchain</i> <i>Transparent Supply</i>, <i>Pharma Portal</i> es una plataforma basada en <i>Blockchain</i> que rastrea productos farmacéuticos con control de temperatura. a través de la cadena de suministro para proporcionar datos confiables y precisos en múltiples partes (IBM, 2022).
      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center.ps-3
              .col-3.col-sm-2.col-lg-1.p-0
                img(src="@/assets/curso/tema2/img21.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Sonoco + IBM:
                    p.text-small.mb-0 Salvaguardando la eficacia de los medicamentos que salvan vidas con <i>Blockchain</i>
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://cutt.ly/MAd0oUJ" target="_blank")
                      span Ir a sitio web
                      i.fas.fa-link

      table.tablita.mb-4
        tr
          td.p-0
            img.cuadradito.d-inline(src='@/assets/curso/tema2/img15.svg')
          td.px-2.p-0
            h4.mb-0 Inspirando confianza en las relaciones entre minoristas y 
            hr.m-0
            h4.mb-0 proveedores

      p.mb-5 The <i>Home Depot</i> utiliza contratos inteligentes en <i>Blockchain</i> para solucionar rápidamente las disputas con los proveedores. A través de la comunicación en tiempo real y una mayor visibilidad de la cadena de suministro están construyendo relaciones más sólidas con los proveedores, lo que da como resultado más tiempo para el trabajo fundamental y la innovación (IBM, 2022).
      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.col-12
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center.ps-3
              .col-3.col-sm-2.col-lg-1.p-0
                img(src="@/assets/curso/tema2/img21.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0                    
                    p.text-small.mb-0 Las resoluciones de facturación más rápidas construyen relaciones más sólidas.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.ibm.com/case-studies/the-home-depot/" target="_blank")
                      span Ir a sitio web
                      i.fas.fa-link
      
      table.tablita.mb-4
        tr
          td.p-0
            img.cuadradito.d-inline(src='@/assets/curso/tema2/img15.svg')
          td.px-2.p-0
            h4.mb-0 Hacer que el comercio internacional sea más rápido y 
            hr.m-0
            h4.mb-0 eficiente

      p.mb-5 Al unirse a we.trade, la red de financiamiento comercial convocada por IBM <i>Blockchain</i>, las empresas están creando un ecosistema de confianza para el comercio global. Como plataforma basada en <i>Blockchain</i>, we.trade utiliza reglas estandarizadas y opciones de negociación simplificadas para reducir la fricción y el riesgo, al mismo tiempo que facilita el proceso de negociación y amplía las oportunidades comerciales para las empresas y los bancos participantes (IBM, 2022).
      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center.ps-3
              .col-3.col-sm-2.col-lg-1.p-0
                img(src="@/assets/curso/tema2/img21.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0                    
                    h4.mb-1 IBM <i>Blockchain</i>:
                    p.text-small.mb-0 Transformando la financiación del comercio y el comercio.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.ibm.com/case-studies/the-home-depot/" target="_blank")
                      span Ir a sitio web
                      i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Almacenamiento de los registros',
        texto:
          'Los SC pueden almacenar registros, liberarlos, actualizarlos y eliminarlos de manera autónoma cuando se requiera.',
        imagen: require('@/assets/curso/tema2/img09.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Actividades comerciales',
        texto:
          'Una de las principales características de los SC es la descentralización, con base en ello las actividades financieras tradicionales eliminan los <i>broker</i>, haciendo que la actividad sea más sencilla, disminuyendo costos y tiempo.',
        imagen: require('@/assets/curso/tema2/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gestión de la cadena de suministro',
        texto:
          'Los SC a través de su <i>Blockchain</i> almacenan toda la información de la cadena de suministros (desde la recolección hasta la entrega del producto) en los registros que se van apilando y enviando a todas las partes interesadas.',
        imagen: require('@/assets/curso/tema2/img11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sistema hipotecario',
        texto:
          'Los SC mediante su <i>Blockchain</i> contiene toda la información de las partes (deudas, ganancias, gastos, etc.), por lo tanto, todos los procedimientos que pueda contener la hipoteca se harán de forma más sencilla, económica, rápida, automática y transparente, donde todos tendrán la información en tiempo real y su firma se hará de forma digital.',
        imagen: require('@/assets/curso/tema2/img12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mercado inmobiliario',
        texto:
          'El SC contiene la información de la propiedad (propietario, comprador, avalúo, ubicación, etc.), así con las firmas digitales. El SC se encarga de verificar que toda la información que ejecutará el contrato y las partes recibirán su correspondiente producto (dinero de venta, propiedad de compra).',
        imagen: require('@/assets/curso/tema2/img13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Contratos de trabajo',
        texto:
          'Tanto el empleado como el empleador sabrán en tiempo real todos los términos y condiciones de la relación laboral, y si se actualiza alguna cláusula, ambas partes sabrán de antemano su cambio; de este modo, todo será transparente para las partes interesadas.',
        imagen: require('@/assets/curso/tema2/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Protección de <i>copyright</i>',
        texto:
          'Los SC garantizan el contenido mediante sus registros de los derechos y propiedades de una colaboración en conjunto de algún proyecto realizado, garantizando el contenido colaborativo de cada una de las partes involucradas.',
        imagen: require('@/assets/curso/tema2/img15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reclamaciones a aseguradoras',
        texto:
          'Los SC pueden simplificar los trámites engorrosos y desgastantes tanto para el reclamante como para la aseguradora. Mediante los registros del <i>Blockchain</i> del SC todo el proceso se automatiza y se ejecuta todo sin cometer errores.',
        imagen: require('@/assets/curso/tema2/img16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Procesos electorales',
        texto:
          'El sistema de votación manual podrá ser reemplazo con los SC del <i>Blockchain</i>. Todo el proceso será más seguro, rápido e imposible de decodificar para generar algún fraude.',
        imagen: require('@/assets/curso/tema2/img17.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Servicios de salud',
        texto:
          'Los informes de exámenes, medicamentos, suministros, historia clínica de pacientes, se podrán almacenar en un SC, así todas las personas con una clave de acceso pueden verificar la información y mantener actualizados los registros.',
        imagen: require('@/assets/curso/tema2/img18.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Red de Internet de las cosas (IoT)',
        texto:
          'La integración entre el <i>hardware</i> de IoT y el <i>software</i> de los SC hace que estos se vuelvan más robustos y poderosos para satisfacer todas las necesidades del mundo actual, por ejemplo, en la automatización de máquinas, medición de riesgos en agricultura, predicción de desastres naturales, identidad biométrica, entre otros.',
        imagen: require('@/assets/curso/tema2/img19.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
