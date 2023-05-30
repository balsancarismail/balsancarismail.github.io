$(document).ready(function () {
  // preload images
  $("#image_list a").each(function () {
    var swappedImage = new Image();
    swappedImage.src = $(this).attr("href");
  });

  // set up event handlers for links
  $("#image_list a").click(function (evt) {
    evt.preventDefault(); // cancel the default action of the link

    // get the new image and caption
    var imageURL = $(this).attr("href");
    var caption = $(this).attr("title");

    // fade out the current image and caption
    $("#image").fadeOut(1000);
    $("#caption").fadeOut(1000, function () {
      // this callback function will be executed after the fadeOut completes

      // update the image and caption
      $("#image").attr("src", imageURL);
      $("#caption").text(caption);

      // fade in the new image and caption
      $("#image").fadeIn(1000);
      $("#caption").fadeIn(1000);
    });
  }); // end click

  // move focus to first thumbnail
  $("li:first-child a").focus();
}); // end ready
