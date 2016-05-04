$(document).ready(function() {

// top three columns
    $(document).on("click", "#change-red", function(){
      $("#changing-divs")
        .css("background-color", "red");
    });
    $(document).on("click", "#change-green", function(){
      $("#changing-divs")
        .css("background-color", "green");
    });
    $(document).on("click", "#change-blue", function(){
      $("#changing-divs")
        .css("background-color", "blue");
    });

  // bottom three columns
    $(document).on("click", "#change-red", function(){
      $("#changing-divs")
        .css("background-color", "red")
        .addclass("make-larger");
    });
    $(document).on("click", "#change-green", function(){
      $("#changing-divs")
        .css("background-color", "green")
        .addclass("make-larger");
    });
    $(document).on("click", "#change-blue", function(){
      $("#changing-divs")
        .css("background-color", "blue")
        .addclass("make-larger");
    });
});
