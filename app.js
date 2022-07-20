$(".features__link--1").click(function () {
  $(".features__content--1").addClass("active");
  $(".features__content--2").removeClass("active");
  $(".features__content--3").removeClass("active");
});
$(".features__link--2").click(function () {
  $(".features__content--1").removeClass("active");
  $(".features__content--2").addClass("active");
  $(".features__content--3").removeClass("active");
});
$(".features__link--3").click(function () {
  $(".features__content--1").removeClass("active");
  $(".features__content--2").removeClass("active");
  $(".features__content--3").addClass("active");
});

$(".humburger").click(function () {
  $(".navigation").toggleClass("d-flex");
});
