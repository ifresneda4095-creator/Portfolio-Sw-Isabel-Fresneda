/* ── Scroll al footer ── */
function scrollToFooter() {
  var footer = document.querySelector('.contact-footer')
  if (footer) footer.scrollIntoView({ behavior: 'smooth' })
}

/* ── Actualizar descripción ── */
function updateDescription(slide) {
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

/* ── Inicializar Swiper JSON ── */
var swiperEl = document.querySelector('.mySwiper')

if (swiperEl) {
  fetch('app/slides.json')
    .then(function(res) { return res.json() })
    .then(function(data) {
      var slidesData = data.slides

      var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          init: function(s) {
            updateDescription(slidesData[s.realIndex])
          },
          slideChange: function(s) {
            updateDescription(slidesData[s.realIndex])
          }
        }
      })
    })
    .catch(function(err) {
      console.error('Error cargando slides.json:', err)
    })
}

/* ── Grid hover ── */
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
