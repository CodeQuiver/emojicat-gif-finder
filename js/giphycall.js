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

        // get image wanted to display from object and store in variable
        // var currentGif = results[i].images.fixed_height_still.url;

        //get still and animated version urls and store in variables
        var stillGif = results[i].images.fixed_height_still.url;
        var animatedGif = results[i].images.fixed_height.url;

        // console.log("currentGif is: " + currentGif);
        console.log("stillGif is: " + stillGif);
        console.log("animatedGif is: " + animatedGif);

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

// ============================== End Function Declarations ====================================================

// ==================================not yet added section- adding new topic buttons via the form=====================
    // fill in code here


// ================================ Main Code Body - Events and Function Calls =================================

//onclick event to display gifs- should be listening for buttons with ".topic-btn" class- calls function to query ajax then calls function to print array to page
$("#buttons-view").on("click", ".topic-btn", function() {
  //clear previous gifs from div before adding new ones
  $("#gifs-view").empty();

  // store data-name from the clicked button in a variable to use in the queryurl
  var topic = $(this).attr("data-name");

  topicClicked(topic);
} );




// call function to add all buttons to page
renderButtons();





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


