$(document).ready(function () {
  var filterizd = $(".filtr-container").filterizr({
    animationDuration: 1.5, // in seconds
    filter: "all", // Initial filter
    easing: "ease-out",
    delay: 100, // Transition delay in ms
    delayMode: "alternate", // 'progressive' or 'alternate'
    layout: "sameSize", // See layouts
    setupControls: true, // Should be false if controls are already setup
    gutterPixels: 50,
  });

  $(".btn-filter").on("click", function () {
    var filter = $(this).data("filter");
    if (filter === "all") {
      filterizd.filterizr("filter", "all");
    } else {
      filterizd.filterizr("filter", filter);
    }
  });
});
$(function () {
  $(".dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });

  $(".show-recipe").on("click", function () {
    let id = $(this).data("dialog");
    $(`#dialog-${id}`).dialog("open");
  });
});
