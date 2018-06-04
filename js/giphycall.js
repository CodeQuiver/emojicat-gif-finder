// Pseudocode for EmojiCat app
//

//create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

var topics = ["happy","sad","angry","annoyed","sneaky","funny","cool","hyper","sleepy","shy","relaxed","excited"];
//changing this to remove the word "cat", will add it in to the search url to make it integrated part of site

//initialize other variables here as needed


//take the topics array and create buttons in your HTML
// Function for displaying topic buttons
function renderButtons() {

  // Deleting the topics before adding new ones to avoid repeats
  $("#buttons-view").empty();

  $.each(topics, function(i, buttonName) {
    console.log(buttonName);
    var button = $("<button>").text(buttonName);
    button.attr("type", "button");
    button.attr("class","btn btn-md btn-info mr-2 ml-2 topic-btn");
    button.attr("data-name", buttonName);
    $("#buttons-view").append(button);      
  });

}

renderButtons();

  //create button with appropriate attributes- type="button" class="btn btn-md btn-info topic-btn"
  // we'll use the topic-button class later to attach the behavior to each button
  //append child to #buttons-view div







// //on-click function to start and stop gifs animating
// $(".gif").on("click", function() {

//       var state = $(this).attr("data-state");
//       console.log(state);

//       // =============================================

//       // Check if the variable state is equal to 'still',
//       // then update the src attribute of this image to it's data-animate value,
//       // and update the data-state attribute to 'animate'.

//       // If state is equal to 'animate', then update the src attribute of this
//       // image to it's data-still value and update the data-state attribute to 'still'
//       // =======================================

//       if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate")); //nested reference here, might be cleaner to have created a variable for each of the urls we're switching like with still and animate
//         $(this).attr("data-state","animate");

//       }

//       else if (state === "animate") {
//         $(this).attr("src",$(this).attr("data-still"));
//         $(this).attr("data-state","still");
//       }
      
//       else {
//         $(this).attr("src",$(this).attr("data-still"));
//         $(this).attr("data-state","still");
//       } //this defaults to a still image if there's something wrong and neither value matches

//     });