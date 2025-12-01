$(document).ready(function () {
  $(".modal").modal();

  $(".modal-trigger").on("click", function () {
    const dogName = $(this).data("dog");
    $("#selectedDog").text("You are adopting: " + dogName);
  });
});
