// Pseudocode for EmojiCat app
//

//create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

var topics = ["happy","sad","angry","annoyed","sneaky","funny","cool","hyper","sleepy","shy","relaxed","excited"];
//changing this to remove the word "cat", will add it in to the search url to make it integrated part of site


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

// ==================================not yet added section- adding new topic buttons via the form=====================
    // fill in code here


// ================================ WORKING SECTION NOW events when topic buttons are clicked =================================

//onclick function to display gifs- should be listening for buttons with ".topic-btn" class

  // store data-name from the clicked button in a variable to use in the queryurl
  // In this case, the "this" keyword refers to the button that was clicked
  var topic = $(this).attr("data-name");

  //construct query url
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "-cat&api_key=dc6zaTOxFJmzC&limit=10";
        //note I hard-coded the "-cat" so that all searches will be for cat images like "happy-cat" using a dash instead of space since that's what giphy's search function uses in the urls
  console.log(queryURL);
       

  //AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response); //logs entire object including all 10 results
      
      //add another for each loop to cover each result in the array

          // create image element
          // add source attribute to image- get image path inside response object, ending with .fixed_height.url, put the still version in the src attribute
          
          // add additional attributes such that it can toggle between the still and animated versions of the url- imitate the image attributes in the example at the bottom of the html file
          
          // add necessary classes to element for bootstrap spacing

          // append the image to #gifs-view
  });













 // ==================================not yet added section- function to start and stop gifs animating=====================
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

//END animation function

// call function to add all buttons to page
renderButtons();