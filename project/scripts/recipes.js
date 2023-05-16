$(document).ready(function () {
  var filterizd = $(".filtr-container").filterizr({
    animationDuration: 1.5, // in seconds
    filter: "all", // Initial filter
    easing: "ease-out",
    delay: 100, // Transition delay in ms
    delayMode: "alternate", // 'progressive' or 'alternate'
    layout: "sameSize", // See layouts
    setupControls: true, // Should be false if controls are already setup
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
