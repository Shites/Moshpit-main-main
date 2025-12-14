$(document).ready(function () {

    function parsePrice(text) {
        var clean = text.replace(/[^0-9]/g, '');
        return clean === '' ? 0 : parseInt(clean, 10);
    }

    function formatPrice(num) {
        return '$' + num.toLocaleString('en-US');
    }

    function updateSummary() {
        var total = 0;
        var ongkirTotal = 0;
        var totalFinal = 0;

        $('.counter-input').each(function () {
            var qty = parseInt($(this).val(), 10);
            if (isNaN(qty) || qty < 1) {
                qty = 1;
                $(this).val(1);
            }

            // FIX selector: class kamu NAMANYA original-price
            var item = $(this).closest('.rounded-lg');
            var priceEl = item.find('.original-price');
            var ongkirEl = item.find('.ongkir');

            if (priceEl.length === 0) {
                return;
            }

            var price = parsePrice(priceEl.text());
            var ongkir = parsePrice(ongkirEl.text());
            
            
            ongkirTotal += (ongkir * qty);
            total += (price * qty);
            totalFinal += total + ongkirTotal;

            
            
        });

        $('.summary-original').text(formatPrice(total));
        $('.summary-total').text(formatPrice(total));
        $('.ongkir-total').text(formatPrice(ongkirTotal));
        $('.totalFinal').text(formatPrice(total + ongkirTotal));
    }

    $('.increment-button')
        .off('click')
        .on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var input = $(this).siblings('.counter-input');
            var value = parseInt(input.val(), 10);
            input.val(isNaN(value) ? 1 : value + 1);

            updateSummary();
        });

    $('.decrement-button')
        .off('click')
        .on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var input = $(this).siblings('.counter-input');
            var value = parseInt(input.val(), 10);

            if (isNaN(value) || value <= 1) {
                input.val(1);
            } else {
                input.val(value - 1);
            }

            updateSummary();
        });

    updateSummary();
});


const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}

const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);



    // Zoom Function on Team Section
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom").css({
          backgroundSize: (100 + scroll/250)  + "%",
          top: -(scroll/10)  + "%",
  
      
      });
  }

  );
    

    // Shrink the navbar 
    navbarShrink();


});

// floating chat
function openForm() {
  document.getElementById("myForm").style.display = "block";

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 3000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});
  

// Quantity Button
jQuery(document).ready(($) => {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val( val+1 ).change();
    });

    $('.quantity').on('click', '.minus', 
        function(e) {
        let $input = $(this).next('input.qty');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 
    });
});

const slider_produk = document.querySelector('.row-produk');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider_produk.classList.add('active');
      startX = e.pageX - slider_produk.offsetLeft;
      scrollLeft = slider_produk.scrollLeft;
    });
    slider_produk.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider_produk.addEventListener('mouseup', () => {
      isDown = false;
      slider_produk.classList.remove('active');
    });
    slider_produk.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider_produk.offsetLeft;
      const walk = (x - startX) * 1; //scroll-fast
      slider_produk.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });











