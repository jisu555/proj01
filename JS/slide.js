

var slides = document.querySelector('.slides'), //ul 변수잡기
    slide = document.querySelectorAll('.sildes li'), //li변수
    currentIdx = 0, //좌우버튼 클릭햇을때 현재 몇번째 슬라이드를 보는지 파악하기 위한 변수
    slideCount = slide.length, //슬라이드의 갯수 (슬라이드가 어디까지 이동햇는지 파악하기위해)
    slideWidth = 420, //배치할때 슬라이드의 너비 간격도 알아야 전체 길이를 계산할수잇기때문에 위드값 지정
    slideMargin = 15, //css랑 맞춰서
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    //복사본 만들기
    makeClone();

    function makeClone(){
      for(var i = 0; i<slideCount; i++){
        //a.cloneNode() : a요소를 복사하는 것 / a.cloneNode(true) : a요소의 자식요소까지 복사
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone'); //원래있던것과 복제된것을 구분하기 위해 클래스명 넣음
        //a.appendChild(b) : 복제된것을 기존것의 뒤에 추가하기 : a요소의 뒤에 b를 추가
        slides.appendChild(cloneSlide);
      }
      for(var i= slideCount -1; i>=0; i--){ //index번호 4번은 슬라이드카운트-1
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone'); 
        //a.prepend(b) : 요소의 앞에 추가하기
        slides.prepend(cloneSlide);
      }
      updateWidth();
      setInitialPos();
      setTimeout(function(){
        slides.classList.add('animated');
      },100);
      
    }

    function updateWidth(){
      var currentSlides = document.querySelectorAll('.sildes li');
      var newSlideCount = currentSlides.length;

      var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin +'px';
      slides.style.width = newWidth;
    }

    function setInitialPos(){
      var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
      //slides {transform:translateX(-1000px);}
      slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
    }

  nextBtn.addEventListener('click', function(){
      moveSlide(currentIdx + 1);
  });
  prevBtn.addEventListener('click', function(){
      moveSlide(currentIdx - 1);
  });

  function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount ){

      setTimeout(function(){
        slides.classList.remove('animated');
        slides.style.left = '0px';
        currentIdx = 0;
      }, 500);
      setTimeout(function(){
        slides.classList.remove('animated');
      },600);
      
    }
  }