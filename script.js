const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});





function video_con() {
  var video_conn = document.querySelector("#video_container");
  var playbtn = document.querySelector("#play");
  var video = document.getElementsByTagName("video");
  
  video_conn.addEventListener("mouseover", () => {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  video_conn.addEventListener("mouseout", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  video_conn.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y,
    });
  });
  video_conn.addEventListener("scroll", function (dets) {
    gsap.to(playbtn, {
      left: dets.x,
      top: dets.y,
    });
  });
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });
  gsap.from("#page1 #video_container", {
    scale: 0,
    opacity: 0,
    delay: 1.2,
    duration: 0.5,
  });

}
video_con();

function page2(){
     var page2 = document.querySelector("#page3");

     page2.addEventListener("scroll",()=>{
            gsap.from(".child",{
                scale:0,
                opacity:0,
                duration:1,
                stagger:1
            })
     })
}

page2()

function page3() {
  var elements = document.querySelectorAll("#page3 .child");
  elements.forEach(function (element) {
    element.addEventListener("mousemove", function (element) {
      gsap.to("#cursor", {
        scale: 1.5,
        top: element.y,
        left: element.x,
      });
    });
  });
  var elements = document.querySelectorAll("#page3 .child");
  elements.forEach(function (element) {
    element.addEventListener("mouseout", function () {
      gsap.to("#cursor", {
        scale: 0,
        top: element.y,
        left: element.x,
      });
    });
  });
}

page3();



