// Pseudocode for EmojiCat app
//add document ready function later//

// ============================== Declare Global Variables ====================================================
var topics = ["funny", "happy","sad","bored", "angry","annoyed","sneaky","lol","cool","crazy","sleepy","grumpy","relaxed","excited"];
  //initial array to be used for topic buttons

// ============================== End Global Variables ====================================================

// ============================== Declare Functions Here ====================================================

// Function for displaying topic buttons
function renderButtons() {
  // Deleting the topics before adding new ones to avoid repeats
  $("#buttons-view").empty();

  // main function loop
  for (i = 0; i < topics.length; i++) {
  var buttonName = topics[i];
  var button = $("<button>").text(buttonName);
  button.attr("type", "button");
  button.attr("class","btn btn-md btn-info mr-2 ml-2 topic-btn");
  button.attr("data-name", buttonName);
  $("#buttons-view").append(button);    
    
  };
}


//function runs when a topic button is clicked - AJAX call

function topicClicked(input) {

  //construct query url
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  input + "+cat&api_key=dc6zaTOxFJmzC&limit=10";

  //Later may want to add offset property to search and possibly randomize the offset for more random results
  //Alternate other search- random endpoint with tag of input parameter, but only returns one result so would need to be looped to build an object array
  // var queryURL = "https://api.giphy.com/v1/gifs/random?tag=" +
  // input + "+cat&api_key=dc6zaTOxFJmzC";
        //note I hard-coded the "+cat" so that all searches will be for cat images like "happy+cat" per documentation for handling phrases
  console.log(queryURL);

  //AJAX call
  $.ajax({
  url: queryURL,
  method: "GET"
  }).then(function(response) {

  console.log(response); //logs entire object including all 10 results

  //since response is entire object, store the part leading to the level with multiple
  // entries in variable so it can iterate correctly later
  var results = response.data;
  console.log(results); //this should log the array of 10 results
    
    // loop through each result item in results array
    for (i = 0; i < results.length; i++){

        //get still and animated version urls and store in variables
        var stillGif = results[i].images.fixed_height_still.url;
        var animatedGif = results[i].images.fixed_height.url;

        // console.log("stillGif is: " + stillGif);
        // console.log("animatedGif is: " + animatedGif);

        // create image element
        var imgOutput = $("<img>");

        // add source attribute (still version), classes, data-state
        imgOutput.attr("src", stillGif);
        imgOutput.attr("class","gif m-2 rounded").attr("data-state", "still");
        
        // add additional attributes data-still and data-animate such that it can toggle between the still and animated versions of the url- imitate the image attributes in the example at the bottom of the html file
        imgOutput.attr("data-still", stillGif);
        imgOutput.attr("data-animate", animatedGif);

        // append the image to #gifs-view div
        $("#gifs-view").append(imgOutput);
    }
  });
}

function toggleGifState() {

  //pull and store values
  var state = $(this).attr("data-state");
  var still = $(this).attr("data-still");
  var animate = $(this).attr("data-animate");

  if (state === "still") {
  $(this).attr("src", animate);
  $(this).attr("data-state","animate");
  }

  else if (state === "animate") {
    $(this).attr("src", still);
    $(this).attr("data-state","still");
  }

  else {
    $(this).attr("src", still);
    $(this).attr("data-state","still");
    console.log("toggleGifState function error - defaulted to still image- state is " + state);
  } //this defaults to a still image if there's something wrong and neither value matches, also prints error to console

}

// ============================== End Function Declarations ====================================================


// ================================ Main Code Body - Events and Function Calls =================================

//onclick event to display gifs- should be listening for buttons with ".topic-btn" class- calls function to query ajax then calls function to print array to page
$("#buttons-view").on("click", ".topic-btn", function() {
  //clear previous gifs from div before adding new ones
  $("#gifs-view").empty();

  // store data-name from the clicked button in a variable to use in the queryurl
  var topic = $(this).attr("data-name");

  topicClicked(topic);
} );


// ==================================not yet added section- adding new topic buttons via the form=====================
  // triggered by submit button on form- study note - can be bound directly to the button without separate listener because button is original part of the DOM
  // get value from input, trim spaces, and store in variable
  // push new input to topics array
  // call renderButtons function to re-print the array with new buttons added



//  onclick event to animate and stop animation of gifs
// Adding a click event listener to all elements with a class of "gif" that will call the toggleGifState function
$(document).on("click", ".gif", toggleGifState);

// call function to add all buttons to page initially
renderButtons();



