$(document).ready(function () {
  $("#nav_list a").click(function (event) {
    event.preventDefault(); // prevent the default action

    const fileName = $(this).attr("title"); // get the title attribute
    $.getJSON("/json_files/" + fileName + ".json", function (data) {
      // clear the main element
      $("main").empty();

      // create new elements with the retrieved data
      const speaker = data.speakers[0]; // considering only the first speaker from the data
      const newContent = `
                <h1>${speaker.title}</h1>
                <img src="${speaker.image}">
                <h2>${speaker.month}<br>${speaker.speaker}</h2>
                <p>${speaker.text}</p>`;

      // add the new content to the main element
      $("main").html(newContent);
    }).fail(function () {
      console.log("An error has occurred.");
    });
  });
}); // end ready
