

const clients = new Swiper('.clients__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const reviews = new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const videos = new Swiper('.reviews__videos', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const work = new Swiper('.work__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

const why = new Swiper('.why__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', ({ target }) => {
    if (target.closest('.faq__item')) target.closest('.faq__item').classList.toggle('show');
  })

  document.addEventListener('click', ({ target }) => {
    const linkText = target.closest('.pays__info-link')
    if (linkText) linkText.previousElementSibling.classList.toggle('hidden');

    document.querySelector('.hidden') ? linkText.innerText = 'Читать больше' : linkText.innerText = 'Скрыть';
  })
})


