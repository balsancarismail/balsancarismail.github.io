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
  $("#get-recipe-button").click(function () {
    // Assuming you have a button with id 'get-recipe-button'
    $.ajax({
      url: "https://www.themealdb.com/api/json/v1/1/random.php", // Fetch a random recipe
      dataType: "json",
      success: function (data) {
        console.log(data);
        var meal = data.meals[0];
        let inst = meal.strInstructions.split(".").slice(0, 3).join(".");
        var recipeCard = `
                    <div class="filtr-item" data-category="${
                      meal.strCategory === "Dessert" ? 2 : 1
                    }">
                        <div class="recipe-card">
                            <div class="recipe-image">
                                <img src="${meal.strMealThumb}" alt="Recipe ${
          meal.idMeal
        }" />
                            </div>
                            <div class="recipe-details">
                                <h3>${meal.strMeal}</h3>
                                <p>
                                    ${inst}
                                </p>
                                <button class="button show-recipe" data-dialog="${
                                  meal.idMeal
                                }">
                                    <span>View Recipe </span>
                                </button>
                            </div>
                            <div
                                id="dialog-${meal.idMeal}"
                                class="dialog"
                                title="Recipe Details"
                                style="display: none"
                            >
                                <p class="dialog-content">
                                    ${inst}
                                </p>
                            </div>
                        </div>
                    </div>`;

        // Append the new recipe card to the container. Replace 'container' with the id or class of your container.
        $(".filtr-container").append(recipeCard);

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

        window.dispatchEvent(new Event("resize"));
      },
    });
  });
});
