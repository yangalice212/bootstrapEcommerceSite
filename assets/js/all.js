"use strict";

$(document).ready(function () {
  $("#removeModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    var title = button.data("title");
    var modal = $(this);
    modal.find(".modal-title").text("確認刪除 " + title);
  });
}); // Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  "use strict"; // Fetch all the forms we want to apply custom Bootstrap validation styles to

  var forms = document.querySelectorAll(".needs-validation"); // Loop over them and prevent submission

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    }, false);
  });
})();

$(".list-card-favor a").click(function (e) {
  e.preventDefault();
  $("i", this).toggleClass("far fa-heart fas fa-heart");
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 60) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});
$(".gotop").click(function () {
  $("html ,body").animate({
    scrollTop: 0
  }, 800);
});
//# sourceMappingURL=all.js.map
