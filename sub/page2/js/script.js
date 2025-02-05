//상단 js
var menubtn = new EzenAddClass(".btn");


var topmenu = new EzenScrollClass("header",{
    baseline:100,
    //markers: true
}); 



//탭메뉴 js
var btns = document.querySelectorAll(".Trip_txt_list a"/*대상바꿈*/); //버튼의 배열

function removeActive(b,t){
    var actives = document.querySelectorAll(".Trip_section .active");/*전체영역바꿈*/
    //NodeList를 배열로 변환
    var actives = Array.from(actives);
    t = Array.from(t);
    //filter메소드를 통한 t배열과 동일한 요소를 제거한 후, 새로운 배열생성
    var re = actives.filter((x) =>!t.includes(x));

    re.forEach(function(at){
        if(at!==b && at!==t)at.classList.remove("active");
    });
}

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.preventDefault(); //태그의 기본이벤트 실행을 막는다.(p411)
        var href = this.getAttribute("href");   //".red"
        if(href == "All"){
            var targets = document.querySelectorAll(".Trip_img_list li");/*컨텐츠(대상)바꿈*/
        }else{
            var targets = document.querySelectorAll(href);
        }
        targets.forEach(function(target){
           target.classList.add("active"); 
        }); 
        this.classList.add("active");
        removeActive(this, targets);
    });  
}); //end:forEach()
