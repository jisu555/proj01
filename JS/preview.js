//영상 pip
pipButton.hidden = !document.pictureInPictureEnabled;

      function runPip(){
           if (!document.pictureInPictureElement) {
           video.requestPictureInPicture()
           .catch(error => {
             // Video failed to enter Picture-in-Picture mode.
           });
         } else {
           document.exitPictureInPicture()
           .catch(error => {
             // Video failed to leave Picture-in-Picture mode.
           });
         }
       }

       pipButton.addEventListener('click', function() {
         runPip();
       });


//확대이미지
// class, id 속성을 가져와서 변수에 할당.
var pics = document.getElementsByClassName("pic");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");

//for 루프를 돌리면서 썸네일을 클릭 시 showLightbox() 함수를 호출
for (var i = 0; i<pics.length; i++){
    pics[i].addEventListener("click", showLightbox);
        //pics배열의 i번째 요소를 클릭 시 showLightbox() 함수를 호출
}


//썸네일을 클릭 시 img 태그의 원본 이미지를 적용하는 함수
function showLightbox() {
    var bigLocation = this.getAttribute("data-src");    //data-src의 값을 가져와서 bigLocation 변수에 할당
    lightboxImage.setAttribute("src", bigLocation);
    lightbox.style.display = "block";      /*화면에 출력되도록 설정 : none => block */
}

//출력된 화면을 클릭 시 다시 원래대로 되돌리는 함수 
lightbox.onclick = function() {
    lightbox.style.display="none";
}