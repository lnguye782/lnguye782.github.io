let slideIndex = 1;

function showSlides(n) {
  const slides = $(".mySlides");
  const dots = $(".demo");
  const captionText = $("#caption");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.hide();
  dots.removeClass("active");

  slides.eq(slideIndex - 1).show();
  dots.eq(slideIndex - 1).addClass("active");
  captionText.html(dots.eq(slideIndex - 1).attr("alt"));
}

$(document).ready(function () {
  showSlides(slideIndex);

  // Load dynamic includes
  $("#header").load("includes/header.html");
  $("#footer").load("includes/footer.html");
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
