
  function initCarousel() {
  //Выбираем основной элемент контейнера карусели с именем класса «карусель».
  let carousel = document.querySelector('.carousel');
  //Выбираем внутренний элемент контейнера внутри карусели.
  let inner = carousel.querySelector('.carousel__inner');
  //Выбираем правую кнопку со стрелкой навигации внутри карусели.
  let carouselArrowRight = carousel.querySelector('.carousel__arrow_right');
  //Выбираем левую кнопку со стрелкой навигации внутри карусели.
  let carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  //Получам ширину внутреннего контейнера карусели.
  let width = inner.offsetWidth;
  //Инициализируем переменную положения значением 0.
  let position = 0;
  //Изначально скрываем левую кнопку со стрелкой навигации.
  carouselArrowLeft.style.display = 'none';

  carousel.addEventListener('click', slider);
  

  //Функция проверяет элемент, на который было произведено событие (event), и выполняет определенные действия в зависимости от класса этого элемента. Если элемент имеет класс "carousel__arrow_left", то вызывается функция arrowLeft(target). Если элемент имеет класс "carousel__arrow_right", то вызывается функция arrowRight(target). В остальных случаях ничего не происходит.
  function slider(event) {
    //Для каждого элемента в наборе, получает первый элемент, который совпадает с селектором при движении вверху по DOM дереву элементов.
    let target = event.target.closest('.carousel__arrow');
    //Метод contains объекта classList проверяет наличие CSS класса элемента.
    if (target.classList.contains('carousel__arrow_left')) {
      //Вызываем функцию arrowLeft
      arrowLeft(target);
    } else if (target.classList.contains('carousel__arrow_right')) {
      arrowRight(target);
    }

  }

  //Эта функция вызывается при нажатии левой кнопки со стрелкой навигации. Он смещает внутренний контейнер карусели влево на ширину одного элемента карусели.

  function arrowLeft(target) {
    if(position !== 0) {position--;}
    if(position == 0){carouselArrowLeft.style.display = 'none'};
    inner.style.transform = `translateX(${position * -width}px)`;
    if(position > 2){carouselArrowRight.style.display = 'none'}
    else {carouselArrowRight.style.display = ''};
  }
//Эта функция вызывается при нажатии правой кнопки со стрелкой навигации. Он смещает внутренний контейнер карусели влево на ширину одного элемента карусели.
  function arrowRight(target) {
    if(position < 3) {position++;}
    if(position > 2){carouselArrowRight.style.display = 'none'};
    inner.style.transform = `translateX(${position * -width}px)`;
    if(position == 0){carouselArrowLeft.style.display = 'none'}
    else {carouselArrowLeft.style.display = ''};
  }
}


