//var menubtn = new EzenAddClass(".button");


var topmenu = new EzenScrollClass("header",{
    baseline:10,
    //markers: true
}); 

const swiper = new Swiper('#mainvisual .swiper', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
    effect: "fade",//전환효과
    speed:800, //전환시간
    autoplay: {//autoplay 자동전환
    delay: 2500, //1.5초(=1500밀리초)마다 전환됨.
    disableOnInteraction: false,},
  
  
    // If we need pagination
    pagination: {
      el: '.page',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
});

var swipers = new Swiper("#magazine .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
});


var A = new EzenScrollClass(".scroll",{
  baseline:"bottom",
  add:-0.08,
  //markers: true
});


document.addEventListener("DOMContentLoaded", function() {
  // 오늘 날짜 구하기
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // YYYY-MM-DD 형식으로 변환
  function formatDate(date) {
      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
  }

  // 체크인 & 체크아웃 기본 값 설정
  document.getElementById("check-in").value = formatDate(today);
  document.getElementById("check-out").value = formatDate(tomorrow);

  // 체크인 날짜 변경 시 체크아웃 최소값 변경
  document.getElementById("check-in").addEventListener("change", function() {
      let checkInDate = new Date(this.value);
      let nextDay = new Date(checkInDate);
      nextDay.setDate(checkInDate.getDate() + 1);
      document.getElementById("check-out").value = formatDate(nextDay);
      document.getElementById("check-out").min = formatDate(nextDay);
  });

  // 인원 증가/감소 기능
  const minusBtn = document.querySelector(".guest-counter button:first-child");
  const plusBtn = document.querySelector(".guest-counter button:last-child");
  const countSpan = document.querySelector(".guest-counter span");

  let count = 2;
  minusBtn.addEventListener("click", function() {
      if (count > 1) {
          count--;
          countSpan.textContent = count;
      }
  });

  plusBtn.addEventListener("click", function() {
      count++;
      countSpan.textContent = count;
  });
});


//메뉴영역 스크립트


var mobilemenubtn = new EzenAddClass(".openmenu");

function showCountry(target) {
	var inp = document.querySelector(target);
	inp.checked = true;
  }