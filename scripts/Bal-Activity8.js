$(document).ready(function () {
  $("#birthday").datepicker();
});
$(document).ready(function () {
  var languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "PHP",
    "Swift",
    "Objective-C",
    "Kotlin",
    "TypeScript",
  ];

  $("#autocomplete").autocomplete({
    source: languages,
  });
});
