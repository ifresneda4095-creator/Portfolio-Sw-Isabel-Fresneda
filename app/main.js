
/* ── Datos slides ── */
var slidesData = [
  {
    h1: 'FANZINE',
    h2: 'graffiti fanzine',
    text: [
      'El proyecto "Graffiti" es un trabajo editorial y una exploración del arte urbano. Es palpable el concepto de arte urbano entendido como arte callejero y que aúna amistad e insurrección.',
      'A través de un concepto original, tiene como fin la exposición de las técnicas gráficas de impresión digital como tramados, semitonos, separación de canales CMYK y juegos de umbral, entre otros.'
    ]
  },
  {
    h1: 'LIBRO ARTE',
    h2: 'diseño de libro ilustrado',
    text: [
      'El poema de Bhowan es un libro de arte ilustrado que, basado en versos de una tribu tibetana, diseña su estructura y gráfica para comunicar el poema.',
      'El resultado final reflexiona sobre los procesos vitales nacer, vivir y morirse mediante formas y códigos cromáticos; a la par que se recoge a modo de atrapasueños en relación el texto.'
    ]
  },
  {
    h1: 'PUBLICACION',
    h2: 'diseño de libro ilustrado',
    text: [
      'El paso por el sello editorial de Marcablanca da lugar a la colaboración en un producto editorial que abarca el diseño y la creación de artes finales de una sección del primer dossier de Marcablanca.',
      'Trabajando con Adobe Indesign, se desarrollan y aplican estilos, retículas y espaciados con especial énfasis en la interlínea e interletrado. Por último, se prepara y envía a imprenta.'
    ]
  },
  {
    h1: 'CARCASA',
    h2: 'funda y stickers',
    text: [
      'Proyecto para encargo de La Casa de las Carcasas (LCC): conjunto de ilustraciones para carcasa y pegatinas.',
      'La marca exigía diseños para un target amplio en edad y género. El tema escogido fue "dance & friends", con diseños de carácter figurativo y líneas suaves que persiguen cierta pureza y sencillez expresiva.'
    ]
  },
  {
    h1: 'PACKAGING',
    h2: 'rediseño',
    text: [
      'El ejercicio consiste en diseñar el packaging para una nueva línea de snacks bajos en calorías de Matutano, con el objetivo de crear un diseño que no siga su identidad gráfica habitual.',
      'La propuesta final es una gráfica juguetona, de acabados sobrios y con un formato que conecta con la idealización del desayuno y la dieta sana.'
    ]
  }
]

/* ── Scroll al footer ── */
function scrollToFooter() {
  var footer = document.querySelector('.contact-footer')
  if (footer) footer.scrollIntoView({ behavior: 'smooth' })
}

/* ── Actualizar descripción ── */
function updateDescription(index) {
  var slide = slidesData[index]
  if (!slide) return
  var elH1   = document.getElementById('desc-h1')
  var elH2   = document.getElementById('desc-h2')
  var elList = document.getElementById('desc-list')
  if (!elH1 || !elH2 || !elList) return

  elH1.textContent = slide.h1
  elH2.textContent = slide.h2
  elList.innerHTML = ''
  slide.text.forEach(function(item) {
    var li = document.createElement('li')
    li.textContent = item
    elList.appendChild(li)
  })
}

var swiperEl = document.querySelector('.mySwiper')

if (swiperEl) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',   // cada slide usa su ancho CSS (560px)
    centeredSlides: true,    // la activa queda centrada, las vecinas asoman
    spaceBetween: 40,        // separación entre slides
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function(s) {
        updateDescription(s.realIndex)
      },
      slideChange: function(s) {
        updateDescription(s.realIndex)
      }
    }
  })
}

/*  GRID HOVER */
var gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    var row = item.dataset.row
    document.querySelectorAll('.grid-item[data-row="' + row + '"]').forEach(function(sib) {
      sib.classList.remove('is-selected')
    })
    item.classList.add('is-selected')
  })
})
