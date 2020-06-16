$(document).ready(function () {
  let sliderItems = $(".doctors-slider .slider-item").length;
  let centerSlide = Math.ceil(sliderItems / 2);
  let activeSlide = centerSlide;
  let isMobile = $(window).innerWidth() > 768;
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: $(window).innerHeight() * 0.3, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();

  // $.each($(".conditions-treated .condition-item"), function (i) {
  //   $(this).hover(
  //     function () {
  //       console.log(i);
  //       $(this).css({
  //         opacity: "0.6 !important",
  //       });
  //     },
  //     function () {
  //       // $(".conditions-treated .condition-item").css({ opacity: "1" });
  //     }
  //   );
  // });

  $(".conditions-treated .condition-item").hover(
    function () {
      $(
        ".conditions-treated .condition-item h3,.conditions-treated .condition-item p"
      )
        .stop()
        .animate({ opacity: "0.5" }, 300);
      $(this).find("h3").stop().css({ opacity: "1" });
      $(this).find("p").stop().css({ opacity: "1" });
    },
    function () {
      $(
        ".conditions-treated .condition-item h3,.conditions-treated .condition-item p"
      ).animate({ opacity: "1" }, 300);
    }
  );
  if (isMobile) {
    $(".doctors-slider .slider-item")
      .eq(activeSlide - 1)
      .addClass("active");

    $.each($(".doctors-slider .slider-item"), function (index) {
      let offset = index - centerSlide + 1;
      // console.log(offset);
      if (offset < 0) {
        $(this).css({
          transform: "translateX(-100px) scale(0.8)",
          "transform-origin": "left",
        });
      }
      if (offset > 0) {
        $(this).css({
          transform: "translateX(100px) scale(0.8)",
          "transform-origin": "right",
        });
      }
    });
  }

  $(".slider-next").click(function (e) {
    e.preventDefault();
    let activeSlideIndex = $(".doctors-slider .slider-item.active").index();
    if (sliderItems - activeSlideIndex == 1) return false;
    $(".doctors-slider .slider-item")
      .eq(activeSlideIndex)
      .css({
        transform: "translateX(-100px) scale(0.8)",
        "transform-origin": "left",
        opacity: "0",
      })
      .removeClass("active");
    $(".doctors-slider .slider-item")
      .eq(activeSlideIndex + 1)
      .css({
        transform: "translateX(0) scale(1)",
        "transform-origin": "center",
        opacity: "1",
        "z-index": 25,
      })
      .addClass("active");
  });
  $(".slider-prev").click(function (e) {
    e.preventDefault();
    let activeSlideIndex = $(".doctors-slider .slider-item.active").index();

    if (sliderItems - activeSlideIndex == sliderItems) return false;

    $(".doctors-slider .slider-item")
      .eq(activeSlideIndex)
      .css({
        transform: "translateX(100px) scale(0.8)",
        "transform-origin": "right",
        opacity: "0",
      })
      .removeClass("active");
    $(".doctors-slider .slider-item")
      .eq(activeSlideIndex - 1)
      .css({
        transform: "translateX(0) scale(1)",
        "transform-origin": "center",
        opacity: "1",
        "z-index": 25,
      })
      .addClass("active");
  });
});
