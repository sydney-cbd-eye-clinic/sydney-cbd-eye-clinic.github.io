Vue.component("nav-bar", {
  template: `
  <nav class="navbar navbar-expand-lg w-100">
                    <a class="navbar-brand" href="/">
                        <img src="/images/logo-min.png" alt="Sydney CBD Eye Clinic">
                    </a>


                    <div class="header-cta">
                        <a href="tel:0292336688" class="cta-call"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                height="20.042" viewBox="0 0 20 20.042">
                                <path id="Path_1" data-name="Path 1"
                                    d="M20.015,14.709l-2.8-2.8a1.86,1.86,0,0,0-3.1.7,1.9,1.9,0,0,1-2.2,1.2A8.625,8.625,0,0,1,6.729,8.616a1.81,1.81,0,0,1,1.2-2.2,1.86,1.86,0,0,0,.7-3.1L5.83.524a2,2,0,0,0-2.7,0l-1.9,1.9c-1.9,2,.2,7.292,4.895,11.987S16.119,21.3,18.117,19.3l1.9-1.9A2,2,0,0,0,20.015,14.709Z"
                                    transform="translate(-0.539 0)" fill="#01c5f9" />
                            </svg>

                            <span>02 9233 6688</span></a>
                        <a href="/contact" class="cta-book">MAKE AN ENQUIRY</a>
                    </div>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <path
                                    d="M492,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />

                                <path
                                    d="M492,76H20C8.954,76,0,84.954,0,96s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,76,492,76z" />

                                <path
                                    d="M492,396H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h472c11.046,0,20-8.954,20-20    C512,404.954,503.046,396,492,396z" />
                            </svg></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
                        <ul class="navbar-nav  mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home </a>
                            </li>
                            <!-- <li class="nav-item">
                            <a class="nav-link" href="/about">About us</a>
                        </li> -->
                            <li class="nav-item has-children ">
                                <a class="nav-link active" href="/about.html" id="navbarDropdownMenuLink" aria-haspopup="
                                                true" aria-expanded="false">
                                    <span>About Us</span> <svg version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="123.959px" height="123.958px"
                                        viewBox="0 0 123.959 123.958" style="enable-background:new 0 0 123.959 123.958;"
                                        xml:space="preserve">
                                        <path
                                            d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                                                                                            		C125.979,34.417,123.279,28.017,117.979,28.017z" />
                                    </svg>
                                </a>
                                
                                <div class="sub-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a href="/about.html">Our Practice</a>
                                <a href="/about.html#doctors">Our Doctors</a>
                                    <a href="/our-equipment-and-technology.html">Our Equipments & Technologies</a>

                                </div>
                            </li>
                            <li class="nav-item has-children">
                                <a class="nav-link" href="#" id="patient-information" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <span>For Patients</span> <svg version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="123.959px" height="123.958px"
                                        viewBox="0 0 123.959 123.958" style="enable-background:new 0 0 123.959 123.958;"
                                        xml:space="preserve">
                                        <path
                                            d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                                                                                                                            		C125.979,34.417,123.279,28.017,117.979,28.017z" />
                                    </svg>
                                </a>
                                <div class="sub-menu" aria-labelledby="patient-information">
                                    <a href="/attending-your-surgery" ref="#">Attending Your Surgery</a>
                                    <a href="/clinic-consultation" ref="#">Clinic Consultation</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/for-referrers.html">For Referrers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/eye-conditions.html">Eye Conditions</a>
                            </li>
                            <li class="nav-item has-children ">
                                <a class="nav-link active" href="/procedures/" id="navbarDropdownMenuLink" aria-haspopup="
                                                true" aria-expanded="false">
                                    <span>Procedures</span> <svg version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" width="123.959px" height="123.958px"
                                        viewBox="0 0 123.959 123.958" style="enable-background:new 0 0 123.959 123.958;"
                                        xml:space="preserve">
                                        <path
                                            d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
                                                                                            		C125.979,34.417,123.279,28.017,117.979,28.017z" />
                                    </svg>
                                </a>
                                <div class="sub-menu" aria-labelledby="navbarDropdownMenuLink">

                                    <a href="/procedures/cataract-surgery">Cataract Surgery</a>
                                    <a href="/procedures/glaucoma-and-trabeculectomy">Glaucoma Surgery</a>
                                    <a href="/procedures/cosmetic-eyelid-surgeries">Cosmetic Eyelid Surgery</a>
                                    <a href="/procedures/entropion">Entropion</a>
                                    <a href="/procedures/ectropion">Ectropion</a>
                                    <a href="/procedures/ptosis">Ptosis Repair</a>
                                    <a href="/procedures/lasik">LASIK Vision correction</a>
                                    <a href="/procedures/botox">Botox Injections</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact us</a>
                            </li>

                        </ul>
                    </div>
                </nav>
  `,
});
Vue.component("footer-dynamic", {
  template: `
  <footer>
            <div class="container-fluid px-lg-5">
                <div class="row">
                    <div class="col-lg-3">
                        <a href="/"><img class="footer-logo" src="../images/footer-logo.svg" alt=""></a> 
                        <p class="mt-3  pr-4">Sydney CBD Eye clinic was founded by Dr Dennis Lowe – an experienced Ophthalmic surgeon and neurologist with a vision to provide access to exceptional eye care with a holistic approach.
                        </p>                   
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-md-6 col-lg-2">
                                <h5>
                                    QUICK LINKS
                                </h5>
                                <ul class="nav-menu list-unstyled">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/attending-your-surgery">Attending Your Surgery</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="/clinic-consultation" ref="#">Clinic Consultation</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/eye-conditions.html" ref="#">Eye Conditions</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6 col-lg-2">
                                <h5>
                                    ABOUT US
                                </h5>
                                <ul class="nav-menu list-unstyled">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about.html">The Practice</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about.html#doctors">Our Doctors</a>
                                    </li>


                                </ul>
                            </div>
                            <div class="col-md-6 col-lg-2">
                                <h5>
                                    PROCEDURES
                                </h5>
                                <ul class="nav-menu list-unstyled">
                                    <li class="nav-item"><a class="nav-link" href="/procedures/cataract-surgery.html">Catracat
                                            surgery</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="/procedures/glaucoma-and-trabeculectomy.html">Glaucoma
                                            surgery</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="#">Migraine Botox injection</a></li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/procedures/cosmetic-eyelid-surgeries">Eyelid surgeries</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/procedures/lasik.html">LASIK surgery</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <h5>
                                    MEDICAL CONDITIONS
                                </h5>
                                <ul class="nav-menu list-unstyled">
                                    <li class="nav-item"><a class="nav-link" href="/eye-condition/glaucoma.html">Glaucoma</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="/eye-condition/cataract.html">Cataract</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">Macula
                                            Degeneration</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/eye-condition/diabetic-retinopathy.html">Diabetic
                                            Retinopathy</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/eye-condition/blepharitis.html">Droopy
                                            Eyelids</a></li>
                                    <li class="nav-item"><a class="nav-link"
                                            href="/eye-condition/blepharitis.html">Blepharitis</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/eye-condition/dry-eye.html">Dry eyes</a>
                                    </li>

                                </ul>
                            </div>

                            <div class="col-md-6 col-lg-3">
                                <h5>
                                    CONTACT US
                                </h5>
                                <div class="footer-contact">
                                    <p>Level 1, 82 Elizabeth St, Sydney NSW 2000</p>
                                    <p>info@cbdeyeclinic.com.au</p>
                                    <p><a href="tel:0292336688"> 02 9233 6688</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                        <p>Copyright © 2020 Sydney CBD Eye Clinic. All rights reserved.</p>
                    </div>
                        </div>  
                        
        </footer>
  `,
});
var app = new Vue({
  el: "#app",
});
$(document).ready(function () {
  let sliderItems = $(".doctors-slider .slider-item").length;
  let centerSlide = Math.ceil(sliderItems / 2);
  let activeSlide = centerSlide;
  let isMobile = $(window).innerWidth() > 768;
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: $(window).innerHeight() * 0.3, // default
    mobile: false, // default
    live: true, // default
  });
  wow.init();

  $('.header .nav-item a[href="' + window.location.pathname + '"]')
    .closest("li")
    .addClass("active");
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
    rebuildSlides(activeSlide, sliderItems);
  }

  $(".slider-next").click(function (e) {
    e.preventDefault();
    if (sliderItems == activeSlide + 1) return false;

    activeSlide++;
    rebuildSlides(activeSlide, sliderItems);
  });
  $(".slider-prev").click(function (e) {
    e.preventDefault();
    if (0 == activeSlide) return false;

    activeSlide--;
    rebuildSlides(activeSlide, sliderItems);
  });

  $(window).on("scroll", function () {
    if ($(window).innerWidth() > 767) {
      if ($(this).scrollTop() > 100) {
        $(".header").addClass("narrow");
      } else {
        $(".header").removeClass("narrow");
      }
    }
  });

  function rebuildSlides(center, sliderItems) {
    console.log(center, sliderItems);
    $(".doctors-slider .slider-item").removeClass("active");
    setTimeout(() => {
      $(".doctors-slider .slider-item").eq(center).addClass("active");
    }, 50);
    for (let index = center; index > -1; index--) {
      $(".doctors-slider .slider-item")
        .eq(index)
        .css({
          transform:
            "translateX(" +
            (center - index) * 10 * -1 +
            "%) scale(" +
            (1 - 0.2 * (center - index)) +
            ")",
          opacity: 1 - 0.15 * (center - index),
          "transform-origin": "left",
          "z-index": 50 - (center - index),
        });
      $(".doctors-slider .slider-item")
        .eq(index)
        .find(".doctor-img")
        .css({ opacity: 1 - 0.3 * (center - index) });
      $(".doctors-slider .slider-item")
        .eq(index)
        .find(".doctor-info")
        .css({ opacity: 1 - 0.3 * (center - index) });
    }
    for (let index = center + 1; index < sliderItems; index++) {
      $(".doctors-slider .slider-item")
        .eq(index)
        .css({
          transform:
            "translateX(" +
            (index - center) * 10 +
            "%) scale(" +
            (1 - 0.2 * (index - center)) +
            ")",
          opacity: 1 - 0.15 * (index - center),

          "transform-origin": "right",
          "z-index": 50 - (index - center),
        });
      $(".doctors-slider .slider-item")
        .eq(index)
        .find(".doctor-img")
        .css({ opacity: 1 - 0.3 * (index - center) });
      $(".doctors-slider .slider-item")
        .eq(index)
        .find(".doctor-info")
        .css({ opacity: 1 - 0.3 * (index - center) });
    }
  }
});
