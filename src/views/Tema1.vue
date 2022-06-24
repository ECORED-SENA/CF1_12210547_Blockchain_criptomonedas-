<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Esquemas de inversión

    p.mb-5(data-aos="fade-right") Para iniciar es bueno comprender que un esquema de inversión es un enfoque definido para invertir en algún proyecto individual o colectivo. Su objetivo es lograr una inversión, propia o de terceros a disposición de un proyecto, empresa o producto, con el fin de incrementar las ganancias derivadas del mismo o garantizar su viabilidad.
    
    .fondo1.p-0(data-aos="fade-left")
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-10.col-12.px-lg-5.mx-0
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 Hay muchos tipos de inversiones, históricamente se han manejado inversiones tradicionales que son las que todos conocen con productos como acciones, mercados cambiarios, bonos, obligaciones, etc. En pocas palabras, todos aquellos activos clásicos de inversión, también otros tipos de inversiones alternativas algunas muy conocidas como el sector inmobiliario, fondos de cobertura, <i>commodities</i> y las nuevas inversiones tecnológicas.

      p.mb-5(data-aos="fade-right") Los esquemas de inversión con <i>Blockchain</i> pueden ser considerados como inversiones alternativas, convirtiéndose cada vez más en un estándar en los sectores comerciales, vea cómo se pueden diferenciar estos tipos de inversiones:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-4.col-12.px-0.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/img02.png' alt='AvatarTop')
            .tarjeta.w-100.px-5.py-5(style="background-color: #1b3f5e; border-top-right-radius: 0px; border-bottom-right-radius: 0px;")
              .text-white.p-4.pt-5
                h2.text-center(style="font-size: 32px") Inversiones tradicionales
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Perfil de alta liquidez.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Activos en mercados públicos.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Alta correlación con los mercados.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Accionistas pasivos.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Rendimientos generados principalmente por beta con baja dispersión entre los inversores.

        .col-lg-4.col-12.px-0
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/img03.png' alt='AvatarTop')
            .tarjeta.w-100.px-5.py-5(style="background-color: #2754ba; border-top-left-radius: 0px; border-bottom-left-radius: 0px;")
              .text-white.p-4.pt-5
                h2.text-center(style="font-size: 32px") Inversiones alternativas
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Baja liquidez potencial.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Activos en mercados públicos y privados.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Baja correlación con los mercados.
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline Accionistas activos (a veces propietarios únicos).
              div
                img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
                p.ms-1.mb-0.text-white.d-inline A menudo centrados en mercados ineficientes.


    .fondo2.p-0.pt-5
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-12
          p.mb-4 Si bien hay diferencias que no se ven tan favorables, incluir estas inversiones alternativas permite tener mayor diversificación, por lo que puede potencialmente reducir la volatilidad, tener mejores rendimientos y generar mayores niveles de rentas para una cartera, aquí radica su importancia y relevancia en todo sistema financiero.
          p.mb-lg-0.mb-4 El <i>bitcoin</i> se ha convertido en la inversión de moda. A pesar de su popularidad, muchos ahorradores todavía no se atreven a invertir en criptodivisas por su gran volatilidad y la falta de regulación. Por eso, muchos inversores prefieren invertir directamente en <i>Blockchain</i>.
        .col-lg-6.col-10
          img(src='@/assets/curso/tema1/img05.png')

      p.mb-4 Hay varios esquemas de inversión aplicados actualmente con esta tecnología; pero por su misma condición de tecnología emergente, todavía permite muchas posibilidades de nuevos esquemas a descubrir o desarrollar.
      p.mb-5 Algunas de estas formas de invertir en <i>Blockchain</i> son:

      .row.justify-content-center.pb-5(data-aos="fade-left")
        .col-12.col-md-6.col-lg-3.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 159px; height: 159px" src='@/assets/curso/tema1/img08.png')

            h3.text-center.mb-5 Inversión directa en empresas
            p.text-center.mb-0 La más sencilla y concurrida forma ha sido comprar empresas o acciones de estas que tengan cotización o prestigio y que a través de esta tecnología utilicen y ofrezcan desarrollos o soluciones.


        .col-12.col-md-6.col-lg-3.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 159px; height: 159px" src='@/assets/curso/tema1/img09.png')

            h3.text-center.mb-5 Fondos de inversión de <i>Blockchain</i>
            p.text-center.mb-0 otra forma es a través de estos fondos de inversión, la ventaja de su uso radica en que estos productos financieros en contraste a las acciones pueden realizarse a precios más bajos. La cartera de estos fondos se compone por valores de diversas empresas dentro o fuera de un país, gracias a esto, si hay alguna caída bursátil, otra compañía lo puede compensar.

        .col-12.col-md-6.col-lg-3.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 159px; height: 159px" src='@/assets/curso/tema1/img10.png')

            h3.text-center.mb-5 Fondos de inversión cotizados (ETF) de <i>Blockchain</i>
            p.text-center.mb-0 estos fondos de inversión cotizados o <i><i>exchange</i>-traded funds</i> (ETF) se tratan de fondos indexados que replican el funcionamiento de un índice bursátil, buscando tener una rentabilidad similar a la del índice.

        .col-12.col-md-6.col-lg-3.d-flex.mb-lg-0.mb-4
          .tarjeta1.w-100.p-4.pt-5  
            div.d-flex.justify-content-center.mb-5        
              img(style="width: 159px; height: 159px" src='@/assets/curso/tema1/img11.png')

            h3.text-center.mb-5 Inversiones con criptomonedas
            p.text-center.mb-0 Este es el caso más conocido y extendido del esquema de inversión, donde se invierte a través de las criptomonedas, en este esquema se profundizará más adelante.

    p.mb-4 En un estudio llamado <i>Blockchain</i> 50 de <i>CB Insights</i>, esta tecnología tiene uno de los mercados más atractivos para la inversión de capital privado. Según el informe, 1 de cada 4 inversionistas en todo el mundo está apostando por esa tecnología.
    p.mb-4 Ejemplo de esto es la adquisición por parte de <i>PayPal</i> de Cury, empresa que desarrolla un sistema de seguridad digital, adquirida por 200 millones de dólares o la de <i>Mastercard</i>, al adquirir <i>CipherTrace</i>, especializada en seguridad <i>Blockchain</i>, buscando con esta adquisición fortalecer su seguridad y evitar el robo de información y fraudes.
    p.mb-5 La creciente demanda de la aplicación de esta tecnología en todos los sectores económicos abre grandes oportunidades para que cada vez más inversionistas inviertan en su desarrollo.

    .d-flex.justify-content-center.mb-4(data-aos="fade-right")
      h3.texto-blanco.p-2.px-5(style="background-color: #2754ba") Validación de datos en <i>Blockchain</i>

    .fondo3.py-5.mb-4
      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-6.col-12
          p.mb-4 Se refiere a la forma en que las transacciones realizadas en <i>Blockchain</i> son aprobadas, mediante un mecanismo llamado consenso. Este mecanismo es el que define si un registro o información se puede inscribir en un bloque. 
          p.mb-4 Una red <i>Blockchain</i> puede “ponerse de acuerdo” en una transacción de muchas formas, dependiendo del ámbito de aplicación del proceso que esté sucediendo.
          p.mb-4 Si bien la tecnología <i>Blockchain</i> es sumamente segura, no está exenta de intentos de sabotaje o intentos de jaqueos, para evitar problemas de este tipo se manejan estos protocolos o mecanismos de consenso, los mismos permiten realizar las siguientes funciones:
          div
            img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
            p.ms-1.mb-0.d-inline Funcionar sin una autoridad central.
          div
            img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
            p.ms-1.mb-0.d-inline Mantener la seguridad y la transparencia dentro de una red de <i>Blockchain</i>.
          div
            img.img-lista.d-inline(src='@/assets/curso/tema1/img04.svg')
            p.ms-1.mb-0.d-inline Ayudar a establecer una única versión de la <i>Blockchain</i>.

        .col-lg-6.col-10
          img(src='@/assets/curso/tema1/img13.svg')

    p.mb-5(data-aos="fade-right") A continuación, se desarrollan los “consensos” más usados:

    .fondo4.p-0
      TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
        .row.justify-content-center.py-4.py-md-5.px-4(titulo="PoW" :icono="require('@/assets/curso/tema1/img14.svg')")
          .col-12.col-lg-7
            h4.mb-4 Prueba de trabajo (PoW)
            p.mb-0.mb-lg-0.mb-4 Es uno de los de consensos más populares y especialmente usado en criptoactivos. Los nodos muestran su esfuerzo (<i>proof-of-work</i>), compitiendo por resolver un complicado problema criptográfico que exige muchos cálculos y, por ende, muchísima energía en computación. 
          .col-10.col-lg-5
            img(src='@/assets/curso/tema1/img19.png')
        .row.justify-content-center.py-4.py-md-5.px-4(titulo="PoS" :icono="require('@/assets/curso/tema1/img15.svg')")
          .col-12.col-lg-7
            h4.mb-4 Prueba de participación (PoS)
            p.mb-0.mb-lg-0.mb-4 Es una alternativa al PoW para <i>Blockchain</i> públicas. En este caso, los nodos validan los nuevos bloques de la cadena en una especie de lotería, en donde los boletos serían el <i>token</i> de turno. Este tipo de mecanismos es muy ágil, pero puede tener una desventaja, por ejemplo, en quienes tengan más criptoactivos, más criptoactivos ganan. 
          .col-10.col-lg-5
            img(src='@/assets/curso/tema1/img20.png')
        .row.justify-content-center.py-4.py-md-5.px-4(titulo="DPoS" :icono="require('@/assets/curso/tema1/img16.svg')")
          .col-12.col-lg-7
            h4.mb-4 Prueba de participación delegada (DPoS)
            p.mb-0.mb-lg-0.mb-4 Es una versión del PoS en el que los propietarios del criptoactivo eligen testigos (de allí su denominación delegada), permitiendo una gran descentralización que puede beneficiar potencialmente a pequeños propietarios; pero puede facilitar posibles prácticas anticompetitivas que podrían promover la cartelización, lo cual iría en contra de la libre y sana competencia.
          .col-10.col-lg-5
            img(src='@/assets/curso/tema1/img21.png')
        .row.justify-content-center.py-4.py-md-5.px-4(titulo="PoET" :icono="require('@/assets/curso/tema1/img17.svg')")
          .col-12.col-lg-7
            h4.mb-4 Prueba de tiempo transcurrido (PoET)
            p.mb-0.mb-lg-0.mb-4 Este algoritmo, desarrollado por <i>Hyperledger Sawtooth</i>, sirve para redes públicas o privadas; define tiempos de espera aleatorios para generar nuevos bloques por nodos estocásticamente elegidos. Es muy imparcial, pero depende del nivel de procesamiento que tengan los nodos de la red.
          .col-10.col-lg-5
            img(src='@/assets/curso/tema1/img22.png')
        .row.justify-content-center.py-4.py-md-5.px-4(titulo="PBFT" :icono="require('@/assets/curso/tema1/img18.svg')")
          .col-12.col-lg-7
            h4.mb-4 Tolerancia práctica de fallos bizantinos (PBFT)
            p.mb-0.mb-lg-0.mb-4 Su nombre hace referencia al cuento de los generales bizantinos. En este caso, los generales se conocen y confían los unos en los otros, simplemente para generar conceptos se generan votaciones en varias rondas. Esta modalidad es ideal para sistemas permisionados (entre otros usados por <i>Hyperledger Fabric</i>, y NEO). 
          .col-10.col-lg-5
            img(src='@/assets/curso/tema1/img23.png')


    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo5")
          .row.justify-content-center(titulo="Tener un problema que responder")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img25.png')            
            .col-lg-9
                p.mb-0 No todas las llaves abren las mismas puertas, ni todas las tecnologías resuelven los mismos problemas. De la misma forma el <i>Blockchain</i> solo será relevante para su negocio si sus capacidades le permiten resolver su problema de una mejor manera que su competencia.
          .row.justify-content-center(titulo="Identifique su visión de esta tecnología")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img26.png')            
            .col-lg-9
                p.mb-0 Una misma tecnología puede tener muchos usos y <i>Blockchain</i> no es la excepción, actualmente existen dos tendencias principales en cuanto a su aplicación, en primer lugar, las criptomonedas como una forma de descentralizar la confianza y por otro lado, el <i>Blockchain</i> conceptualizado como una forma para optimizar procesos y aumentar su seguridad.
          .row.justify-content-center(titulo="Es una tecnología emergente")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img27.png')            
            .col-lg-9
                p.mb-0 Todo lo que se desarrolla actualmente son las bases de la infraestructura que en unos años soportará la innovación que transformará a los negocios con <i>Blockchain</i>. Los trabajos de hoy conllevan a un alto riesgo de fracaso; pero una importante ganancia en conocimiento y habilidades.
          .row.justify-content-center(titulo="La información es de carácter público")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img28.png')            
            .col-lg-9
                p.mb-0 <i>Blockchain</i> propone que la información sea un bien común. Los miembros de la cadena tienen acceso al código de la solución descentralizada, ver su estructura y los usuarios que lo utilizan. Casi todo lo puede ver de forma pública, es un paradigma completamente diferente. Si su modelo de negocio tiene implicaciones de secrecía, este modelo no es el ideal.
          .row.justify-content-center(titulo="Es un modelo de negocio <i>peer to peer</i>")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img29.png')            
            .col-lg-9
                p.mb-0 Al ser una tecnología descentralizada permite conectar a las personas sin importar el lugar geográfico. Así como Uber y Airbnb conectan la oferta y la demanda, <i>Blockchain</i> es una tecnología de negocio <i>peer to peer</i> (P2P). El mejor modelo de negocio en esta tecnología es dejar de creer que deben tener el control de todo el flujo de información y simplemente ser un agregador, una pequeña parte del proceso o modelo de negocio.
          .row.justify-content-center(titulo="Grandes retos necesitan grandes talentos")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img30.png')            
            .col-lg-9
                p.mb-0 El talento es lo que marcará la pauta y tener una ventaja competitiva en el mercado. Estudios de mercado señalan que por cada programador de <i>Blockchain</i> hay 14 ofertas de trabajo. Son pocas las personas que conocen y utilizan esta tecnología, por lo que es necesario invertir en la capacitación del talento.
          .row.justify-content-center(titulo="Descentralización de la innovación")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img31.png')            
            .col-lg-9
                p.mb-0 El comportamiento digital de las personas y la adopción de dispositivos conectados provoca un escenario donde la innovación tiene un panorama enorme de posibilidades. De esta forma, cualquier persona puede construir un modelo de negocio con <i>Blockchain</i> y competir contra cualquier empresa, incluso, sin tener una infraestructura robusta.
          .row.justify-content-center(titulo="Planeación estratégica")
            .col-lg-1
            .col-lg-2.col-8
              img.mb-lg-0.mb-4(src='@/assets/curso/tema1/img32.png')            
            .col-lg-9
                p.mb-0 Al ser una tecnología emergente existen tres diferentes maneras de abordarla. Una de ellas es incorporar pequeñas mejoras a un modelo de negocio existente, otra es desarrollar una nueva línea o división para la empresa, y por último la creación de un elemento innovador que dé vida a nuevas industrias.

    p.mb-0(data-aos="fade-right") Definitivamente, cualquier proceso que requiera de una transacción o transferencia de información es posible transformarlo con <i>Blockchain</i>, optimizarlo y hacerlo mucho más seguro, por lo que las empresas están atentas a las tendencias de esta tecnología.
</template>

<script>
export default {
  name: 'Tema1',
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
