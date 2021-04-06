//скрипт для бургера

const burger = document.querySelector('#burger');
const hideMenu = document.querySelector('#burger-menu');

burger.addEventListener('click', function () {                 
  hideMenu.classList.toggle('is-open');
});

/*ниже скрипт для того, чтобы по нажатию в любое другое место, кроме бургера - меню сворачивалось, но он работет некорректно

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__burger') && !e.target.classList.contains('header__burger-menu')) {
    hideMenu.classList.remove('is-open');
  }
});*/


//скрипт для выпадающих списков в .header__nav-down

const button = document.querySelectorAll('.header__nav-down-link');
const dropdown = document.querySelectorAll('.header__nav-down-submenu');

button.forEach(el => {
  el.addEventListener('click', (e) => {
    dropdown.forEach(el => {el.classList.remove(('header__nav-down-active-submenu'))})
    e.currentTarget.closest('li').querySelector('.header__nav-down-submenu').classList.toggle('header__nav-down-active-submenu');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__nav-down-submenu') && !e.target.classList.contains('header__nav-down-link')) {
    dropdown.forEach(el => {el.classList.remove(('header__nav-down-active-submenu'))})
  }
});

//скрипт для плавного перехода по якорным ссылкам меню

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $("#hero").on("click","button", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
    
//скрипт селекта

const element = document.querySelector('#selectCustom');
	const choices = new Choices(element, {
			searchEnabled: false,
      itemSelectText: '',
			shouldSort: false
	});

//скрипт свайпера галлереи

const swiperGallery = new Swiper('.section-gallery__swiper-container', {

  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerGroup: 1,
 
  breakpoints: {
  
    680: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1600: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
  
  pagination: {
    el: '.section-gallery__pag',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.section-gallery__next',
    prevEl: '.section-gallery__prev',
  },

});

//скрипт аккордеона

document.addEventListener ('DOMContentLoaded', () => {
 
//для переключения блока main-content    
  document.querySelectorAll('.section-catalog__country-link').forEach (function(tabsBtn) { 
      tabsBtn.addEventListener('click', function(event) {
          event.preventDefault();
          const path = event.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__main-content').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__active-content');
              tabContent.classList.remove('section-catalog__visible-content');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__active-content')
          setTimeout(function(){
            document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__visible-content')
          },10)
          
      })
  })
//скрипт для включения рамки вокруг страны аккордеона

  document.querySelectorAll('.section-catalog__country-link').forEach (function(tabs) { 
    tabs.addEventListener('click', function(click) {
        click.preventDefault();
        const path = click.currentTarget.dataset.path;
        document.querySelectorAll('.section-catalog__country-link-active').forEach(function(tabCont) {
            tabCont.classList.remove('active');
        })
        document.querySelector(`[id="${path}"]`).classList.add('active')
    })
})


  const items = document.querySelectorAll('.section-catalog__accordion-item');
  items.forEach(el => {
      el.addEventListener('click', (e) => {
          const self = e.currentTarget;
          const control = self.querySelector('.section-catalog__accordion-control');
          const content = self.querySelector('.section-catalog__accordion-content');

          self.classList.toggle('open');

          if (self.classList.contains('open')) {
              control.setAttribute('aria-expended', true);
              content.setAttribute('aria-hidden', false);
          } else {
              control.setAttribute('aria-expended', false);
              content.setAttribute('aria-hidden', true);
          }
      });
  });

//для каждой страны свои табы, потому что иначе activ удаляется и в других

  document.querySelectorAll('.section-catalog__accordion-name-france').forEach (function(tabs) { 
      tabs.addEventListener('click', function(evt) {
          evt.preventDefault();
          const path = evt.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__author-france').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__author-active');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__author-active')
      })
  })

  document.querySelectorAll('.section-catalog__accordion-name-germany').forEach (function(tabs) { 
      tabs.addEventListener('click', function(evt) {
          evt.preventDefault();
          const path = evt.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__author-germany').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__author-active');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__author-active')
      })
  })

  document.querySelectorAll('.section-catalog__accordion-name-italy').forEach (function(tabs) { 
      tabs.addEventListener('click', function(evt) {
          evt.preventDefault();
          const path = evt.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__author-italy').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__author-active');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__author-active')
      })
  })


  document.querySelectorAll('.section-catalog__accordion-name-russia').forEach (function(tabs) { 
      tabs.addEventListener('click', function(evt) {
          evt.preventDefault();
          const path = evt.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__author-russia').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__author-active');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__author-active')
      })
  })

  document.querySelectorAll('.section-catalog__accordion-name-belgium').forEach (function(tabs) { 
      tabs.addEventListener('click', function(evt) {
          evt.preventDefault();
          const path = evt.currentTarget.dataset.path;
          document.querySelectorAll('.section-catalog__author-belgium').forEach(function(tabContent) {
              tabContent.classList.remove('section-catalog__author-active');
          })
          document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__author-active')
      })
  })

}) ;

//скрипт кнопки "Все события" и исчезновение 3-ей карточки при разрешении 768

const eventButton = document.querySelector('.section-event__button');
const cards = document.querySelectorAll('.section-event__item');

eventButton.addEventListener('click', function() {
  eventButton.classList.add('no-activ');
  cards.forEach(el => {el.classList.remove(('no-activ'))})
})

function sectionEventResize() {
  if (window.innerWidth <= 981) {
    document.querySelector('.section-event__item-3').classList.add('no-activ');
  }
  else {
    document.querySelector('.section-event__item-3').classList.remove('no-activ');
  }
}
sectionEventResize();

window.addEventListener('resize', () => {
  sectionEventResize();
});


//скрипт свайпера издания

const swiperEditions = new Swiper('.section-editions__swiper-container', {

  slidesPerView: 2,
  spaceBetween: 34,
  slidesPerGroup: 2,
 
  breakpoints: {
  
    1450: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
  
  pagination: {
    el: '.section-editions__pag',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.section-editions__next',
    prevEl: '.section-editions__prev',
  },

});

//скрипт издания спойлер 

const spoilerTitle = document.querySelector('.section-editions__filter-title');
const spoilerInfo = document.querySelector('.section-editions__checkbox-list');

spoilerTitle.addEventListener('click', function() {
  spoilerTitle.classList.toggle('section-editions__filter-title-open');
  spoilerInfo.classList.toggle('section-editions__checkbox-list-open')
})

const filterLabel = document.querySelectorAll('.section-editions__filter-label');
filterLabel.forEach(el => {
  el.addEventListener('click', () => {
  el.classList.toggle('section-editions__filter-label-open')})
  });


//скрипт свайпера проекты

const swiperProjects = new Swiper('.section-projects__swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
 
  breakpoints: {
  
    760: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  navigation: {
    nextEl: '.section-projects__button-next',
    prevEl: '.section-projects__button-prev',
  },

});

//скрипт карты 

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76014183359722, 37.61703419403621],
        zoom: 14.5,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'placemark.svg',
      iconImageSize: [20, 20],
  });


myMap.geoObjects.add(myPlacemark);
}

//скрипт валидации формы

var selector = document.querySelector("input[type = 'tel']");
var im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);


new JustValidate('.section-contacts__form', {
    rules: {
        name:{
            required: true,
            minLength: 3,
            maxLength: 35
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
    messages: {
        name: 'Как вас зовут?',

        tel: 'Укажите ваш телефон',
    }
        
});

//скрипт свайпера мобильной версии "события"
const eventSlider = document.querySelector('.section-event__slider');
let eventSwiper;
function mobileSlider() {
  if (window.innerWidth <= 600 && eventSlider.dataset.mobile == "false") {
    eventButton.classList.add('no-activ');
  cards.forEach(el => {el.classList.remove(('no-activ'))})
   eventSwiper = new Swiper(eventSlider, {
      slidesPerView: 1, 
      spaceBetween: 30,

      pagination: {
        el: '.event-swiper-pagination',
        type: 'bullets',
      },
    });

    eventSlider.dataset.mobile = 'true';

    swiperEditions.destroy();
  }
  if (window.innerWidth > 600) {
    eventButton.classList.remove('no-activ');
    cards.forEach(el => {el.classList.add(('no-activ'))})
    document.querySelector('.section-event__item-1').classList.remove('no-activ');
    document.querySelector('.section-event__item-2').classList.remove('no-activ');
    document.querySelector('.section-event__item-3').classList.remove('no-activ');
    eventSlider.dataset.mobile = 'false';
    eventSwiper.destroy();
  }
}
mobileSlider();
window.addEventListener('resize', () => {
  mobileSlider();
});