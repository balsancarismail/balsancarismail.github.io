$(document).ready(function () {
  $("#birthday").datepicker();
});
$(document).ready(function () {
  var countries = [
    "Australia",
    "Canada",
    "USA",
    "China",
    "India",
    "Brazil",
    "Russia",
    "Mexico",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "South Africa",
    "Japan",
    "South Korea",
    "Indonesia",
    "Argentina",
    "United Kingdom",
    "Nigeria",
    "Egypt",
    "Turkey",
    "Pakistan",
    "Iran",
    "Saudi Arabia",
    "Iraq",
    "Poland",
    "Philippines",
    "Vietnam",
    "Ethiopia",
  ];

  $("#autocomplete").autocomplete({
    source: countries,
  });
});
