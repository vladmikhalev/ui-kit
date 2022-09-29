


const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  position: 'bottom',



});

// let arialabel = element.getAttribute('aria-label');
// element.closset('.choices').setAttribute('aria-label', arialabel);

// Yandex map 


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758429425895166, 37.61549027554769],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13
  });


  var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/marker_map.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-12, -30]
  });


  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

}


// ScrollBar

// validation form


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);





const validation = new JustValidate('#form');


validation





  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
      color: 'blue'

    },

    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя слишком короткое',
    },

    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },

  ])

 

  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },

    
    {
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Номер должен содержать 10 цифр',
    }

   
  ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимые значения e-mail',
      },
    ]);




//  tooltip


tippy('#myButton', {
  content: 'Глава 2, страница 176',
});
